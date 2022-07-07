import { FC } from "react";
import { useRecoilState } from "recoil";
import todoListFilterAtom from "../recoil/atoms/todoListFilterAtom";
import { Filter } from "../types";

const TodoListFilter: FC = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterAtom);

    return (
        <div style={{ margin: "20px 0" }}>
            <span>Filter: </span>
            <select value={filter} onChange={(evt) => setFilter(evt.target.value as Filter)}>
                {Object.values(Filter).map((value) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TodoListFilter;
