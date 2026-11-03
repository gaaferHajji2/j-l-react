import Logo from "@/components/Helper/Logo"
import ThemeToggler from "@/components/Helper/ThemeToggler"
import { Navlinks } from "@/Constants/Constants"
import { DownloadIcon } from "lucide-react"
import Link from "next/link"

const Nav = () => {
  return (
    <div className="transition-all duration-500 h-[12vh] z-100 fixed w-full">
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* LOGO section */}
        <Logo />

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link, index) => {
            return <Link 
                      key={index} 
                      href={link.href} 
                      className="dark:text-white text-dark hover:text-yellow-500 dark:hover:text-yellow-200 font-semibold transition-all duration-500">
                        <p>{link.name}</p>
                </Link>
          })}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* CV button */}
          <a href="#_" className="box-border relative z-20 inline-flex items-center justify-between w-auto 
          px-6 sm:px-8 py-3 overflow-hidden font-bold text-white 
          transition-all duration-500 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200
          hover:ring-offset-indigo-500 ease focus:outline-none">
            
            <span className="relatize z-20 flex items-center space-x-2 text-sm">
              <DownloadIcon className="w-4 h-4"/>
              <span>Download CV</span>
            </span>
          </a>

          {/* Theme Toggler */}
          <ThemeToggler />
        </div>
      </div>
    </div>
  )
}

export default Nav