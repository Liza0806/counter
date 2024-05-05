import {  NavLink, Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <div>
       <nav >
       <NavLink to='/CounterStartVersion'>CounterStartVersion</NavLink>
       <NavLink to='/CounterWithRedux'>CounterWithRedux</NavLink>
       <NavLink to='/CounterWithReduxToolkit'>CounterWithReduxToolkit</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};