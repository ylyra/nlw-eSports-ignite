import { Suspense } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "~react-pages";
import "./styles/main.css";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </Router>
  );
}

export default App;
