import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col min-h-screen w-full relative bg-white">
      <ScrollToTop />
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main className="flex-grow mt-14">
        <Outlet context={{ searchQuery, setSearchQuery }} />
      </main>
      <Footer />
    </div>
  );
}

