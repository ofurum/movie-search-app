import React, {lazy, Suspense} from "react";
import "./App.css"
import {BrowserRouter as Router ,Route} from "react-router-dom"
const Home = lazy(() => import("./home"));

function App() {
  return (
    <div>
      <Suspense
        fallback={
          <div className="spinner">
            <i class="fa fa-spinner w3-spin"></i>
          </div>
        }
      >
        <Router>
          <Route path="/" component={Home} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App
