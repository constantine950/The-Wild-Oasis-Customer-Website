"use client";

import {
  Bars3CenterLeftIcon,
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    name: "Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5" />,
  },
];

export default function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".sidebar-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu button - always visible on mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden absolute top-24 left-4 z-30 p-2 bg-primary-900 rounded-lg"
      >
        <Bars3CenterLeftIcon className="h-6 w-6 text-white" />
      </button>

      {/* Overlay - only shown when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <div
        className={`sidebar-container fixed left-0 md:sticky top-0 h-screen w-64 bg-primary-950 z-30 transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-primary-800">
          <h2 className="text-xl font-bold text-white">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-1 text-white"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4 h-[calc(100vh-65px)] flex flex-col">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    pathname === link.href
                      ? "bg-primary-800 text-white"
                      : "text-gray-300 hover:bg-primary-800 hover:text-white"
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-4 border-t border-primary-800">
            <SignOutButton />
          </div>
        </nav>
      </div>
    </>
  );
}
