import PropTypes from 'prop-types';

export default function Home({ onLogout }) {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>You are now logged in!</p>
      <button onClick={onLogout} className="logout-btn">Logout</button>
      <style>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f0f2f5;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
          margin-bottom: 1rem;
        }
        .logout-btn {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          background-color: #1877f2;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .logout-btn:hover {
          background-color: #166fe5;
        }
      `}</style>
    </div>
  );
}

Home.propTypes = {
  onLogout: PropTypes.func.isRequired, // Validate that onLogout is a required function
};
