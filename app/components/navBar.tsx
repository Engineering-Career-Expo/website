"use client";
import Link from "next/link";
import Image from "next/image";
import navBarStyles from "./css/navBar.module.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleDisplayMenu = () => setDisplayMenu(!displayMenu)
  
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
  
      if (scrollY > 60) {
        setDisplayMenu(false)
      }
    }
    handleScroll()

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  return (
    <nav className={navBarStyles.navBar}>
      <Link href="/">
        <Image
          className={navBarStyles.nav_logo}
          src="/ecx.svg"
          alt="ECX Logo"
          width={175}
          height={34}
          priority
        />
      </Link>
      <div className={navBarStyles.nav_items}>
        <button className={navBarStyles.menuIcon} onClick={toggleDisplayMenu}>
          <Image
            src="/icons/menu.svg"
            alt="menu"
            objectFit="cover"
            objectPosition="center"
            fill
          />
        </button>
        <ul className={`${navBarStyles.nav_list} ${!displayMenu ? navBarStyles.noDisplay : ""}`}>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#sponsorship">Sponsorship</Link>
          </li>
          <li>
            <Link href="https://medium.com/@engcareerexpo/" target="_blank">Blogs</Link>
          </li>
          <li>
            <Link href="#footer">Contact Us</Link>
          </li>
          <li>
            <Link href="https://paystack.shop/ecx-merch-store" target="_blank">Shop</Link>
          </li>
        </ul>
      </div>

      <Link href="https://chat.whatsapp.com/DV6PNoM5RVj1ICW9hdXW6a" target="_blank" className={`button ${navBarStyles.nav_cta}`}>
        Join US
      </Link>
    </nav>
  );
};
export default NavBar;
