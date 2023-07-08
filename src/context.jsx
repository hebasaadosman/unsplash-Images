import { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext()

const getInitalDarkMode = () =>
  window.matchMedia('(prefers-color-schema:dark)').matches

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitalDarkMode())
  const [searchTerm, setSearchTerm] = useState('cat')
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)

    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', !isDarkTheme)
  }
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppProvider
export const useGlobalContext = () => useContext(AppContext)
