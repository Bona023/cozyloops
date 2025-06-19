import { BellIcon, Cog8ToothIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function PublicProfile() {
    return (
        <div className="h-full pt-10 pb-20 px-10">
            <div className="flex justify-between items-center py-2">
                <span className="text-lg font-semibold">프로필</span>
                <div className="flex gap-2">
                    <BellIcon className="size-5" />
                    <Cog8ToothIcon className="size-5" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-12 gap-5">
                <Image
                    className="rounded-full"
                    src="/imgs/avatar01.jpg"
                    alt="Avatar"
                    width={150}
                    height={150}
                />
                <span className="text-2xl font-bold">뜨개러버</span>
            </div>
            <button className="follow-btn py-2 text-xl mb-5">
                <PlusIcon className="size-6" />
                <span>팔로우하기</span>
            </button>
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-center border-b-4 border-pointRed px-6 py-3 gap-1">
                    <span className="text-xl font-semibold">123</span>
                    <span className="text-base font-semibold text-gray-500/80">포스트</span>
                </div>
                <div className="flex flex-col justify-center items-center border-b-4 border-gray-500/50 px-6 py-3 gap-1">
                    <span className="text-xl font-semibold">34</span>
                    <span className="text-base font-semibold text-gray-500/80">팔로워</span>
                </div>
                <div className="flex flex-col justify-center items-center border-b-4 border-gray-500/50 px-6 py-3 gap-1">
                    <span className="text-xl font-semibold">21</span>
                    <span className="text-base font-semibold text-gray-500/80">팔로잉</span>
                </div>
            </div>
            <div className="grid grid-cols-2 py-10 gap-2 h-2/5 overflow-auto scrollbar-hidden">
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
                <div className="bg-gray-500/50 rounded-xl h-[100px]" />
            </div>
        </div>
    );
}
