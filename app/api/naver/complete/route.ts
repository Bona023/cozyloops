import db from "@/lib/db";
import { sessionLogin } from "@/lib/update-session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    const state = searchParams.get("state");
    if (searchParams.get("error")) {
        return new NextResponse("Invalid state", { status: 400 });
    }
    const accessTokenParams = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: process.env.NAVER_CLIENT_ID!,
        client_secret: process.env.NAVER_CLIENT_SECRET!,
        code: code!,
        state: state!,
    });
    const accessTokenRes = await fetch("https://nid.naver.com/oauth2.0/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: accessTokenParams.toString(),
    });
    const { access_token, error, error_description } = await accessTokenRes.json();
    if (error) {
        return new NextResponse(error_description, { status: 400 });
    }
    const userProfileResponse = await fetch("https://openapi.naver.com/v1/nid/me", {
        headers: { Authorization: `Bearer ${access_token}` },
    });
    const { response } = await userProfileResponse.json();
    const existUser = await db.user.findUnique({
        where: {
            naver_id: response.id,
        },
        select: { id: true },
    });
    const baseUrl = `${request.nextUrl.origin}`;
    if (existUser) {
        await sessionLogin(existUser.id);
        const redirectUrl = new URL(`profile/${existUser.id}`, baseUrl);
        const res = NextResponse.redirect(redirectUrl);
        res.cookies.delete({ name: "naver_oauth_state", path: "/" });
        return res;
    }
    const newUser = await db.user.create({
        data: {
            username: response.name + "-na",
            naver_id: response.id,
            email: response.email,
            avatar: response.profile_image,
        },
        select: { id: true },
    });
    await sessionLogin(newUser.id);
    const redirectUrl = new URL(`profile/${newUser.id}`, baseUrl);
    const res = NextResponse.redirect(redirectUrl);
    res.cookies.delete({ name: "naver_oauth_state", path: "/" });
    return res;
}
