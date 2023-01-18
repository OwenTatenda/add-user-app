import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import React, { useState } from "react";
import ErrorModal from "./components/ErrorModal";

const usersList = [];
function App() {
  const [users, setUsers] = useState(usersList);

  const usersDataHandler = (data) => {
    setUsers((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div className="App">
      <UserForm onSubmitHandler={usersDataHandler}></UserForm>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
