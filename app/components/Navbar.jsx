"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center p-4 bg-white shadow-md">
      
      {/* Menu Button */}
      <button onClick={() => setOpen(!open)} className="text-2xl">
        ☰
      </button>

      <h1 className="text-lg font-bold text-pink-500">Junie’s Nails</h1>

      {/* Cart */}
      <button className="text-xl">🛒</button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-4 bg-white shadow-lg rounded-xl p-4 space-y-2">
          <Link href="/generator">Nail Generator</Link><br/>
          <Link href="/premade">Pre-Made Nails</Link><br/>
          <Link href="/pricing">Custom Price List</Link><br/>
          <Link href="/custom">Custom Sets</Link><br/>
          <Link href="/about">About Me</Link>
        </div>
      )}
    </div>
  );
}
