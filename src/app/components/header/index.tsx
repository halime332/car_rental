import Link from "next/link";


const Header = () => {
  return (
    <header className="text-black bg-white flex justify-between
     items-center py-5 px-7 lg:py-8 lg:px-10">
    
      <Link href="/" className="text-basic-blue font-bold 
      text-2xl lg:text-4xl">DRIVE</Link>
    </header>
  )
}

export default Header;
