export interface CTAButtonProps {
    placeholder: React.ReactNode;
}

export interface PrimaryButtonProps {
    placeholder: React.ReactNode;
    primary?: boolean;
}

export interface SecondaryButtonProps {
    placeholder: React.ReactNode;
    primary?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
}

export interface ModalProps {
    open?: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
    type?: string;
    setType?: (type: string) => void; // Made optional
}

export interface InputProps {
    label: string;
    inputTitle: string;
    type: string;
}