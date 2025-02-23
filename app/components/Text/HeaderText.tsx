interface HeaderTextProps {
    placeholder: string;
}

export default function HeaderText({ placeholder }: HeaderTextProps) {
    return (
        <>
            <h2 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl font-bold text-left md:text-center lg:text-center xl:text-center 2xl:text-center text-darkGray">
                {placeholder}
            </h2>
        </>
    )
}