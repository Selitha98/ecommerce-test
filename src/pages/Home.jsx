import React from "react";
import { toast } from "react-toastify";

function Home() {
  function handleClick() {
    toast.success("You clicked me!");
  }
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Click me
      </button>
    </div>
  );
}

export default Home;
