import React from "react";
import Header from "../others/Header";
import Tasklistnumbers from "../others/Tasklistnumbers";
import Tasklist from "../Tasklist/Tasklist";

const EmployeeDashboard = ({ data }) => {
  // console.log("EmployeeDashboard :: ", data);
  
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen ">
      <Header data={data} />
      <Tasklistnumbers data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashboard;
