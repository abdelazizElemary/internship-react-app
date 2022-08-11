import Image from "next/image";
import React from "react";
import helpIcon from "../../../public/help_outline_24px.svg";
import logo from "../../../public/logo.svg";
import Button from "../Button";

const Nav = () => {
  return (
    <nav className='border-b border-b-slate-200'>
      <div className='flex h-20 gap-4 items-center max-w-7xl m-auto px-6'>
        <Image {...logo} alt='the logo' />
        <ul className='flex gap-9 justify-center flex-grow list-none p-0'>
          <li>
            <a className='text-darkblue visited:darkblue no-underline' href='#'>
              Pages
            </a>
          </li>
          <li>
            <a className='text-darkblue visited:darkblue no-underline' href='#'>
              Digital Offerings
            </a>
          </li>
          <li>
            <a className='text-darkblue visited:darkblue no-underline' href='#'>
              Reports
            </a>
          </li>
          <li>
            <a className='text-darkblue visited:darkblue no-underline' href='#'>
              Access
            </a>
          </li>
          <li>
            <a className='text-darkblue visited:darkblue no-underline' href='#'>
              Settings
            </a>
          </li>
        </ul>
        <Button shape='icon'>
          <Image {...helpIcon} alt='help icon (question mark)' />
        </Button>
        <Button shape='secondary'>Launch Storefront</Button>
        <Button>EXIT</Button>
      </div>
    </nav>
  );
};

export default Nav;
