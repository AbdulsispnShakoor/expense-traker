import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <>
        <header>Header</header>
        <Outlet />
        {/* <footer>footer</footer> */}
    </>
  )
}

export default Layout