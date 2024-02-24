import React from "react";

const Search = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-x-2">
        <div className="relative overflow-hidden border-[#ad9d9dbe] border-[1px] w-[300px] h-[50px] rounded-3xl">
          <input
            className="absolute top-0 left-0 w-full h-full px-2 text-white bg-transparent border-none outline-none indent-3 rounded-3xl"
            type="search"
            name=""
            id=""
            placeholder="Enter email"
          />
        </div>
        <button className="bg-[#1B95AC] text-white rounded-3xl py-3 px-5">
          Join now
        </button>
      </div>
    </div>
  );
};

export default Search;
