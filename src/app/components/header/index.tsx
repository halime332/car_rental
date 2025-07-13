import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-white flex justify-between
     items-center py-5 px-7 lg:py-8 lg:px-10">
    
      <Link href="/" className="text-basic-blue font-bold 
      text-2xl lg:text-4xl">DRIVE</Link>

      <form className="flex gap-2 py-2 px-4 rounded-full border border-zinc-300 md:w-1/2 focus:bg-red-500">
      <button className="text-zinc-700 text-xl">
       <CiSearch />
      </button>
      <input type="text" placeholder="Bir marka aratın" className="outline-none text-zinc-800"/>
      </form>

      <div>
        <div>
          <FaHeart className=""/>
        </div>
      </div>
    </header>
  )
}

export default Header;
