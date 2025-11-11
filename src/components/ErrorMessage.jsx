import './ErrorMessage.css';

export default function ErrorMessage({ 
  message, 
  onRetry, 
  retryText = 'Try Again',
  showRetry = false 
}) {
  return (
    <div className="error-container">
      <div className="error-message">
        <span className="error-icon">⚠️</span>
        <span className="error-text">{message}</span>
        {showRetry && onRetry && (
          <button className="error-retry-button" onClick={onRetry}>
            {retryText}
          </button>
        )}
      </div>
    </div>
  );
}