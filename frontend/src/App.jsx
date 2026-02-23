import { useState } from "react";
import { NavLink } from "react-router";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 h-screen">
      <div className="text-4xl text-center text-white">Full stack - Todo App </div>

      <button className="text-white rounded-2xl bg-teal-600 px-6 py-2"> 
        <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active" : ""
        }
      >
        Login
      </NavLink>
      </button>
    </div>
  );
}

export default App;
