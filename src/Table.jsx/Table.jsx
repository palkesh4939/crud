import React, { useContext } from "react";
import "./Table.css";
import Data from "./Data";
import { contextConsumer } from "../store/ContextProvider";
import { data } from "../assets/assets";

const font = {fontWeight:"700"  }


function Table() {

 const {data} =  useContext(contextConsumer);
 

  return (
    <div className="main-div">
      <div className="table-grid">
        <p style={font} className="ji">S.No</p>
        <p style={font}>Name</p>
        <p style={font}>Email ID</p>
        <p style={font}>Phone no</p>
        <p style={font}>Image</p>
        <p style={font}>Edit</p>
        <p style={font}>Delete</p>
      </div>

      {data.map((item , index)=>{
          return (
            <Data key={index}  item= {item}/>
          )
      })}

    </div>
  );
}

export default Table;
