import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function RootLayout() {
  return (
    <>
      <Topbar />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default RootLayout;
