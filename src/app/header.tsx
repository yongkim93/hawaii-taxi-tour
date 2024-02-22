import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return <div className="flex flex-row p-20">
        <Image
            src="/logo_1.webp"
            alt="logo_1"
            width={270}
            height={93}
        />
        <div className="flex flex-col w-full">
            <Image
                src="/logo_2.webp"
                alt="logo_2"
                width={273}
                height={48}
            />
            <div className="flex flex-row justify-between text-xl">
                <Link href="/">HOME</Link>
                <Link href="/about">회사소개</Link>
                <Link href="/dashboard">택배서비스</Link>
                <Link href="/dashboard">투어서비스</Link>
                <Link href="/dashboard">이달의이벤트</Link>
                <Link href="/dashboard">고객센터</Link>
            </div>
        </div>
    </div>
}