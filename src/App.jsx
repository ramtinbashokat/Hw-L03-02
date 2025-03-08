import "./App.css";
import React from "react";
import UsersList from "./components/UserList";
import Picgalery from "./components/Picgalery";

function App() {
  return (
    <div className="bg-gray-100 h-screen p-6">
      <UsersList />
      <Picgalery />
    </div>
  );
}

export default App;
