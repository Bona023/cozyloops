import Image from "next/image";
import Link from "next/link";

export default function Start() {
    return (
        <div className="flex flex-col px-10 pt-12 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2 py-10">
                <Image
                    src="/imgs/main-img.png"
                    alt="main"
                    width={200}
                    height={200}
                    priority
                />
                <span className="text-4xl font-bold mt-4">Cozy Loops</span>
                <span className="text-sm">한 땀 한 땀, 함께 엮는 따뜻한 시간</span>
            </div>
            <div className="grid grid-cols-1 gap-6 py-10 w-full">
                <Link
                    href="/sign-up"
                    className="basic-btn text-2xl py-3"
                >
                    시작하기
                </Link>
                <Link
                    href="/login"
                    className="basic-btn text-2xl py-3"
                >
                    로그인
                </Link>
            </div>
        </div>
    );
}
