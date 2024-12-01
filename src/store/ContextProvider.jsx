import { createContext, useReducer } from "react";
import { data } from "../assets/assets";
import { toast } from "react-toastify";

export const contextConsumer = createContext({
  addData: () => {},
  deleteData: () => {},
  update: () => {},
  data: [],
});

let initialData = data;
function reducer(initial, action) {
  let trial = initial;

  switch (action.payload) {
    case "Add": {
      let user = action.user;
      return [...trial, user];
    }

    case "delete": {
      let newuser = trial.filter((item) => item.S_No != action.userid);
      return newuser;
    }

    case "update": {
      const update_data = trial.filter((item) => item.S_No != action.user.S_No);
      const new_data = [action.user, ...update_data];
      new_data.sort((a, b) => parseInt(a.S_No) - parseInt(b.S_No));

      return new_data;
    }
  }
}

function ContextProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialData);

  const addData = (user) => {
    dispatch({
      user,
      payload: "Add",
    });
  };

  console.log(data);

  const deleteData = (userid) => {
    dispatch({
      userid,
      payload: "delete",
    });
    toast.error("Delete Successfully");
  };

  const update = (user) => {
    dispatch({
      user,
      payload: "update",
    });
  };

  return (
    <contextConsumer.Provider value={{ addData, data, deleteData, update }}>
      {children}
    </contextConsumer.Provider>
  );
}

export default ContextProvider;
