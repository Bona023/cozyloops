"use client";
import { HomeIcon as HomeOutline, NewspaperIcon as CastOutline, SparklesIcon as SocialOutline, IdentificationIcon as MyOutline } from "@heroicons/react/24/outline";
import { HomeIcon as HomeSolid, NewspaperIcon as CastSolid, SparklesIcon as SocialSolid, IdentificationIcon as MySolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
    const pathname = usePathname();
    return (
        <div className="bg-mainNavy text-mainBeige flex justify-between items-center px-10 py-3 w-[400px] absolute bottom-0 z-10">
            <Link
                href="/"
                className="flex flex-col justify-end items-center gap-1"
            >
                {pathname == "/" ? (
                    <>
                        <HomeSolid className="size-8 text-pointCoral" />
                        <span className="text-sm text-pointCoral">홈</span>
                    </>
                ) : (
                    <>
                        <HomeOutline className="size-8" />
                        <span className="text-sm">홈</span>
                    </>
                )}
            </Link>
            <Link
                href="/cast"
                className="flex flex-col justify-end items-center gap-1"
            >
                {pathname == "/cast" ? (
                    <>
                        <CastSolid className="size-8 text-pointCoral" />
                        <span className="text-sm text-pointCoral">캐스트</span>
                    </>
                ) : (
                    <>
                        <CastOutline className="size-8" />
                        <span className="text-sm">캐스트</span>
                    </>
                )}
            </Link>
            <Link
                href="/social"
                className="flex flex-col justify-end items-center gap-1"
            >
                {pathname == "/social" ? (
                    <>
                        <SocialSolid className="size-8 text-pointCoral" />
                        <span className="text-sm text-pointCoral">소셜</span>
                    </>
                ) : (
                    <>
                        <SocialOutline className="size-8" />
                        <span className="text-sm">소셜</span>
                    </>
                )}
            </Link>
            <Link
                href="/my-page"
                className="flex flex-col justify-end items-center gap-1"
            >
                {pathname == "/my-page" ? (
                    <>
                        <MySolid className="size-8 text-pointCoral" />
                        <span className="text-sm text-pointCoral">마이</span>
                    </>
                ) : (
                    <>
                        <MyOutline className="size-8" />
                        <span className="text-sm">마이</span>
                    </>
                )}
            </Link>
        </div>
    );
}
