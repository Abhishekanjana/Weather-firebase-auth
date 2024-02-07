import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config.js'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate('/dashboard'); 
    } catch (error) {
      
      console.error('Authentication error:', error);
    }
}

  return (
    <div className="h-screen md:flex">
		<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
		<div className="mx-4">
  <h1 className="text-white font-bold text-4xl font-sans text-align: center;">Aplaago Sanck Universe</h1>
  <p className="text-white mt-1">We have created a huge database of snacks from vendors with high importance to TASTE and HYGIENE. We have created this to give you the best choice of menu almost every single day at affordable costs! Our algorithms use a unique method to identify what your community loves and selects snacks tailor-made for you to enjoy.</p>
  </div>

			
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
		
	
    
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white" onSubmit={handleSubmit}>
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Hello!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Welcome To Aplaago</p>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className="pl-2 outline-none border-none"  placeholder="Email Address" />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fillRule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clipRule="evenodd" />
							</svg>
							<input value={password} onChange={(e) => setPassword(e.target.value)} className="pl-2 outline-none border-none" type="password"  placeholder="Password" />
      </div>
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                            
							
		</form>
        {/* <button type="submit" className="block w-60 bg-black text-white-800 mt-4 py-2 rounded-2xl font-bold mb-2">created by: Abhishek Anjana</button> */}
	</div>
</div>
  )
}

export default Login;
