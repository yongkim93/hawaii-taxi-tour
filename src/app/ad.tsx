import Image from "next/image";

export default function Ad({ path }) {
    return <div className="px-80 py-5">
        <Image
            src={path}
            alt={path}
            width={300}
            height={300}
            layout="responsive"
        />
    </div>
}