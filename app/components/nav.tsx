"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HyperText from "./hyper-text";

// const navItems = [
//   // {
//   //   path: "/projects",
//   //   name: "projects",
//   // },
  
// ];

export default function NavBar() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    
    <nav className="relative flex items-center justify-end px-0 pb-0 md:relative md:overflow-auto -ml-[8px] mb-10 tracking-tight sm:mb-16">
    <Link
        href="/"
        className="font-mono font-bold text-2xl pl-2 first:mr-auto"
        >
        <HyperText text="Z3SH4N"></HyperText>
        </Link>
      {/* <div className="flex relative justify-start z-[100] rounded-lg">

        {navItems.map((item, index) => {
          return (
            <Link
              key={item.path}
              className={`px-2 py-0.5 text-lg relative no-underline duration-300`}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.span
                  className="absolute rounded-md bottom-0 left-0 h-full bg-neutral-800/80  -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                //   transition={{
                //     type: "spring",
                //     stiffness: 130,
                //     damping: 9,
                //     duration: 0.3,
                //   }}
                />
              )}
            </Link>
          );
        })}
      </div> */}
    </nav>
  );
}


