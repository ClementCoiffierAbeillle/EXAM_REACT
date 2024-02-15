import { Outlet } from "react-router-dom";
import logo from "./assets/thor.jpg";
function App() {
  return (
    <>
      <h1>
        <img src={logo} alt="logo" />
      </h1>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
