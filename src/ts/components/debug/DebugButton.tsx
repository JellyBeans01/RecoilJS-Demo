/* eslint-disable no-console, no-restricted-syntax, no-await-in-loop */

import { FC } from "react";
import { useRecoilCallback, useRecoilValue } from "recoil";
import { enableLogsSelector } from "../../recoil/selectors/debugSelectors";

/////////////////////////////
// Log all state on demand //
/////////////////////////////

const DebugButton: FC = () => {
    const enableLogging = useRecoilValue(enableLogsSelector);

    const onClick = useRecoilCallback(({ snapshot }) => async () => {
        if (enableLogging) {
            console.log("Atom values");

            const nodes = snapshot.getNodes_UNSTABLE();
            for (const node of nodes) {
                const value = await snapshot.getPromise(node);
                console.log(node.key, { value });
            }

            console.log("---------------------------------------------");
        }
    });

    return (
        <button type="button" onClick={onClick} disabled={!enableLogging}>
            Dump state
        </button>
    );
};

export default DebugButton;
