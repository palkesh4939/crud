import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Table from "./Table.jsx/Table";
import ContextProvider from "./store/ContextProvider";
import Create from "./pages/createPage/Create";
import Edit from "./pages/editPage/Edit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ContextProvider>
      <div style={{ width: "100px" }}>
        <ToastContainer />
      </div>

      <div className="big-div">
        <div style={{ width: "70%" }}>
          <Header />
        </div>
        <Routes>
          <Route path="/crud/" element={<Table />} />
          <Route path="/crud/create" element={<Create />} />
          <Route path="/crud/edit/:sno" element={<Edit />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
