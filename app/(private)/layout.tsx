import TabBar from "@/component/tab-bar";

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col relative h-full">
            {children}
            <TabBar />
        </div>
    );
}
