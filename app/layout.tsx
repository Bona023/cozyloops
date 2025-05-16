import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cozy Loops",
    description: "한 땀 한 땀, 함께 엮는 따뜻한 시간",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="main-box">{children}</div>
            </body>
        </html>
    );
}
