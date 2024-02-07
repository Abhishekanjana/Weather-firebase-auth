import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase/config";


const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    employees.push(newEmployee);

    try {
      await addDoc(collection(db, "employees"), {
        ...newEmployee
      });
    } catch (error) {
      console.log(error)
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="w-full min-w-max table-auto text-left">
      <form onSubmit={handleAdd}>
      <div className="max-w-md mx-auto">
  <h1 className="text-3xl font-semibold text-center mt-8">Add Users</h1>

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
      value="Add"
      className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4 cursor-pointer"
    />
    <input
      type="button"
      value="Cancel"
      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer"
      onClick={() => setIsAdding(false)}
    />
  </div>
</div>

      </form>
    </div>
  );
};

export default Add;