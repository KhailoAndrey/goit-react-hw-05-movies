import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { NavItem, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <header>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/movies">Movies</NavLink>
        </NavItem>
      </NavList>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default Layout;
