import { FC } from "react";
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";

const CharacterCounter: FC = () => (
    <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center" }}>
        <TextInput />
        <CharacterCount />
    </div>
);

export default CharacterCounter;
