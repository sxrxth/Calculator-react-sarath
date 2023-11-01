import React from "react";
import { useState } from "react";
import soundFile from "./sound/sound.mp3";

function App() {
  const [calculate, setcalculate] = useState("");

  function Eval() {
    try {
      setcalculate(eval(calculate));
    } catch {
      setcalculate("Invalid expression");
    }
    playSound();
  }

  function Clear() {
    setcalculate("");
    playSound();
  }

  function Delete() {
    setcalculate(calculate.toString().slice(0, -1));
    playSound();
  }

  function playSound() {
    const audio = new Audio(soundFile);
    audio.play();
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "black" }}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <input
          value={calculate}
          type="text"
          className="w-full mb-4 px-3 py-2 border rounded"
          style={{ width: "100%" }}
        />
        <div className="grid grid-cols-4 gap-4">
          <button
            onClick={() => {
              setcalculate(calculate + "%");
              playSound();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            %
          </button>
          <button
            onClick={() => {
              Clear();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            c
          </button>
          <button
            onClick={() => {
              Delete();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            <i className="fa-solid fa-delete-left"> </i>
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "/");
              playSound();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            /
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "1");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            1
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "2");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            2
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "3");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            3
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "+");
              playSound();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            +
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "4");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            4
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "5");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            5
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "6");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            6
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "-");
              playSound();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            -
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "7");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            7
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "8");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            8
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "9");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            9
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "*");
              playSound();
            }}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            *
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "00");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            00
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + "0");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            0
          </button>
          <button
            onClick={() => {
              setcalculate(calculate + ".");
              playSound();
            }}
            className="bg-gray-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            .
          </button>
          <button
            onClick={Eval}
            className="bg-green-200 hover-bg-gray-300 text-black px-4 py-3 rounded"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
