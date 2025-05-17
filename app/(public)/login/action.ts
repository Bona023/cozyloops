"use server";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { PASSWORD_MIN_LENGTH } from "@/lib/content";

const checkEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: { email },
        select: { id: true },
    });
    return Boolean(user);
};

const formSchema = z.object({
    email: z.string().email("이메일주소 형식이 아닙니다.").refine(checkEmail, "가입된 이메일주소가 아닙니다."),
    password: z.string().min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH + "글자 이상 입력해주세요."),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function LoginAction(prevState: any, formData: FormData) {
    const data = { email: formData.get("email"), password: formData.get("password") };
    const result = await formSchema.spa(data);
    if (!result.success) {
        return result.error.flatten();
    } else {
        const user = await db.user.findUnique({
            where: {
                email: result.data.email,
            },
            select: {
                id: true,
                password: true,
            },
        });
        const pwOk = await bcrypt.compare(result.data.password, user!.password ?? "XX");
        if (pwOk) {
            const session = await getSession();
            session.id = user!.id;
            await session.save();
            redirect("/");
        } else {
            return { fieldErrors: { email: [], password: ["틀린 비밀번호 입니다."] } };
        }
    }
}
