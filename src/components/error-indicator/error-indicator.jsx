import './error-indicator.css';
import icon from './error-indicator.jpg'

const ErrorIndicator = () => {
  return (
    <div className="error__indicator">
      <img className="error__indicator-img" src={icon} alt="error" />
      <span className="error__indicator-sorry">Sorry</span>
      <span>something has go wrong</span>
      <span>(but we already check what's going on)</span>
    </div>
  )
};

export default ErrorIndicator;
