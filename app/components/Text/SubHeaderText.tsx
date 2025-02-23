interface SubHeaderTextProps {
    placeholder: string;
}

export default function SubHeaderText({ placeholder }: SubHeaderTextProps) {
    return (
        <>
            <h2 className="font-medium text-mutedGray text-xl">
                {placeholder}
            </h2>
        </>
    )
}