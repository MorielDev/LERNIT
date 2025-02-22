import Image from "next/image";

export default function Logo() {
    return (
        <>
            <div className="">
                <Image
                    src="/logo.png"
                    height={100}
                    width={100}
                    alt="logo"
                />
            </div>
        </>
    );
}