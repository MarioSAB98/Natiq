import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="w-full navbar bg-primary text-white"    >
            <div className="flex-1 px-2 mx-2 cursor-default">Natiq</div>
            <div className="flex-none">
                <ul className="menu menu-horizontal">
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/natiq">Natiq</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;