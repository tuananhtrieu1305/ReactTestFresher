import UserHeader from "components/user/user.header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
};

export default Layout;
