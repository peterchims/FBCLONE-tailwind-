import Image from "next/image"
import { ChatBubbleOvalLeftEllipsisIcon,FlagIcon, HomeIcon, MagnifyingGlassIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import HeaderIcons from '../components/HeaderIcon'
function Header() {
    return (
        <div className="sticky top-0 z-50 bg-gray-100 flex items-center p-1 lg:px-2 shadow-md">

            {/* Left */}
            <div className="flex items-center">
            <Image src="/img/fb-logo.png" alt="Facebook Logo" layout="fixed" width={40} height={40} />           
           <div className="flex ml-2 items-center rounded-full  bg-grey-500 p-2">
           <MagnifyingGlassIcon className="h-4 w-4 text-gray-6  00" />
           <input className="hidden md:inline-flex ml-2 items-center 
           bg-transparent p-2 border:radius-5 
           placeholder-grey-500 outline-none flex-shrink border-bottom-red-500" type="text" placeholder="Search Facebook" />
          
           </div>
            </div>
            

            {/* Center */} 
<div className="flex justify-center flex-grow ">
<div className="flex items-center space-x-20 md-space-x-2
 cursor-pointer mb-5 mt-2  ">
      <span className=" md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 h-6  mt-3 mb-2 ml-2 w-6 text-blue-600">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>
      </span>
      <span className="md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <FlagIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      <span className="md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <PlayIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      <span className="md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <UserGroupIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      <span className="md:hover:bg-gray-200 active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <ShoppingCartIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
     

    
</div>
</div>
            {/* Right */}
            <div className="flex items-center sm:spce-x-2 justify-end hidden xl:inline-flex p-2 w-10 h-10">
                <p className="whitespace-nowrapping  font-semibold pr-3">
                    Peter
                </p>
     
                <span className="md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500   rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 h-6 w-6 mt-3 mb-3 ml-2 mr-2 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
      </span>
                <span className="md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500 hidden xl:inline-flex h-11 w-11 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 h-6 w-6 mt-3 mb-3 ml-2 mr-2 cursor-pointer">
  <path fillRule="evenodd" d="M2 10c0-3.967 3.69-7 8-7 4.31 0 8 3.033 8 7s-3.69 7-8 7a9.165 9.165 0 0 1-1.504-.123 5.976 5.976 0 0 1-3.935 1.107.75.75 0 0 1-.584-1.143 3.478 3.478 0 0 0 .522-1.756C2.979 13.825 2 12.025 2 10Z" clipRule="evenodd" />
</svg>

      </span>
      <span className="md:hover:bg-gray-200  active:border-bottom-b-3 active:border-bottom-blue-500 hidden xl:inline-flex h-11 w-11 rounded-xl">
     
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 h-6 w-6 mt-3 mb-3 ml-2 mr-2 cursor-pointer">
  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
</svg>
      </span>
 
      <span className="md:hover:bg-gray-200 active:border-bottom-b-3 active:border-bottom-blue-500 hidden xl:inline-flex h-11 w-11 rounded-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 h-6 w-6 mt-3 mb-3 ml-2 mr-2 cursor-pointer">
  <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
</svg>
      </span>
                </div>
        </div>
    );
}
  
export default  Header;