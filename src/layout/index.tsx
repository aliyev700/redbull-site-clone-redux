import {Outlet} from "react-router-dom";
import Header from "./../../src/layout/Header"



const Layout = () => {
  return (
    <>
    <Header />

    <main>
        <Outlet />
    </main>
      
    </>
  )
}

export default Layout
