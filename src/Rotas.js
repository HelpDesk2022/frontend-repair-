import React from "react"
import {Routes, useRoutes} from "react-router-dom";
import Email from "./Components/Email"
import Senha from "./Components/Senha"

const Rotas = () => {
     return useRoutes([
      { path: "/", element: <Email /> },
      { path: "senha", element: <Senha /> },
    ]);
  };

export default Rotas;