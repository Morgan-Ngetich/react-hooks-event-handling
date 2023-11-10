import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`); //Event object wll be logged out
  }

  return (
    <div>
      {/* Intially the the button numbers wiill be displayed. To fix, we add add an arrow function that returns the {handleClick */}
      {/* function definition that will only be invoked when the button is clicked. */}
      <button onClick={() => handleClick(1)}>Button 1</button> 
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
