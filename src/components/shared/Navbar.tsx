"use client";
import { useAuth } from "../provider/UserProvider";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { CircleUserRound, Menu, X } from "lucide-react";
import { Theme } from "../utils/Theme";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { name: "Bike Services", href: "/bike-services" },
  { name: "Repair Plans", href: "/repair-plans" },
  { name: "Accessories", href: "/accessories" },
];

const Navbar = () => {
  const pathname = usePathname();
  const auth = useAuth();
  const user = auth?.user;
  const logOut = auth?.logOut;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black fixed top-0 left-0 w-full z-50 md:backdrop-blur-xs md:bg-white/20 md:dark:bg-gray-900/20   dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 p-0">
          <Image src="/images/logo.png" alt="Logo" width={120} height={120} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-semibold transition-colors ${
                pathname === item.href
                  ? "text-primary"
                  : "text-gray-800 dark:text-white hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-white/5 hover:bg-white/5 md:dark:bg-gray-900/5  dark:hover:bg-gray-900/5 ">
                  All Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col min-w-[200px] p-4">
                  {services.map((service) => (
                    <NavigationMenuLink asChild key={service.href}>
                      <Link
                        href={service.href}
                        className={`text-base font-semibold transition-colors ${
                          pathname === service.href
                            ? "text-primary"
                            : "text-gray-800 dark:text-white hover:text-primary"
                        }`}
                      >
                        {service.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Theme />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  {user?.photo ? (
                    <Image
                      src={user.photo}
                      alt="user"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <CircleUserRound
                      size={40}
                      className="text-gray-500 cursor-pointer hover:scale-105 duration-500 transition-transform"
                    />
                  )}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                  {user.fullName || "My Account"}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link
                  href={
                    user?.role === "ADMIN"
                      ? "/admin/dashboard"
                      : "/user/dashboard"
                  }
                >
                  <DropdownMenuItem className="cursor-pointer">
                    Dashboard
                    <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <Link href="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem onClick={logOut} className="cursor-pointer">
                  Logout
                  <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link
                href="/register"
                className="px-4 py-1.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-4 py-1.5 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition duration-300"
              >
                Login
              </Link>
            </div>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black dark:text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block font-semibold text-md ${
                pathname === item.href
                  ? "text-primary"
                  : "text-gray-800 dark:text-white hover:text-primary"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Services section */}
          <div className="pt-2 border-t border-gray-300 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-300 font-semibold mb-1">
              Services
            </p>
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`block font-semibold text-md ${
                  pathname === service.href
                    ? "text-primary"
                    : "text-gray-800 dark:text-white hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
          </div>

          {!user && (
            <div className="pt-4 border-t border-gray-300 dark:border-gray-700 space-y-2">
              <Link
                href="/register"
                className="block text-md font-bold text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="block text-md font-bold text-gray-800 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
