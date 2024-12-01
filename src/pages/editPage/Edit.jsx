import React, { useContext, useEffect, useRef, useState } from "react";
import "./Edit.css";
import { upload_area } from "../../assets/assets";
import { useNavigate, useParams } from "react-router-dom";
import { contextConsumer } from "../../store/ContextProvider";
import { toast } from "react-toastify";

function Edit() {
  const [image, setimage] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    image: "",
  });
  const { sno } = useParams();
  const { data, update } = useContext(contextConsumer);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const submitform = (e) => {
    e.preventDefault();

    if (!image) {
      update(user);
      navigate("/");
      toast.success("Edit Successfully");
    } else {
      let user_copy = {
        ...user,
        image,
      };
      update(user_copy);
      navigate("/");
      toast.success("Edit Successfully");
    }
  };

  useEffect(() => {
    function finddata() {
      const user = data.filter((item) => item.S_No == sno);
      setUser(user[0]);
    }

    finddata();
  }, []);

  function getImageSrc(image, userImage) {
    if (image) {
      return image instanceof File ? URL.createObjectURL(image) : image;
    }
    if (userImage) {
      return typeof userImage === "string" ? userImage : URL.createObjectURL(userImage);
    }
    return null;
  }
  return (
    <form onSubmit={submitform} className="form-outer">
      <div className="form-inner">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          required
          name="name"
          value={user.name}
          id="name"
          onChange={handleChange}
          placeholder="Enter Name"
        />
      </div>

      <div className="form-inner">
        <label htmlFor="email"> Email</label>
        <input
          type="email"
          name="email"
          required
          value={user.email}
          id="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
      </div>

      <div className="form-inner">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="mobile"
          value={user.mobile}
          required
          id="phone"
          onChange={handleChange}
          placeholder="Enter Mobile Number"
        />
      </div>

      <div className="image-input">
        <label htmlFor="image" style={{ cursor: "pointer" }}>
        <img src={getImageSrc(image, user.image)} alt="Preview" width="200px" />
        </label>
        <input
          onChange={(e) => {
            setimage(e.target.files[0]);
          }}
          style={{ display: "none" }}
          type="file"
          name="image"
          id="image"
        />
      </div>

      <div className="image-input">
        <input
          style={{ cursor: "pointer" }}
          type="submit"
          name=""
          id=""
          value="Submit"
        />
      </div>
    </form>
  );
}

export default Edit;
