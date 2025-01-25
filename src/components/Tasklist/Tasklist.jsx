import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className=" mt-10 overflow-x-auto h-[55%] flex items-center justify-start gap-5 flex-nowrap py-10 w-full"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} />;
        }
        if (elem.failedTask) {
          return <FailedTask key={idx} />;
        }
      })}
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className=" text-black text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-orange-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-purple-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-pink-500 rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">22 jan 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do your Work</h2>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          officia!
        </p>
      </div>
    </div>
  );
};

export default Tasklist;
