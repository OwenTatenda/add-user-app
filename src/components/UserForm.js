import styles from "./UserForm.module.css";
import React, { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userName, setUsername] = useState("");
  const [userAge, setAge] = useState("");
  const [error, setError] = useState();
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangeAge = (event) => {
    setAge(event.target.value);
  };
  const submitUsernameHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef.current.value);
    if (userName.trim().length < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name (non-empty values).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    setUsername("");
    setAge("");
    const userData = {
      name: userName,
      age: userAge,
    };
    props.onSubmitHandler(userData);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConFirm={errorHandler}
        />
      )}
      <form
        action=""
        onSubmit={submitUsernameHandler}
        className={styles.UserForm}
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          size={60}
          placeholder="Username..."
          onChange={onChangeUsername}
          value={userName}
          ref={nameInputRef}
        />
        <label htmlFor="">Age(Years)</label>
        <input
          type="number"
          min="1"
          size={60}
          placeholder="Age..."
          onChange={onChangeAge}
          value={userAge}
          ref={ageInputRef}
        />
        <div>
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
