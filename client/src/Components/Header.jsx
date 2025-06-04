import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-300 py-1.5">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-[#1E3A8A] text-xl"> Auth-App</h1>
        </Link>

        <ul className="flex gap-4 font-semibold">
          <Link to="/">
            <li>Home</li>
          </Link>
          
          <Link to="/about">
            <li>About</li>
          </Link>
          
          <Link to="/sign-in">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
