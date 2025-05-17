"use server";
import { z } from "zod";
import bcrypt from "bcrypt";
import db from "@/lib/db";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

const formSchema = z
    .object({
        email: z.string().email({ message: "사용하실 email을 입력해주세요" }),
        username: z.string().min(3, "사용자이름은 3글자 이상이어야 합니다.").max(20, "사용자이름은 20글자 이하여야 합니다."),
        password: z.string().min(4),
        confirm_password: z.string(),
    })
    .superRefine(async ({ username }, ctx) => {
        const user = await db.user.findUnique({
            where: {
                username,
            },
            select: {
                id: true,
            },
        });
        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "이미 사용 중인 이름 입니다.",
                path: ["username"],
                fatal: true,
            });
            return z.NEVER;
        }
    })
    .superRefine(async ({ email }, ctx) => {
        const user = await db.user.findUnique({
            where: {
                email,
            },
            select: {
                id: true,
            },
        });
        if (user) {
            ctx.addIssue({
                code: "custom",
                message: "이미 사용 중인 이메일주소입니다.",
                path: ["email"],
                fatal: true,
            });
            return z.NEVER;
        }
    })
    .refine(({ password, confirm_password }) => password === confirm_password, { message: "비밀번호와 비밀번호 확인이 일치하지 않습니다.", path: ["confirm_password"] });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function SignUpAction(prevState: any, formData: FormData) {
    const data = {
        email: formData.get("email"),
        username: formData.get("username"),
        password: formData.get("password"),
        confirm_password: formData.get("confirm_password"),
    };
    const result = await formSchema.spa(data);
    if (result.success) {
        const hashedPw = await bcrypt.hash(result.data.password, 12);
        const user = await db.user.create({
            data: {
                username: result.data.username,
                email: result.data.email,
                password: hashedPw,
            },
            select: {
                id: true,
            },
        });
        const session = await getSession();
        session.id = user.id;
        await session.save();
        redirect("/");
    } else {
        return result.error.flatten();
    }
}
