import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-4">
      <Link to="/">
        <h1 className="font-bold text-white">React MySql</h1>
      </Link>
      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-slate-500 px-2 py-1">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/new" className="bg-slate-500 px-2 py-1">
            Create Task
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
