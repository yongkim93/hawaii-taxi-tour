"use client"

import { Button, Drawer, Input, Spacer, Textarea } from "@geist-ui/core"
import React from "react"
import Image from "next/image";
import Link from "next/link";

export default function HeaderMenu() {
    const [state, setState] = React.useState(false)
    return (
        <div className="header-menu flex flex-col items-center">
            <div className="flex flex-row w-full">
                <Image
                    src="/logo_1.webp"
                    alt="logo_1"
                    width={270}
                    height={93}
                />
                <Image
                    src="/logo_2.webp"
                    alt="logo_2"
                    width={273}
                    height={48}
                />
            </div>
            <Spacer h={1} />
            <Button placeholder="menu" auto onClick={() => setState(true)} scale={1.5}>Menu</Button>
            <Drawer visible={state} onClose={() => setState(false)} placement="right">
                <Drawer.Title>Menu</Drawer.Title>
                {/* <Drawer.Subtitle>This is a drawer</Drawer.Subtitle> */}
                <Drawer.Content>
                    <div className="flex flex-row justify-between text-xl menu">
                        <Link href="/">HOME</Link>
                        <Link href="/about">회사소개</Link>
                        <Link href="/taxi-service">택시서비스</Link>
                        <Link href="/tour-service">투어서비스</Link>
                        <Link href="/event">이달의이벤트</Link>
                        <Link href="/contact-us">고객센터</Link>
                    </div>
                </Drawer.Content>
            </Drawer>
            <Spacer h={1} />
        </div>
    )
}