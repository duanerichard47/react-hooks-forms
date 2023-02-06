import React, { useState } from "react";

function Form() {
  const [number, setNumber] = useState(0);
  const [isInvalidNumber, setIsInvalidNumber] = useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setIsInvalidNumber(null);
    } else {
      setIsInvalidNumber(`${newNumber} is not a valid number!`);
    }
  }

  return (
    <form>
      <input type="number" value={number} onChange={handleNumberChange} />
      {isInvalidNumber ? <span style={{ color: "red" }}>{isInvalidNumber}</span> : null}
    </form>
  );
} export default Form;





// import React from "react";

// function Form({
//   firstName,
//   lastName,
//   handleFirstNameChange,
//   handleLastNameChange,
// }) {
//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;







//import React, { useState } from "react";
// function Form() {
//   const [newsletter, setNewsletter] = useState(false);

//   function handleNewsletterChange(event) {
//     // .checked, not .value!
//     setNewsletter(event.target.checked);
//   }
// console.log(newsletter)
//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input
//         type="checkbox"
//         id="newsletter"
//         onChange={handleNewsletterChange}
//         // {/* checked instead of value */}
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;







//import React, { useState } from "react";
// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");

//   function handleFirstNameChange(event){
//     setFirstName(event.target.value); //match betwen event.target.value & {firstName}
//   }
//   console.log(firstName)
//   function handleLastNameChange(event){
//     setLastName(event.target.value);
//   }
//   console.log(lastName)
//   return (
//     <form>
//       <input type="text" onChange= {handleFirstNameChange}  value={firstName} />
//       <input type="text" onChange= {handleLastNameChange}   value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;
