interface HeaderTextProps {
    placeholder: string;
    className?: string;
}

export default function HeaderText({ placeholder, className }: HeaderTextProps) {
    return (
        <>
            <h2 className={`text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-left md:text-left lg:text-left xl:text-left 2xl:text-left text-darkGray ${className}`}>
                {placeholder}
            </h2>
        </>
    )
}