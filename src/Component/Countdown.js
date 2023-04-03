import React from "react";
import { RxCross2 } from "react-icons/rx";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
const Countdown = ({
  toggleCountdown,
  countHour,
  countMinute,
  countSecond,
  hoursIncrement,
  hoursDecrement,
  minuteIncrement,
  minuteDecrement,
  secondIncrement,
  secondDecrement,
  countTimeStart,
  countStartBtn,
  countStopBtn,
  countResumeBtn,
  countResetBtn,
  handleStopCountDown,
  handleResumeBtnCountDown,
  handleResetBtnCountDown,
}) => {
  return (
    <div
      className={
        "border-solid border-2 border-white bg-slate-600 min-w-[30%] text-white relative ml-4 my-4"
      }
    >
      <RxCross2
        className=" absolute  right-0 cursor-pointer "
        onClick={toggleCountdown}
      />
      <h1 className="text-5xl">Countdown</h1>
      <div className="flex justify-center  ">
        {/* Hours */}
        <div className="flex justify-center items-center  flex-col">
          <p className="text-2xl">Hours:</p>
          <BsArrowUpSquareFill onClick={hoursIncrement} />
          <p className="text-5xl my-4">{countHour}</p>
          <BsArrowDownSquareFill onClick={hoursDecrement} />
        </div>
        {/* Minute */}
        <div className="flex justify-center items-center  flex-col mx-1">
          <p className="text-2xl">Minutes:</p>
          <BsArrowUpSquareFill onClick={minuteIncrement} />
          <p className="text-5xl my-4">{countMinute}</p>
          <BsArrowDownSquareFill onClick={minuteDecrement} />
        </div>
        {/* Seconds */}
        <div className="flex justify-center items-center  flex-col">
          <p className="text-2xl">Seconds</p>
          <BsArrowUpSquareFill onClick={secondIncrement} />
          <p className="text-5xl my-4">{countSecond}</p>
          <BsArrowDownSquareFill onClick={secondDecrement} />
        </div>
      </div>
      {countStartBtn && (
        <button
          onClick={countTimeStart}
          className="ml-4 bg-slate-700 text-white px-8  py-2 text-xl rounded hover:bg-sky-600 my-4"
        >
          Start
        </button>
      )}

      {countStopBtn && (
        <button
          onClick={handleStopCountDown}
          className="ml-4 bg-slate-700 text-white px-8  py-2 text-xl rounded hover:bg-sky-600 my-4"
        >
          Stop
        </button>
      )}
      {countResumeBtn && (
        <div>
          <button
            onClick={handleResumeBtnCountDown}
            className={
              " ml-4 bg-slate-700 text-white  px-8  py-2 text-xl rounded hover:bg-sky-600 my-4"
            }
          >
            Resume
          </button>
          <button
            onClick={handleResetBtnCountDown}
            className={
              " ml-4 bg-slate-700 text-white  px-8  py-2 text-xl rounded hover:bg-sky-600 my-4"
            }
          >
            Reset
          </button>
        </div>
      )}
      {countResetBtn && (
        <button
          onClick={handleResetBtnCountDown}
          className={
            " ml-4 bg-slate-700 text-white  px-8  py-2 text-xl rounded hover:bg-sky-600 my-4"
          }
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Countdown;
