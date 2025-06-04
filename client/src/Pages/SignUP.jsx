import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="font-semibold text-center text-3xl my-7 ">Sign Up</h1>
      
      <form action="" className="flex flex-col gap-4 ">
        <input
          type="text"
          id="username"
          placeholder="username"
          className="bg-gray-200 p-3 rounded-lg "
        />
        <input
          type="text"
          id="email"
          placeholder="email"
          className="bg-gray-200 p-3 rounded-lg"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          className="bg-gray-200 p-3 rounded-lg"
        />

        <button className="bg-gray-700 text-white rounded-lg p-3 hover:opacity-92 disable:opacity-800 uppercase cursor-pointer">Sign Up</button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
    
        <Link to ="/sign-in" >
        <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUP;
