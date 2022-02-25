import React from "react";
import "./email.css"
import Elipse from "../fotos/Elipse.png"
import Repair from "../fotos/Repair.png"

export default function () {
  return (
    <>
    <div className="container1">
    <img className="fundo" src={Elipse} alt="Elipse" />
    </div>
    <img className="logo" src={Repair} alt="Repair" />
      <div className="Senha">
        <h1>Faça seu login</h1>
        <p><b>E-mail</b></p>
        <form className="box">
          <input id="Senha" className="field" type="Password"/>
          <button type="button"  className="form_botton">Entrar</button>
          
        </form>
      </div>
    </>
  );
  }