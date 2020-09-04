import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function declareName(event) {
    const newName = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "firstName") {
        return {
          firstName: newName,
          lastName: prevValue.lastName
        };
      } else if (inputName === "lastName") {
        return {
          firstName: prevValue.firstName,
          lastName: newName
        };
      }
    });
  }
  console.log(fullName);
  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input
          onChange={declareName}
          name="firstName"
          placeholder="First Name"
          value={fullName.firstName}
        />
        <input
          onChange={declareName}
          name="lastName"
          placeholder="Last Name"
          value={fullName.lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
