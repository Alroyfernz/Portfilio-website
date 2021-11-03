import React from "react";

const Self = () => {
  return (
    <>
      <span className="text-black  mx-auto flex justify-center text-2xl mb-4">
        Projects
      </span>
      <div className="w-full">
        <div className="max-w-xl p-5 h-full bg-white mx-auto shadow-xl rounded-xl flex flex-col">
          <div className="mx-auto mb-8">
            <img
              src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="user"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="">
              Im a full stack developer currently in Goa who loves building
              stuffs on the web and mobile.I also love to solve algorithmic
              problems
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Self;
