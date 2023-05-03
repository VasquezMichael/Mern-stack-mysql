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
    <TaskContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskPage />}></Route>
        <Route path="/new" element={<TaskForm />}></Route>
        <Route path="/edit/:id" element={<TaskForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </TaskContextProvider>
  );
};

export default App;
