import React from "react";

const ShowCountdownBtn = ({ toggleCountdown }) => {
  return (
    <button
      onClick={toggleCountdown}
      className={
        " ml-4 bg-slate-700 text-white px-4 text-xl rounded hover:bg-sky-600"
      }
    >
      Show Countdown
    </button>
  );
};

export default ShowCountdownBtn;
