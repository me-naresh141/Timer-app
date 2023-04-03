import React, { useState, useEffect } from "react";
import Header from "./Header";
import ShoWatchbtn from "./ShoWatchbtn";
import ShowCountdownBtn from "./ShowCountdownBtn";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";

const App = () => {
  // toggle state countdown
  const [countdown, setCountdown] = useState(false);

  // time state countdown
  const [countHour, setCountHour] = useState(0);
  const [countMinute, setCountMinute] = useState(0);
  const [countSecond, setCountSecond] = useState(0);

  // button state countDown
  const [countStartBtn, setCountStartBtn] = useState(true);
  const [countStopBtn, setCountStopBtn] = useState(false);
  const [countResumeBtn, setCountResumeBtn] = useState(false);
  const [countResetBtn, setCountResetBtn] = useState(false);

  // toggle state stopwatch
  const [stopWatch, setStopWatch] = useState(false);
  // button state stopwatch
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [showStopBtn, setShowStopBtn] = useState(false);
  const [showResumeBtn, setShowResumeBtn] = useState(false);

  // time state stopwatch
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milliSecond, setMilliSecond] = useState(0);

  // cross button stopwatch
  const toggleStopWatch = () => {
    setStopWatch(!stopWatch);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMilliSecond(0);
    setShowStartBtn(true);
    setShowStopBtn(false);
  };

  // second stopwatch
  function getSecond() {
    if (second === 59) {
      getMinute();
      setSecond(0);
    } else {
      setSecond((second) => second + 1);
    }
  }

  // minute stopwatch
  function getMinute() {
    if (minute === 60) {
      setMinute(0);
      getHour();
    } else {
      setMinute((minute) => minute + 1);
    }
  }
  // hour stopwatch
  function getHour() {
    setHour((hour) => hour + 1);
  }

  //  time start stopwatch
  const timeStart = () => {
    setShowStopBtn(true);
    setShowStartBtn(false);
  };

  // stop btn stopwatch
  const handleStop = () => {
    setShowResumeBtn(true);
    setShowStopBtn(false); // stop
  };

  // resume btn stopwatch
  const handleResume = () => {
    setShowStopBtn(true);
    setShowResumeBtn(false);
  };

  // reset btn stopwatch
  const handleResetBtn = () => {
    setShowStartBtn(true);
    setShowResumeBtn(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setMilliSecond(0);
  };

  //  toggle count-down
  const toggleCountdown = () => {
    setCountdown(!countdown);
    setCountHour(0);
    setCountMinute(0);
    setCountSecond(0);
  };

  // hour countDown
  const hoursIncrement = () => {
    setCountHour((countHour) => countHour + 1);
  };

  const hoursDecrement = () => {
    if (countHour >= 1) {
      setCountHour((countHour) => countHour - 1);
    }
  };
  // minute countDown
  const minuteIncrement = () => {
    if (countMinute >= 59) {
      hoursIncrement();
      setCountMinute(0);
    } else {
      setCountMinute((countMinute) => countMinute + 1);
    }
  };

  const minuteDecrement = () => {
    if (countMinute === 0) {
      setCountMinute(59);
      hoursDecrement();
    } else {
      setCountMinute((countMinute) => countMinute - 1);
    }
  };

  // Second countDown
  const secondIncrement = () => {
    if (countSecond >= 59) {
      minuteIncrement();
      setCountSecond(0);
    } else {
      setCountSecond((countSecond) => countSecond + 1);
    }
  };
  const secondDecrement = () => {
    if (countSecond === 0) {
      if (countMinute > 0) {
        setCountMinute((countMinute) => countMinute - 1);
        setCountSecond(59);
      }
    } else {
      setCountSecond((countSecond) => countSecond - 1);
    }
  };

  // time Start countdown
  const countTimeStart = () => {
    setCountStartBtn(false);
    setCountStopBtn(true);
  };
  // stop btn countDown
  const handleStopCountDown = () => {
    setCountStopBtn(false);
    setCountResumeBtn(true);
  };

  // resume btn countdown
  const handleResumeBtnCountDown = () => {
    setCountResumeBtn(false);
    setCountStopBtn(true);
  };

  // handle reset btn Countdown
  const handleResetBtnCountDown = () => {
    setCountResetBtn(false);
    setCountResumeBtn(false);
    setCountStartBtn(true);
    setCountHour(0);
    setCountMinute(0);
    setCountSecond(0);
  };

  useEffect(() => {
    if (showStartBtn) return;
    if (milliSecond === 240) {
      setMilliSecond(0);
      getSecond();
    } else {
      let intervalId = setInterval(function () {
        setMilliSecond((milliSecond) => milliSecond + 1);
      }, 1 / 1000);
      if (!showStopBtn) clearInterval(intervalId);
      return () => clearInterval(intervalId);
    }
  }, [showStartBtn, showStopBtn, showResumeBtn, milliSecond, second]);

  // count down
  useEffect(() => {
    if (countStopBtn) {
      if (countHour > 0 && countMinute === 0 && countSecond === 0) {
        setCountHour((countHour) => countHour - 1);
        setCountMinute(60);
      } else {
        if (countMinute > 0 && countSecond === 0) {
          setCountMinute((countMinute) => countMinute - 1);
          setCountSecond(59);
        } else {
          if (countSecond > 0) {
            let intervalId = setInterval(() => {
              setCountSecond((countSecond) => countSecond - 1);
            }, 1000);

            return () => clearInterval(intervalId);
          }
          if (countHour === 0 && countMinute === 0 && countSecond === 0) {
            setCountResetBtn(true);
            setCountStopBtn(false);
            alert("Countdown ended");
          }
        }
      }
    }
  }, [countStartBtn, countStopBtn, countSecond, countMinute]);
  return (
    <div className="max-w-[100vw] min-h-100 h-screen bg-zinc-900 text-center">
      <Header />

      {/* stopwatch */}
      <div className="flex justify-center">
        {stopWatch ? (
          <Stopwatch
            toggleStopWatch={toggleStopWatch}
            timeStart={timeStart}
            hour={hour}
            minute={minute}
            second={second}
            milliSecond={milliSecond}
            showStopBtn={showStopBtn}
            showResumeBtn={showResumeBtn}
            handleStop={handleStop}
            showStartBtn={showStartBtn}
            handleResetBtn={handleResetBtn}
            handleResume={handleResume}
          />
        ) : (
          <ShoWatchbtn toggleStopWatch={toggleStopWatch} />
        )}

        {/* countdown */}
        {countdown ? (
          <Countdown
            toggleCountdown={toggleCountdown}
            countHour={countHour}
            countMinute={countMinute}
            countSecond={countSecond}
            hoursIncrement={hoursIncrement}
            hoursDecrement={hoursDecrement}
            minuteIncrement={minuteIncrement}
            minuteDecrement={minuteDecrement}
            secondIncrement={secondIncrement}
            secondDecrement={secondDecrement}
            countTimeStart={countTimeStart}
            countStartBtn={countStartBtn}
            countStopBtn={countStopBtn}
            countResumeBtn={countResumeBtn}
            countResetBtn={countResetBtn}
            handleStopCountDown={handleStopCountDown}
            handleResumeBtnCountDown={handleResumeBtnCountDown}
            handleResetBtnCountDown={handleResetBtnCountDown}
          />
        ) : (
          <ShowCountdownBtn toggleCountdown={toggleCountdown} />
        )}
      </div>
    </div>
  );
};

export default App;
