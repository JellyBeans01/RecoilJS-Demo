import { FC, useEffect } from "react";
import { RecoilValue, useRecoilValue } from "recoil";

type PropsType = {
    node: RecoilValue<unknown>;
    onChange: (value: unknown) => void;
};

const RecoilObserver: FC<PropsType> = (props) => {
    const { node, onChange } = props;

    const value = useRecoilValue(node);

    useEffect(() => {
        onChange(value);
    }, [onChange, value]);

    return null;
};

export default RecoilObserver;
