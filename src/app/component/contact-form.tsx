"use client"

import { Button, Input, Textarea } from "@geist-ui/core"

export default function ContactForm() {
    return <div className="flex flex-col w-1/2 contact-form">
        <div className="flex flex-row">
            <div className="flex flex-col">
                <Input placeholder="이름 (필수)" crossOrigin="" />
                <Input placeholder="이메일 (필수)" crossOrigin="" />
                <Input placeholder="제목" crossOrigin="" />
                <Input placeholder="전화번호 (필수)" crossOrigin="" />
            </div>
            <Textarea className="grow" placeholder="Please enter a description." />
        </div>
        <Button placeholder="submit" shadow type="secondary">Submit</Button>
    </div>
}