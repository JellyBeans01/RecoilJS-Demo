import { FC } from "react";
import { useRecoilState } from "recoil";
import textAtom from "../recoil/atoms/textAtom";
import { MAX_CHAR_COUNT } from "../resources/constants";

const TextInput: FC = () => {
    // Components that need to read from and write to an atom should use useRecoilState()
    const [text, setText] = useRecoilState(textAtom);

    const onChange = (value: string): void => {
        if (value.length > MAX_CHAR_COUNT) return;

        setText(value);
    };

    return (
        <input
            data-testid="input"
            type="text"
            style={{ width: "250px" }}
            value={text}
            onChange={(evt) => onChange(evt.target.value)}
        />
    );
};

export default TextInput;
