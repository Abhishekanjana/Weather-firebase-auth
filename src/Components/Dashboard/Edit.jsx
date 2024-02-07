import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config";

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    await setDoc(doc(db, "employees", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
      <div className="max-w-md mx-auto">
  <h1 className="text-3xl font-semibold text-center mt-8">Edit Users</h1>

  <label htmlFor="firstName" className="block mt-4">First Name</label>
  <input
    id="firstName"
    type="text"
    name="firstName"
    value={firstName}
    onChange={e => setFirstName(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
  />

  <label htmlFor="lastName" className="block mt-4">Last Name</label>
  <input
    id="lastName"
    type="text"
    name="lastName"
    value={lastName}
    onChange={e => setLastName(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
  />

  <label htmlFor="email" className="block mt-4">Email</label>
  <input
    id="email"
    type="email"
    name="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
  />

  <label htmlFor="salary" className="block mt-4">Salary ($)</label>
  <input
    id="salary"
    type="number"
    name="salary"
    value={salary}
    onChange={e => setSalary(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
  />

  <label htmlFor="date" className="block mt-4">Date</label>
  <input
    id="date"
    type="date"
    name="date"
    value={date}
    onChange={e => setDate(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring focus:ring-blue-500"
  />

  <div className="mt-8 flex justify-center">
    <input
      type="submit"
      value="Update"
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4 cursor-pointer"
    />
    <input
      type="button"
      value="Cancel"
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer"
      onClick={() => setIsEditing(false)}
    />
  </div>
</div>

      </form>
    </div>
  );
};

export default Edit;