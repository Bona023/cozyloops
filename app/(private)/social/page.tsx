import Image from "next/image";

export default function SocialList() {
    return (
        <div className="h-full pt-10 pb-20 px-10">
            <div className="flex justify-between items-center py-2">
                <span className="text-lg font-semibold">소셜</span>
            </div>
            <div className="py-4 flex items-center gap-4">
                <span className="category-btn">코바늘</span>
                <span className="category-btn">대바늘</span>
                <span className="category-btn">꿀팁</span>
                <span className="category-btn">기타</span>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/imgs/avatar02.jpg"
                            alt="avatar"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="font-semibold">몽실몽실</span>
                    </div>
                    <span className="text-xs font-semibold text-gray-500/80">1h</span>
                </div>
                <div className="w-full h-[320px] relative rounded-xl overflow-hidden">
                    <Image
                        src="/imgs/crocheting1.jpg"
                        alt="post-img"
                        fill
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
}
