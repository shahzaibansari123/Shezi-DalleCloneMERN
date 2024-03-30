import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import Header from "./layout/Header";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white border-b px-4 py-4 sm:px-8 border-b-[#e6ebf4]">
        <Header />
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-65px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
