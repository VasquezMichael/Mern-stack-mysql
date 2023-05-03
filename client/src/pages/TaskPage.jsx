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
      <h1>List Task</h1>
      {renderMain()}
    </div>
  );
};

export default Taskpage;