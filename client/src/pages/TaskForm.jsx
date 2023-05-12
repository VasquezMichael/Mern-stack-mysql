import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";
const Taskform = () => {
  const params = useParams();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);
  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-500 p-10 max-w-sm rounded-sm mx-auto"
          >
            <h1 className="text-xl uppercase text-center font-bold">
              {params.id ? "Edit task" : "New Task"}
            </h1>
            <label className="block">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
              className="rounded-sm w-full px-1"
            />
            <label className="block">description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
              className="rounded-sm w-full px-1"
            ></textarea>
            <button
              className="block bg-slate-400 px-2 py-1 rounded-sm w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "saving" : "save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Taskform;
