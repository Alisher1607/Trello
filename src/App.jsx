import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import TodoForm from "./components/Todos/TodoForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="todoform" element={<TodoForm />} />
          <Route path="*" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
