/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

import { FC } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { enableLogsSelector } from "../../recoil/selectors/debugSelectors";
import Button from "../Button";

/////////////////////////////
// Log all state on demand //
/////////////////////////////

const DebugButton: FC = () => {
    const enableLogging = useRecoilValue(enableLogsSelector);

    const onClick = useRecoilCallback(({ snapshot }) => async () => {
        if (enableLogging) {
            const nodes = snapshot.getNodes_UNSTABLE();
            for (const node of nodes) {
                const value = await snapshot.getPromise(node);
                console.log(node.key, { value });
            }

            console.log("---------------------------------------------");
        }
    });

    return <Button label="Dump state" onClick={onClick} disabled={!enableLogging} />;
};

export default DebugButton;
