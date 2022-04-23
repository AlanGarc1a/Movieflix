import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={openMenu} toggle={toggle} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
