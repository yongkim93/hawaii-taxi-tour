import Image from "next/image";

export default function Ad({ path }) {
    return <div className="px-80 py-5">
        <Image
            src={path}
            alt={path}
            // layout="responsive"
            width={500}
            height={500}
            // width="0"
            // height="0"
            // sizes="100vw"
        />
    </div>
}