import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full relative bg-white">
      <Navbar />
      <main className="flex-grow mt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

