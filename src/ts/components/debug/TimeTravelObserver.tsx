import { FC, useEffect, useState } from "react";
import { Snapshot, useGotoRecoilSnapshot, useRecoilSnapshot } from "recoil";

//////////////////////////////////////////////////
// Keep track of the state and enable reverting //
//////////////////////////////////////////////////

const TimeTravelObserver: FC = () => {
    const [snapshots, setSnapshots] = useState<Snapshot[]>([]);

    const snapshot = useRecoilSnapshot();
    const goToSnapshot = useGotoRecoilSnapshot();

    useEffect(() => {
        // Only add the snapshot if it wasn't already included
        // Avoid duplicate entries
        if (snapshots.every((snap) => snap.getID() !== snapshot.getID())) {
            setSnapshots([...snapshots, snapshot]);
        }
    }, [snapshot]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <ol>
            {snapshots.map((snap) => {
                const release = snap.retain();

                return (
                    <li key={`${snap.getID()}`}>
                        <button
                            onClick={() => {
                                // Snapshots are only retained for the duration of the callback that obtained them.
                                // To use them after that they should be explicitly retained
                                release();
                                goToSnapshot(snap);
                            }}
                        >
                            Restore
                        </button>
                    </li>
                );
            })}
        </ol>
    );
};

export default TimeTravelObserver;
