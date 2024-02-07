import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  // Formatter for salary
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-max table-auto">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-200 px-4 py-2">Id</th>
            <th className="border-b border-blue-gray-200 px-4 py-2">First Name</th>
            <th className="border-b border-blue-gray-200 px-4 py-2">Last Name</th>
            <th className="border-b border-blue-gray-200 px-4 py-2">Email</th>
            <th className="border-b border-blue-gray-200 px-4 py-2">Salary</th>
            <th className="border-b border-blue-gray-200 px-4 py-2">Date</th>
            <th className="border-b border-blue-gray-200 px-4 py-2" colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border-b border-blue-gray-200 px-4 py-2">{employee.id}</td>
                <td className="border-b border-blue-gray-200 px-4 py-2">{employee.firstName}</td>
                <td className="border-b border-blue-gray-200 px-4 py-2">{employee.lastName}</td>
                <td className="border-b border-blue-gray-200 px-4 py-2">{employee.email}</td>
                <td className="border-b border-blue-gray-200 px-4 py-2">{formatter.format(employee.salary)}</td>
                <td className="border-b border-blue-gray-200 px-4 py-2">{employee.date}</td>
                <td className="border-b border-blue-gray-200 px-4 py-2 text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </td>
                <td className="border-b border-blue-gray-200 px-4 py-2 text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="bg-gray-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="border-b border-blue-gray-200 px-4 py-2"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
