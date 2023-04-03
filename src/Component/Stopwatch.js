import React from "react";
import { RxCross2 } from "react-icons/rx";
const Stopwatch = ({
  toggleStopWatch,
  timeStart,
  hour,
  minute,
  second,
  milliSecond,
  showStopBtn,
  showResumeBtn,
  handleStop,
  showStartBtn,
  handleResetBtn,
  handleResume,
}) => {
  return (
    <div
      className={
        "border-solid border-2 bg-slate-600 border-white min-w-[30%] text-white relative pb-3"
      }
    >
      <RxCross2
        className=" absolute  right-0 cursor-pointer "
        onClick={toggleStopWatch}
      />
      <h1 className="text-5xl ">Stopwatch</h1>

      <div className="flex  justify-center text-5xl my-5">
        <p className="w-20">{hour}:</p>
        <p className="w-20">{minute} :</p>
        <p className="w-20">{second} :</p>
        <p className="w-20">{milliSecond}</p>
      </div>

      {showStartBtn && (
        <button
          onClick={timeStart}
          className={
            " ml-4 bg-slate-700 text-white px-8  py-2 text-xl rounded hover:bg-sky-600"
          }
        >
          Start
        </button>
      )}

      {showStopBtn && (
        <button
          onClick={handleStop}
          className={
            " ml-4 bg-slate-700 text-white  px-8  py-2 text-xl rounded hover:bg-sky-600"
          }
        >
          Stop
        </button>
      )}

      {showResumeBtn && (
        <div>
          <button
            onClick={handleResume}
            className={
              " ml-4 bg-slate-700 text-white  px-8  py-2 text-xl rounded hover:bg-sky-600"
            }
          >
            Resume
          </button>
          <button
            onClick={handleResetBtn}
            className={
              " ml-4 bg-slate-700 text-white  px-8  py-2 text-xl rounded hover:bg-sky-600"
            }
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Stopwatch;
