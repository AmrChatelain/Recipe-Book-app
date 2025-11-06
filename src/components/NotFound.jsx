import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go Back to Dashboard</Link>
    </div>
  );
}

export default NotFoundPage;