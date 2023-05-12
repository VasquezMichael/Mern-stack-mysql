import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskContext";

const App = () => {
  return (
    <div className="bg-zinc-900 h-screen">
      <NavBar />
      <div className="container mx-auto p-10">
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />}></Route>
            <Route path="/new" element={<TaskForm />}></Route>
            <Route path="/edit/:id" element={<TaskForm />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
};

export default App;
