import React from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "./Form.css"

const Form = () => {
  const driverObj = driver({
    popoverClass: "driverjs-theme",
    stagePadding: 3,
  });

  driverObj.highlight({
    element: "h1",
    popover: {
      title : "Read me",
      description: "This is a headline description",
    },
  });

  return (
    <div>
        <h1>This is my description</h1>
    </div>
  );
};

export default Form;
