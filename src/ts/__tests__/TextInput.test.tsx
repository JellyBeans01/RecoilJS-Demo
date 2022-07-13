import { render, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import RecoilObserver from "../components/Testing/RecoilObserver";
import textAtom from "../recoil/atoms/textAtom";
import TextInput from "../components/TextInput";

describe("<TextInput />", () => {
    it("should correctly update the input value", () => {
        const onChange = jest.fn();

        const component = render(
            <RecoilRoot>
                <RecoilObserver node={textAtom} onChange={onChange} />
                <TextInput />
            </RecoilRoot>,
        );

        const input = component.getByTestId("input");

        fireEvent.change(input, { target: { value: "Some test value" } });

        expect(onChange).toHaveBeenCalledWith("Some test value");
    });
});
