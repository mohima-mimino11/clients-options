import { useState } from "react";
import NavOptions from "../NavOptions/NavOptions";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {

  const NavPaths = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "About",
        "path": "/about"
    },
    {
        "id": 3,
        "name": "Services",
        "path": "/services"
    },
    {
        "id": 4,
        "name": "Portfolio",
        "path": "/portfolio"
    },
    {
        "id": 5,
        "name": "Blog",
        "path": "/blog"
    },
    {
        "id": 6,
        "name": "Contact",
        "path": "/contact"
    }
  ]

  const [open, setOpen] = useState(false)
  return (
    <div>
      <ul className="md:flex ">
       <div onClick={() => setOpen(!open)} className="md:hidden text-3xl">
        <AiOutlineMenu></AiOutlineMenu>
        <AiOutlineClose></AiOutlineClose>
       </div>
        {
          NavPaths.map(option => <NavOptions  key={option.id} option={option}></NavOptions>)
        }
      </ul>
    </div>
  );
};


export default NavBar;