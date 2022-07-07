import { FC } from "react";
import { useRecoilValue } from "recoil";
import { currentUsernameQuerySelector } from "../recoil/selectors/userSelectors";
import userAtom from "../recoil/atoms/userAtom";

const Username: FC = () => {
    const { name } = useRecoilValue(userAtom);
    const username = useRecoilValue(currentUsernameQuerySelector(name));

    return <div style={{ marginRight: 10 }}>Hallo {username}</div>;
};

export default Username;
