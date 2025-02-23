interface SubHeaderTextProps {
    placeholder: string;
}

export default function SubHeaderText({ placeholder }: SubHeaderTextProps) {
    return (
        <>
            <h2 className="font-medium text-mutedGray text-md md:text-md lg:text-base xl:text-base 2xl:text-xl text-left md:text-left lg:text-left xl:text-left 2xl:text-left">
                {placeholder}
            </h2>
        </>
    )
}