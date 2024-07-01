// import React, { useRef } from 'react';

// function FocusInput() {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Focus the input</button>
//     </div>
//   );
// }

// export default FocusInput;


// useRef(null) is used to create a ref object with an initial value of null.
// The ref attribute is added to the input element, passing inputRef to it.
// The handleClick function accesses inputRef.current to call the focus method on the input element.