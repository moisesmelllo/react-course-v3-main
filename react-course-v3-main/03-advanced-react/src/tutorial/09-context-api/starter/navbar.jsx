import { createContext, useState } from "react";
import NavLinks from "./NavLinks";
import { useContext } from "react";

export const NavbarContext = createContext()

export const useAppContext = () => useContext(NavbarContext)


export const Navbar = () => {
  const [user, setUser] = useState({name: 'something'})

  const logout = () => {
    setUser(null)
  }

  const login = () => {
    setUser({name: 'something'})
  }

  return (
    <NavbarContext.Provider value={{user, logout, login}}>
      <nav className="navbar">
        <h5>CONTEXT API </h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  )
}