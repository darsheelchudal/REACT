import React from "react";

const Nav = () => {
  return (
    <header className="mb-2 px-4 shadow">
      <div className="relative mx-auto flex max-w-screen-lg flex-col ml-10 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a className="flex items-start text-2xl font-black" href="/">
          <span className="mr-2 text-3xl text-blue-600">
            <img src="https://www.justwatch.com/appassets/img/logo/JustWatch-logo-large.png" className="h-8" />
          </span>
        </a>
        <div className="gap-x-6">
            <ul className="flex flex-col my-2 gap-y-4 sm:flex-row sm:gap-x-4">
            <li className=""><a class="text-gray-600 hover:text-blue-600" href="#">New</a></li>
            <li className=""><a class="text-gray-600 hover:text-blue-600" href="#">Popular</a></li>
            <li className=""><a class="text-gray-600 hover:text-blue-600" href="#">Sports</a></li>
            <li className="mt-2 sm:mt-0"><a class="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white" href="#">Login</a></li>
          </ul>
          </div>
      </div>
    </header>
  );
};

export default Nav;
