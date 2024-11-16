import React, { useState } from "react";
import Header from "./components/Header";
import EmployeeCard from "./components/EmployeeCard";
import employeesData from "./data";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredEmployees = employeesData.filter((employee) => {
    return (
      (filter === "All" || employee.status === filter) &&
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="app-container">
      {/* <h1>Employees</h1> */}
      <Header />
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filter-buttons">
          {["All", "Active", "Inactive"].map((status) => (
            <button
              key={status}
              className={filter === status ? "active" : ""}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="employee-list">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default App;
