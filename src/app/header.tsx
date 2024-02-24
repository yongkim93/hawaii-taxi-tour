import Image from "next/image";
import Link from "next/link";

export default function Header() {

    return <div className="flex flex-row mx-64 my-20 header">
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
            <div className="flex flex-row justify-between text-xl menu">
                <Link href="/">HOME</Link>
                <Link href="/about">회사소개</Link>
                <Link href="/taxi-service">택시서비스</Link>
                <Link href="/tour-service">투어서비스</Link>
                <Link href="/event">이달의이벤트</Link>
                <Link href="/contact-us">고객센터</Link>
            </div>
        </div>
    </div>
}