interface HeaderTextProps {
    placeholder: string;
}

export default function HeaderText({ placeholder }: HeaderTextProps) {
    return (
        <>
            <h2 className="text-4xl font-bold text-center text-darkGray">
                {placeholder}
            </h2>
        </>
    )
}