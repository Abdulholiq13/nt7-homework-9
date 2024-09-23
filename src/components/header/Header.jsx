import { useRef, useState } from "react";
import "./header.css";

import { CiShoppingCart } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { Button, Form, Input } from "antd";
const { Search } = Input;

const Header = () => {
  const [searchParams] = useSearchParams();
  const form = useRef(null);
  const navigete = useNavigate();
  const onFinish = (values) => {
    navigete(`/search?q=${values.search}`);
    console.log(values);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container mx-auto flex items-center">
        <div className="flex items-center justify-between w-full">
          <Link to={"/"} className="text-5xl font-bold uppercase">
            Logo
          </Link>
          <Form
            onFinish={onFinish}
            ref={form}
            initialValues={{
              search: searchParams.get("q"),
            }}
            className="w-[80%] py-2"
          >
            <Form.Item
              className="w-full"
              name="search"
              rules={[
                {
                  required: "true",
                  message: "Please input your search!",
                },
              ]}
            >
              <Search placeholder="Search car" enterButton={<Button htmlType="submit">Search</Button>} />
            </Form.Item>
          </Form>
          <div className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}>
            <div className="flex items-center gap-4 navbar navbar__collection">
              <NavLink className={"text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] navbar__collection"} to={"/cart"}>
                <CiShoppingCart className="text-4xl text-yellow-400" />
              </NavLink>
              <NavLink className={"text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] navbar__collection"} to={"/profile"}>
                <img
                  className="w-[50px] object-contain rounded-full"
                  src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
        <div onClick={toggleMenu} className="navbar__menu ml-5">
          <RiMenu2Fill />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
