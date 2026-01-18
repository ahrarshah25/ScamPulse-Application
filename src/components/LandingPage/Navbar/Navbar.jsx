import React, { useState } from "react";
import { Menu, X, LogIn, UserPlus } from "lucide-react";

import Logo from "./Logo";
import Tabs from "./Tabs";
import Button from "./Button";
import Rain from '../../Animations/Rain'
import CyberEffect from "../../Animations/CyberEffect";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white sticky border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />

          <div className="hidden md:block">
            <Tabs />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button icon={LogIn} name="Login" variant="outline" />
            <Button icon={UserPlus} name="Sign Up" />
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <Logo />
          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <div className="p-6">
          <Tabs mobile />
        </div>

        <div className="px-6 flex flex-col gap-3">
          <Button icon={LogIn} name="Login" />
          <Button icon={UserPlus} name="Sign Up" variant="outline" />
        </div>
      </aside>
      

    </>
  );
};

export default Navbar;
