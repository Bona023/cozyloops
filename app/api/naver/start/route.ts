import { NextResponse } from "next/server";

export async function GET() {
    const baseURL = "https://nid.naver.com/oauth2.0/authorize";
    const state = crypto.randomUUID();
    const params = {
        response_type: "code",
        client_id: process.env.NAVER_CLIENT_ID!,
        redirect_uri: "http://localhost:3000/api/naver/complete",
        state,
    };
    const formattedParams = new URLSearchParams(params).toString();
    const finalUrl = `${baseURL}?${formattedParams}`;
    const res = NextResponse.redirect(finalUrl);
    res.cookies.set("naver_oauth_state", state, { httpOnly: true, path: "/" });
    return res;
}
