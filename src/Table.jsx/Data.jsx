import React, { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import "./Data.css";
import { contextConsumer } from "../store/ContextProvider";
import { Link } from "react-router-dom";

function Data({ item }) {
  const { deleteData } = useContext(contextConsumer);
  return (
    <div className="table-grid">
      <p>{item.S_No}</p>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.mobile}</p>
      <p>
        <img
          src={
            item.image instanceof File
              ? URL.createObjectURL(item.image)
              : item.image
          }
          alt=""

          
        />
      </p>
      <Link to={`/crud/edit/${item.S_No}`} className="edit-icon">
        <p className="icon">
          <CiEdit />
        </p>
      </Link>

      <p className="icon icon1" onClick={() => deleteData(item.S_No)}>
        <MdOutlineDeleteForever />
      </p>
    </div>
  );
}

export default Data;
