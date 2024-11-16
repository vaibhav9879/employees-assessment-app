import React from "react";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <img
        src={`https://robohash.org/${employee.id}?set=set5`}
        alt={employee.name}
        className="employee-avatar"
      />
      <div className="employee-info">
        <h2>{employee.name}</h2>
        <p>{employee.role}</p>
        <p>Email: {employee.email}</p>
      </div>
      <div className="employee-actions">
        <button className="block-btn">Block</button>
        <button className="details-btn">Details</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
