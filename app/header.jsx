"use Client";
import { Button, Navbar } from "flowbite-react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <Navbar rounded className="max-w-screen-xl w-full">
        <Navbar.Brand>
          <span className="self-center text-2xl font-bold text-[#0e7490] whitespace-nowrap dark:text-white">
            GB PAK TOUR
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Contact</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="/Gallery">Gallery</Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
