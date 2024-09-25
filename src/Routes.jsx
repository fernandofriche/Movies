import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Register from "./pages/Register";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movie />
              </ProtectedRoute>
            }
          />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
