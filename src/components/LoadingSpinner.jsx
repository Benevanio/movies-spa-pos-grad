import './LoadingSpinner.css';

export default function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
    </div>
  );
}