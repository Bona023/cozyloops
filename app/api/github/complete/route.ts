import db from "@/lib/db";
import { getGithubAccessToken, getGithubUserProfile } from "@/lib/github";
import { sessionLogin } from "@/lib/update-session";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get("code");
    if (!code) {
        return new Response(null, { status: 400 });
    }
    const access_token = await getGithubAccessToken(code);
    const { login, id, email, avatar_url } = await getGithubUserProfile(access_token);
    const userExist = await db.user.findUnique({
        where: { email },
        select: { id: true },
    });
    if (userExist) {
        await sessionLogin(userExist.id);
        return redirect(`/profile/${userExist.id}`);
    }
    const newUser = await db.user.create({
        data: {
            username: login + "-gh",
            github_id: id,
            avatar: avatar_url,
            email,
        },
        select: {
            id: true,
        },
    });
    await sessionLogin(newUser.id);
    return redirect(`/profile/${newUser.id}`);
}
