import { FC } from "react";
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";
import ResetTextInput from "./ResetTextInput";

const CharacterCounter: FC = () => (
    <div>
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
            <TextInput />
            <CharacterCount />
        </div>
        <div style={{ marginTop: "15px" }}>
            <ResetTextInput />
        </div>
    </div>
);

export default CharacterCounter;
