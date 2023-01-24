import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div class="toggler">
      <input id="toggler-1" name="toggler-1" type="checkbox" value="1" />
      <label for="toggler-1">
        <img
          class="toggler-on"
          version="1.1"
          src="https://icons.veryicon.com/png/o/miscellaneous/offerino-icons/moon-25.png"
          viewBox="0 0 130.2 130.2"
        />
        <img
          class="toggler-off"
          version="1.1"
          src="https://icons.veryicon.com/png/o/miscellaneous/you-are-my-textbook/sun-67.png"
          viewBox="0 0 130.2 130.2"
        />
      </label>
    </div>
  );
};

export default Input;
