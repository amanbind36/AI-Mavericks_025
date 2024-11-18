// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from './firebase';
// import './SignUpForm.css';

const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setError(null);

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       navigate('/landing');
//     } catch (error) {
//       setError(error.message);
//       window.alert(`Login failed: ${error.message}`);
//     }
//   };

//   return (

//       <div className="wrapper">
//         <h1>Login</h1>
//         <form onSubmit={handleLogin}>
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
//           <button type="submit" className="btn">Login</button>
//           {error && <p className="error">{error}</p>}
//           <div className="register-link">
//             <p>Don't have an account? <a href="/signup">Sign up here</a></p>
//           </div>
//         </form>
//       </div>
   
//   );
};

export default LoginForm;