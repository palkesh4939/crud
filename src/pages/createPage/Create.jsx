import React, { useContext, useRef, useState } from "react";
import "./Create.css";
import { upload_area } from "../../assets/assets";
import { contextConsumer } from "../../store/ContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const [image, setimage] = useState(false);
  const {addData , data} = useContext(contextConsumer)
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);

  
  const submitform = (e)=>{
     e.preventDefault();

    

    let findSno = data.map((item)=> item.S_No);
    const largestNumber = Math.max(...findSno);
    
    let user = {
      S_No:largestNumber+1,
      name:name.current.value,
      email : email.current.value,
      mobile: mobile.current.value,
      image:image


  }
     addData(user);
     navigate('/')
     toast.success("Create Successfully", { icon: "✅" });
     

}

  return (
    <form onSubmit={submitform} className="form-outer">
      <div className="form-inner">
        <label htmlFor="name">Enter Name</label>
        <input
          ref={name}
          type="text"
          required
          id="name"
          placeholder="Enter Name"
        />
      </div>

      <div className="form-inner">
        <label htmlFor="email">Enter Email</label>
        <input
          ref={email}
          type="email"
          required
          id="email"
          placeholder="Enter Email"
        />
      </div>

      <div className="form-inner">
        <label htmlFor="phone">Enter Phone</label>
        <input
          ref={mobile}
          type="tel"
          required
          id="phone"
          placeholder="Enter Mobile Number"
        />
      </div>

      <div className="image-input">
        <label htmlFor="image" style={{cursor:"pointer"}}>
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" width="200px"  />
        </label>
        <input
          onChange={(e) => {
            setimage(e.target.files[0]);
          }}
          required
          style={{ display: "none" }}
          type="file"
          name=""
          id="image"
        />
      </div>

      <div className="image-input">
       <input style={{cursor:"pointer"}} type="submit" name="" id="" value="Submit" />
      </div>
    </form>
  );
}

export default Create;
