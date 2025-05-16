import Input from "@/component/input";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SignUp() {
    return (
        <div className="pt-12 px-10 flex flex-col">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">| 가입</span>
                <Link href="/start">
                    <ChevronLeftIcon className="size-5" />
                </Link>
            </div>
            <form
                action=""
                className="flex flex-col justify-center items-center gap-3 pt-16 pb-5 px-1"
            >
                <Input
                    name="email"
                    type="text"
                    placeholder="email"
                    required
                    errors={[]}
                />
                <Input
                    name="username"
                    type="text"
                    placeholder="사용자 이름"
                    required
                    errors={[]}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    errors={[]}
                />
                <Input
                    name="confirm-password"
                    type="password"
                    placeholder="비밀번호 확인"
                    required
                    errors={[]}
                />
                <button className="basic-btn text-lg py-2">가입하기</button>
            </form>
            <div className="w-full h-0.5 bg-gray-500/50"></div>
            <div className="flex flex-col gap-4 py-5 px-1">
                <Link
                    className="basic-btn text-lg py-2"
                    href="/start"
                >
                    카톡으로 계속하기
                </Link>
                <Link
                    className="basic-btn text-lg py-2"
                    href="/start"
                >
                    구글로 계속하기
                </Link>
            </div>
        </div>
    );
}
