'use client'
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from 'lucide-react'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button 
      className="p-2 transition-colors w-10 h-10 cursor-pointer rounded-lg flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-200"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        { currentTheme === 'dark' ? 
            <Sun className="text-white w-7 h-7"/> : 
            <Moon className="text-white w-7 h-7"/>
        }
    </button>
  )
}

export default ThemeToggler