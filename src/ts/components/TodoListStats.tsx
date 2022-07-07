import { FC } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsSelector } from "../recoil/selectors/todoListSelectors";

const TodoListStats: FC = () => {
    const { amount, totalCompleted, totalUncompleted, percentDone } = useRecoilValue(todoListStatsSelector);

    return (
        <>
            <div>Total items: {amount}</div>
            <div>Total completed: {totalCompleted}</div>
            <div>Total uncompleted: {totalUncompleted}</div>
            <div>Percent done: {percentDone}%</div>
        </>
    );
};

export default TodoListStats;
