import React from "react";

const ShoWatchbtn = ({ toggleStopWatch }) => {
  return (
    <button
      onClick={toggleStopWatch}
      className={
        "bg-slate-700 text-white px-4 py-2 text-xl rounded hover:bg-sky-600"
      }
    >
      {" "}
      Show Stopwatch
    </button>
  );
};

export default ShoWatchbtn;
