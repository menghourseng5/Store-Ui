import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar.jsx";
import Header from "../components/Header.jsx";
function RootLayout() {
  return (
    <>
      <Topbar />
      <Header />
      <Outlet />
    </>
  );
}

export default RootLayout;
