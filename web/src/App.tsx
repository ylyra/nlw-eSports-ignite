import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "~react-pages";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Router>
  );
}

export default App;
