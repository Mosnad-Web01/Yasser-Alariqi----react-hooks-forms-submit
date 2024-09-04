import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData , setSubmittedData ] = useState([])



  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    const formData = { firstName: firstName, lastName: lastName };
    setSubmittedData([...submittedData, formData])
    setFirstName("");
    setLastName("");
  }

  const listOfSubmmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  })

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>

      {listOfSubmmissions}

    </form>
  );
}

export default Form;
