import { FC } from "react";
import { useRecoilState } from "recoil";
import textState from "../recoil/atoms/textState";

const TextInput: FC = () => {
    // Components that need to read from and write to an atom should use useRecoilState()
    const [text, setText] = useRecoilState(textState);

    return <input type="text" style={{ width: "250px" }} value={text} onChange={(evt) => setText(evt.target.value)} />;
};

export default TextInput;
