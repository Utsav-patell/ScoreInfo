// rfce
import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav class="p-3 flex bg-white justify-between items-center">
      
<a href='' class="text-xl flex font-bold text-blue-500 font-display">ScoreInfo</a>

<div class='hidden lg:flex nav-menu gap-9'>
  <a class="font-medium hover:text-blue-400">Matches</a>
  <a class="font-medium hover:text-blue-400 ">Players</a>
  <a class="font-medium hover:text-blue-400">Schedule</a>
  <a class="font-medium hover:text-blue-400">News</a>
</div>
{/* Search Bar */}
<div class="hidden lg:flex max-w-xs mb-1 ">
<div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966"  xmlSpace="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      </div> 

          {/*TOggle Button  */}
<button class="p-2 lg:hidden" onClick={toggleMenu}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</button>


{/* When Hamburger Activated */}
    <div id="nav-dialog" class={`${isMenuOpen?'':'hidden'} lg:hidden z-10 fixed  bg-white inset-0 p-3`}>
      <div id='nav-bar' class="flex items-center justify-between">
      <a href='' class="text-xl flex font-bold text-blue-500 font-display">ScoreInfo</a>
      <button class="p-2 flex lg:hidden" onClick={toggleMenu}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>
</button>
      </div>
      <div  class="flex mt-6">
      <div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search"/>
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966"  xmlSpace="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
      </div>      
      <div class='mt-6'>
      <a class="m-3 p-3 hover:shadow-lg hover:shadow-blue-100 font-medium rounded-xl block link link-underline link-underline-black">Matches</a>
      <a class="m-3 p-3 hover:shadow-lg hover:shadow-blue-100 font-medium rounded-xl block link link-underline link-underline-black">Players</a>
      <a class="m-3 p-3 hover:shadow-lg hover:shadow-blue-100 font-medium rounded-xl block link link-underline link-underline-black">Schedule</a>
      <a class="m-3 p-3 hover:shadow-lg hover:shadow-blue-100 font-medium rounded-xl block link link-underline link-underline-black">News</a>
  
</div>
    </div>
    </nav>
  )
}

export default Header
