// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { collection, addDoc } from 'firebase/firestore';
// import { auth, db } from './firebase'; 
// import './SignUpForm.css';

const SignUpForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const navigate = useNavigate(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);
//     setSuccess(null);

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       await addDoc(collection(db, 'users'), {
//         uid: user.uid,
//         email: user.email,
//         createdAt: new Date().toISOString(),
//       });

//       setSuccess('User signed up and data saved successfully!');
//       setEmail('');
//       setPassword('');

//       // Ensure the alert shows before navigation
//       alert('Signup successful! Redirecting to login page...');
      
//       // Navigate to the login page after the alert
//       navigate('/login');
      
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (

//       <div className="wrapper">
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="input-box">
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn">Sign Up</button>
//           {error && <div className="custom-alert">{error}</div>}
//           {success && <div className="success">{success}</div>}
//           <div className="register-link">
//             <p>Already have an account? <a href="/login">Login here</a></p>
//           </div>
//         </form>
//       </div>
 
//   );
};

export default SignUpForm;