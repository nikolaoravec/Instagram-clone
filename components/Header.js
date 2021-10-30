import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="top-0 sticky z-50 border-b bg-white shadow-sm">
      {/* Left(Logo) */}
      <div className="flex justify-between max-w-5xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle(Search) */}
        <div className="max-w-sx">
          <div className="mt-1 relative p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right(Icons) */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="nav-btn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative nav-btn">
            <PaperAirplaneIcon className="nav-btn rotate-45" />
            <div className="absolute -top-3 -right-3 text-sm bg-red-500 rounded-full flex items-center justify-center w-5 h-5 animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="nav-btn" />
          <UserGroupIcon className="nav-btn" />
          <HeartIcon className="nav-btn" />

          <img
            src="https://wi.wallpapertip.com/wsimgs/41-414903_venom-facebook-profile.jpg"
            alt="Profile picture"
            className="rounded-full h-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;