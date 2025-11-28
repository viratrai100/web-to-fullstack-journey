import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = (props) => {
  return (
    <div>
      {/* <h1>Layout</h1> */}
      {/* {props.children} */}
      <nav className="bg-black text-white py-4 px-5 flex justify-between items-center">
        <h3 className="text-xl">Logo</h3>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen bg-black w-[15vw] text-white text-2xl">
          <ul className="pt-5 flex flex-col gap-5 px-3">
            <li>Dashboard</li>
            <li>Credits</li>
            <li>Payments</li>
            <li>Profiles</li>
          </ul>
        </div>
        <div className="p-4">{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
