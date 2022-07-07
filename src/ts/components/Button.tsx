import { FC } from "react";

type PropsType = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};
const Button: FC<PropsType> = (props) => {
    const { label, disabled, onClick } = props;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            style={{ cursor: disabled ? "default" : "pointer" }}
        >
            {label}
        </button>
    );
};

export default Button;
