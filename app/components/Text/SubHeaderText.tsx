interface SubHeaderTextProps {
    placeholder: string;
}

export default function SubHeaderText({ placeholder }: SubHeaderTextProps) {
    return (
        <>
            <h2 className="font-medium text-mutedGray text-base md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-left md:text-center lg:text-center xl:text-center 2xl:text-center">
                {placeholder}
            </h2>
        </>
    )
}