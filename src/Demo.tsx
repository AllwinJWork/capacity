import React from "react";

import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Demo = () => {
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: "#tour-example",
        popover: {
          title: "Click to view more information",
          description:
            "Learn about chrome.",
          side: "left",
          align: "start",
        },
      },
      {
        element: "code .line:nth-child(1)",
        popover: {
          title: "Import the Library",
          description:
            "It works the same in vanilla JavaScript as well as frameworks.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "code .line:nth-child(2)",
        popover: {
          title: "Importing CSS",
          description:
            "Import the CSS which gives you the default styling for popover and overlay.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: "code .line:nth-child(4) span:nth-child(7)",
        popover: {
          title: "Create Driver",
          description:
            "Simply call the driver function to create a driver.js instance",
          side: "left",
          align: "start",
        },
      },
      {
        element: "code .line:nth-child(18)",
        popover: {
          title: "Start Tour",
          description:
            "Call the drive method to start the tour and your tour will be started.",
          side: "top",
          align: "start",
        },
      },
      {
        element: 'a[href="/docs/configuration"]',
        popover: {
          title: "More Configuration",
          description:
            "Look at this page for all the configuration options you can pass.",
          side: "right",
          align: "start",
        },
      },
      {
        popover: {
          title: "Happy Coding",
          description:
            "And that is all, go ahead and start adding tours to your applications.",
        },
      },
    ],
    
  });
  driverObj.drive();

 

  return (
    <div>
      <article>
        <h1 title="Click to view more information">Most Popular Browsers</h1>
        <article>
          <h2 title="Google Chrome">Google Chrome</h2>
          <p>
            Google Chrome is a web browser developed by Google, released in
            2008. Chrome is the world's most popular web browser today!
          </p>
        </article>
        <article>
          <h2 title="Mozilla Firefox">Mozilla Firefox</h2>
          <p>
            Mozilla Firefox is an open-source web browser developed by Mozilla.
            Firefox has been the second most popular web browser since January,
            2018.
          </p>
        </article>
        <article>
          <h2 title="Microsoft Edge">Microsoft Edge</h2>
          <p>
            Microsoft Edge is a web browser developed by Microsoft, released in
            2015. Microsoft Edge replaced Internet Explorer.
          </p>
        </article>
      </article>
    </div>
  );
  
};


export default Demo;
