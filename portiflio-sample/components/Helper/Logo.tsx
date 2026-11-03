import { Flower2Icon } from "lucide-react"

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
        <div className="bg-blue-800 dark:bg-blue-400 w-10 h-10 rounded-lg flex items-center justify-center flex-col">
            <Flower2Icon className="text-white h-5 w-5"/>
        </div>
        <h1 className="sm:text-xl hidden sm:block md:text-2xl text-blue-800 dark:text-blue-400 font-bold">{"<ITE Dev/>"}</h1>
    </div>
  )
}

export default Logo