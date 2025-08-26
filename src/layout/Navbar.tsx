import { useState } from "react";

import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./ModeToggler";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { Link } from "react-router";
import { useAppDispatch } from "@/redux/hook";
import { role } from "@/constants/role";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout =()=>{
    logout(undefined);
    dispatch(authApi.util.resetApiState());
  }

  const navLinks = [
    { name: "Home", href: "/", role : "PUBLIC" },
    { name: "About", href: "/about", role : "PUBLIC"  },
    {name : "Dashboard", href: "/admin", role : role.admin},
    {name : "Dashboard", href: "/user", role : role.user}
   
  ];

  const { data } = useUserInfoQuery(undefined);
  console.log(data?.data?.email);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold"
              style={{ color: "#B3EBF2" }}
            >
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: "#B3EBF2" }}
              >
                TM
              </div>
              <span className="hidden sm:block">Tour King</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) =>
                (link.role === "PUBLIC" || (data?.data?.role === link.role)) && (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                      "text-foreground/80 hover:text-foreground",
                      "hover:bg-accent hover:text-accent-foreground",
                      "focus:outline-none focus:ring-2 focus:ring-offset-2",
                      "dark:text-foreground/80 dark:hover:text-foreground"
                    )}
                    style={
                      {
                        "--tw-ring-color": "#B3EBF2",
                      } as React.CSSProperties
                    }
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex hover:bg-accent"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Cart Button */}
           

            {/* User / Login / Logout */}
            {data?.data?.email ? (
              <>
               <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex hover:bg-accent relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span
                className="absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs flex items-center justify-center text-white font-medium"
                style={{ backgroundColor: "#B3EBF2" }}
              >
                3
              </span>
              <span className="sr-only">Shopping cart</span>
            </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex hover:bg-accent"
                >
                  <User className="h-5 w-5" />
                  <span className="sr-only">User account</span>
                </Button>
                <Button onClick={handleLogout} variant="ghost" size="sm" className="hidden sm:flex">
                  Logout
                </Button>
              </>
            ) : (
              <Button  variant="ghost" size="sm" className="hidden sm:flex">
                <Link to="/login">Login</Link>
              </Button>
            )}

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/40 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                  "text-foreground/80 hover:text-foreground",
                  "hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile-only buttons */}
            <div className="flex items-center space-x-4 px-3 py-2">
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

             

              {data?.data?.email ? (
                <>
                 <Button variant="ghost" size="icon" className="hover:bg-accent relative">
                <ShoppingCart className="h-5 w-5" />
               
              
                <span className="sr-only">Shopping cart</span>
              </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-accent">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User account</span>
                  </Button>
                  <Button onClick={handleLogout} variant="ghost" size="sm" className="hover:bg-accent">
                    Logout
                  </Button>
                </>
              ) : (
                <Button variant="ghost" size="sm" className="hover:bg-accent">
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
