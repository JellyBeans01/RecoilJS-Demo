# RecoilJS-Demo
A brief PoC using RecoilJS

## What is Recoil

Recoil is an experimental state management library for React apps.
It provides multiple capabilities that are difficult to achieve with React alone, while being compatible with the newest
features of React.

It also emphasizes developer experience, while keeping the API minimalistic and focus on React.

## How does it work

Recoil lets you create a data-flow graph that flows from shared state ( = atoms), through pure functions ( = selectors)
down into your React components. So basically, a bit like Redux.

## Recoil vs Redux

### Performance

Redux uses a central store where all the data for the app lives.
Recoil instead splits state into individual atoms, that can be accessed separately.

A quick example: We have a todo-app with let's say 10 todo items.

With Redux, the component will only need to re-render when the specific task re-renders - same as Recoil.
The caveat here is that each time ANY part of the state changes, the Redux selector would have to recalculate. Whereas
with Recoil, if we were to edit the 5th task, ONLY the 5th task would need to re-render (because we would have 10 
separate atoms).

With these performance optimisations, Recoil makes sense for huge apps that need to render a lot of components.
A regular app is probably going to perform just fine with Redux.

But what about React Context?

#### React Context

React Context does have some potential downsides when it comes to performance.
Any changes to state will cause re-renders for components that are using that state.


### API

I'm actually going to compare Recoil vs Redux Toolkit, since it is more simple to implement Redux with Redux Toolkit 
anyway.

Redux Toolkit example

```typescript jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "name",
  initialState: "Initial state",
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      return name;
    }
  }
});

const {
  actions: { updateName },
  reducer: nameReducer
} = nameSlice;

const store = configureStore({
  reducer: { name: nameReducer }
});

const App = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);
  const onSetName = (name) => dispatch(updateName({ name }));

  return (
    <input
      type="text"
      value={name}
      onChange={(event) => onSetName(event.target.value)}
    />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Recoil example

```typescript jsx
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot, atom, useRecoilState } from "recoil";

const nameState = atom({
    key: "nameState",
    default: "Initial state"
});

const App = () => {
    const [name, setName] = useRecoilState(nameState);

    return (
        <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
        />
    );
};

ReactDOM.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>,
    document.getElementById("root")
);
```

- Both libraries need you to wrap the entire app in a provider component
- Recoil lets tou initialise a store using `atom()`. This comes with a selector and dispatchable action built-in.
- Redux lets you create a store using `createSlice()` together with `configureStore()`. This comes with actions and a
reducer. You'll need to define a selector separately.
- Redux also requires the `useDispatch` and `useSelector` hooks to be able to dispatch actions and use selectors.

Recoil works more out of the box whereas Redux does have some additional boilerplate code to get started.

### Conclusion

- Even with Redux Toolkit, there is more boilerplate code than Recoil
- Recoil MAY provide performance benefits, but only is the app is complex enough
- Recoil is still in experimental phase, whereas Redux is an established library

Another thing is that Redux provide middleware functionality, while Recoil does not yet support it! However, there is
an open issue on their GitHub repository.
