import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/session";

interface Routes {
    [key: string]: boolean;
}

const publicOnlyUrl: Routes = {
    "/start": true,
    "/login": true,
    "/sign-up": true,
    "/api/github/start": true,
    "/api/github/complete": true,
};

export async function middleware(request: NextRequest) {
    const session = await getSession();
    const exists = publicOnlyUrl[request.nextUrl.pathname];
    if (session.id) {
        if (exists) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    } else {
        if (!exists) {
            return NextResponse.redirect(new URL("/start", request.url));
        }
    }
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
