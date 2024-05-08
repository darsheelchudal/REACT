import React from "react";

const Hero = () => {
    return (
    
        <div className="bg-gradient-to-r bg-gray-600">
  <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
    <div className="flex flex-col items-center justify-between">
      <div className="">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-center text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-x5l"> <span class="my-1 inline-block font-serif font-bold text-white">Your streaming guide for movies, TV shows & sports</span></h1>
        </div>
        <form method="POST" action="#" class="mx-auto mt-12 mb-2 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative text-gray-500 sm:w-7/12">
             
              <input type="text" name="name" id="name" placeholder="Enter name of your favourite movie  " class="w-full cursor-text rounded-xl border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring" required="" />
            </div>

            <button type="submit" className="group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition">
              <span className="group flex w-full items-center justify-center rounded text-center font-medium">Search</span>
              <svg className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </form>

 
      </div>
   
    </div>
  </div>
</div>

     
    )
}

export default Hero;