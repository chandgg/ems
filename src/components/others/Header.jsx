import React, { useState } from "react";

const Header = ({ data }) => {
  console.log("data :: ", data);
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl0 font-medium">
        Hello <br />
        <span className="text-3xl font-semibold ">{data ? `${data?.firstName || "Admin"}`: "Admin"}</span>{" "}
      </h1>
      <button className="bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm">
        Log out
      </button>
    </div>
  );
};

export default Header;
