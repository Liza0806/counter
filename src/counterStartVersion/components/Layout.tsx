import {  NavLink, Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <div>
       <nav >
       <NavLink to='/CounterStartVersion'>CounterStartVersion</NavLink>
       <NavLink to='/CounterWithRedux'>CounterWithRedux</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};