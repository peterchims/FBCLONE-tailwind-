import Image from "next/image"
import { FlagIcon, HomeIcon, MagnifyingGlassIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import HeaderIcons from '../components/HeaderIcon'
function Header() {
    return (
        <div className="sticky top-0 z-50">

            {/* Left */}
            <div className="flex items-center">
            <Image src="/img/fb-logo.png" alt="Facebook Logo" layout="fixed" width={40} height={40} />           
           <div className="flex ml-2 items-center rounded-full  bg-grey-500 p-2">
           <MagnifyingGlassIcon className="h-4 w-4 text-gray-6  00" />
           <input className="flex ml-2 items-center bg-transparent outline-none placeholder-grey-500" type="text" placeholder="Search Facebook" />
          
           </div>
            </div>
            

            {/* Center */} 
<div className="flex justify-center flex-grow">
<div className="flex items-center space-x-20 md-space-x-2
 cursor-pointer mb-10">
      <span className=" md:hover:bg-gray-200  pd-2 active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <HomeIcon className="h-6  mt-2 mb-2 ml-2 w-6 text-blue-300 " />
      </span>
      <span className="md:hover:bg-gray-200  pd-2 active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <FlagIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      <span className="md:hover:bg-gray-200  pd-2 active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <PlayIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      <span className="md:hover:bg-gray-200 pd-2 active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <UserGroupIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      <span className="md:hover:bg-gray-200  pd-2 active:border-bottom-b-3 active:border-bottom-blue-500 h-11 w-11 rounded-xl">
      <ShoppingCartIcon className="h-6 w-6 mt-3 mb-3 ml-2 mr-2" />
      </span>
      
    
</div>
</div>
            {/* Right */}
        </div>
    );
}
  
export default  Header;