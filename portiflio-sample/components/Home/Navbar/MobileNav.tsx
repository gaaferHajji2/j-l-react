import { Navlinks } from "@/Constants/Constants"
import { X } from "lucide-react"
import Link from "next/link"

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 transform transition-all 
          duration-500 z-1000 bg-black opacity-70 w-full h-screen">
      </div>

      {/* Nav Links */}
      <div 
        className="text-white fixed justify-center flex flex-col h-full z-2000
          transform transition-all duration-500 delay-300 w-[60%] sm:w-[50%] bg-green-600 space-y-6">
            {Navlinks.map((link, index) => {
                return <Link
                          key={index} 
                          href={link.href} 
                          className="dark:text-white text-dark font-semibold transition-all duration-500">
                            <p className="w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">{link.name}</p>
                    </Link>
              })}
          {/* Close Icon */}
          <X className="absolute top-4 right-4 text-white w-10 h-10"/>          
      </div>

      
    </div>
  )
}

export default MobileNav