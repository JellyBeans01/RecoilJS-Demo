/* eslint-disable no-console */

// IMPORTANT NOTE
// This API is currently under development and will change

import { FC, useEffect } from "react";
import { useRecoilSnapshot, useRecoilValue } from "recoil";
import { enableLogsSelector } from "../../recoil/selectors/debugSelectors";

///////////////////////////////
// Log state as it is edited //
///////////////////////////////

const DebugObserver: FC = () => {
    // Subscribe to all state changes and obtain a snapshot of the new change
    const snapshot = useRecoilSnapshot();
    const enableLogging = useRecoilValue(enableLogsSelector);

    useEffect(() => {
        if (enableLogging) {
            // Get a list of all modified items
            const nodes = snapshot.getNodes_UNSTABLE({ isModified: true });

            Array.from(nodes).forEach((node) => {
                console.log(node.key, { value: snapshot.getLoadable(node).contents });
            });

            console.log("---------------------------------------------");
        }
    }, [snapshot]); // eslint-disable-line react-hooks/exhaustive-deps

    return null;
};

export default DebugObserver;
