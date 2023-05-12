import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

const Taskpage = () => {
  const { tasks, loadTask } = useTasks();

  useEffect(() => {
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length === 0) {
      return <h1>No tasks yet</h1>;
    }
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-4xl text-white font-bold text-center py-5">
        List Task
      </h1>
      <div className="grid grid-cols-3 gap-2 px-10">{renderMain()}</div>
    </div>
  );
};

export default Taskpage;
