import "./App.css";
import "./assets/bootstrap.css";
import "./assets/custom.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/auth/Login";
import Dashboard from "./views/Dashboard";
import AddValidations from "./views/validations/AddValidations";
function App() {
  // const token = localStorage.getItem("access_token");

  // if (token !== null) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route
          path="/validation"
          element={<AddValidations></AddValidations>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
  // }

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="*" element={<Login></Login>}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
