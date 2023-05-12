import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-slate-500 rounded-sm p-4">
      <header className="flex justify-between">
        <h2 className="text-lg font-bold">{task.title}</h2>
        <span>{task.done === 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-sm">{task.description}</p>

      <span>{task.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-slate-400 px-2 py-1"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-slate-400 px-2 py-1"
          onClick={() => navigate(`edit/${task.id}`)}
        >
          Editar
        </button>
        <button className="bg-slate-400 px-2 py-1" onClick={() => handleDone()}>
          Toggle task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
