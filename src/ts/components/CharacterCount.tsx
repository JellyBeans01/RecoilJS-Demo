import { FC } from "react";
import { useRecoilValue } from "recoil";
import charCountSelector from "../recoil/selectors/charCountSelector";
import { MAX_CHAR_COUNT } from "../resources/constants";

const CharacterCount: FC = () => {
    // We can use the useRecoilValue() hook to read the value of charCountState
    const count = useRecoilValue(charCountSelector);

    return (
        <div style={{ marginLeft: "10px", fontSize: "small", alignSelf: "flex-end" }}>
            Max characters: {count} / {MAX_CHAR_COUNT}
        </div>
    );
};

export default CharacterCount;
