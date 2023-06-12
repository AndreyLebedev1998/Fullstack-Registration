import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./pages/Register/Register";
import Authorization from "./pages/Authorization/Authorization";
import GoodAuth from "./pages/GoodAuth/GoodAuth";
import axios from "./axios.js";
import Home from "./pages/Home";
import GoodRegister from "./pages/GoodRegister/GoodRegister";

function App() {
  const [dataAuth, setDataAuth] = useState(null);
  const [auth, setAuth] = useState(null);
  const [dataReg, setDataReg] = useState(null);

  useEffect(() => {
    axios
      .get("/auth/me")
      .then((res) => res.data)
      .then((data) => setAuth(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(dataAuth);
  console.log(auth);

  return (
    <div className="App">
      <Header
        dataAuth={dataAuth}
        setDataAuth={setDataAuth}
        auth={auth}
        setAuth={setAuth}
        dataReg={dataReg}
      />
      <h1>
        Добро пожаловать{" "}
        {(auth ? auth.fullName : "") ||
          (dataAuth ? dataAuth.fullName : "") ||
          (dataReg ? dataReg.fullName : "")}
      </h1>
      <Routes>
        <Route path="/" element={<Home auth={auth} />} />
        <Route
          path="/register"
          element={
            <Register dataReg={dataReg} setDataReg={setDataReg} auth={auth} />
          }
        />
        <Route
          path="/authorization"
          element={
            <Authorization
              dataAuth={dataAuth}
              setDataAuth={setDataAuth}
              authMe={auth}
            />
          }
        />
        <Route
          path="/goodAuth"
          element={<GoodAuth dataAuth={dataAuth} auth={auth} />}
        />
        <Route
          path="/goodRegister"
          element={<GoodRegister dataReg={dataAuth} auth={auth} />}
        />
      </Routes>
    </div>
  );
}

export default App;
