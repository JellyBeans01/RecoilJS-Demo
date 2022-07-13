import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import ErrorBoundary from "./ErrorBoundary";
import { friendsQuerySelector } from "../recoil/selectors/friendsSelectors";
import userAtom from "../recoil/atoms/userAtom";

const Friends: FC = () => {
    const userId = useRecoilValue(userAtom);
    const friendsList = useRecoilValue(friendsQuerySelector(userId));

    return (
        <>
            <h2>Friends</h2>
            <ErrorBoundary fallbackLabel="Looks like we could not fetch your friends list...">
                <Suspense fallback={<div>Loading...</div>}>
                    {!friendsList.length && <div>No friends yet!</div>}
                    {friendsList.map(({ id, name, username, email }) => (
                        <div key={id} style={{ marginBottom: 10 }}>
                            <div style={{ textAlign: "left" }}>
                                <span style={{ fontWeight: "bold" }}>{username}</span>
                                <small> ({name})</small>
                            </div>
                            <div style={{ textAlign: "left" }}>{email}</div>
                        </div>
                    ))}
                </Suspense>
            </ErrorBoundary>
        </>
    );
};

export default Friends;
