"use client";
import Input from "@/component/input";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useFormState } from "react-dom";
import { SignUpAction } from "./action";

export default function SignUp() {
    const [state, dispatch] = useFormState(SignUpAction, null);
    return (
        <div className="pt-12 px-10 flex flex-col">
            <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">| 가입</span>
                <Link href="/start">
                    <ChevronLeftIcon className="size-5" />
                </Link>
            </div>
            <form
                action={dispatch}
                className="flex flex-col justify-center items-center gap-3 pt-16 pb-5 px-1"
            >
                <Input
                    name="email"
                    type="text"
                    placeholder="email"
                    required
                    errors={state?.fieldErrors.email}
                />
                <Input
                    name="username"
                    type="text"
                    placeholder="닉네임"
                    required
                    errors={state?.fieldErrors.username}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    required
                    errors={state?.fieldErrors.password}
                />
                <Input
                    name="confirm_password"
                    type="password"
                    placeholder="비밀번호 확인"
                    required
                    errors={state?.fieldErrors.confirm_password}
                />
                <button className="basic-btn text-lg py-2">가입하기</button>
            </form>
            <div className="w-full h-0.5 bg-gray-500/50"></div>
            <div className="flex flex-col gap-4 py-5 px-1">
                <Link
                    className="basic-btn text-lg py-2"
                    href="api/github/start"
                >
                    깃헙으로 계속하기
                </Link>
                <Link
                    className="basic-btn text-lg py-2"
                    href="api/naver/start"
                >
                    네이버로 계속하기
                </Link>
            </div>
        </div>
    );
}
