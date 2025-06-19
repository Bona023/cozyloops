import { getSession } from "./session";

export async function sessionLogin(id: number) {
    const session = await getSession();
    session.id = id;
    await session.save();
    return;
}

export async function sessionLogout() {
    const session = await getSession();
    await session.destroy();
    return;
}
