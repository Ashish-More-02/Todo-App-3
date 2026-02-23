import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 h-screen">
      <div className="text-4xl text-center text-white">Full stack - Todo App </div>
    </div>
  );
}

export default App;
