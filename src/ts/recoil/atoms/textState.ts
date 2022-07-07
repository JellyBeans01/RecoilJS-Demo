import { atom } from "recoil";
import { StateKeys } from "../stateKeys";

// An atom represents a piece of state. Atoms can be read from and written to from any component. Components that read
// the value of an atom are implicitly subscribed to that atom, so any atom updates will result in a re-render of all
// components subscribed to that atom

const textState = atom({
    key: StateKeys.Text, // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
});

export default textState;
