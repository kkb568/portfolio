import { Link } from "react-router-dom";
import "./PageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="pageNotFound">
      <h1>404</h1>
      <p>Sorry to disappoint you but the page is not available.</p>
      <br />
      <Link to="/">Back to home</Link>
    </div>
  );
}
