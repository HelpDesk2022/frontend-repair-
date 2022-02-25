import React from "react";
import "./email.css"
import Elipse from "../fotos/Elipse.png"
import Repair from "../fotos/Repair.png"

export default function () {
  return (
    <>
    <div className="container">
    <img className="fundo" src={Elipse} alt="Elipse" />
    </div>
    <img className="logo" src={Repair} alt="Repair" />
      <div className="login">
        <h1>Faça seu login</h1>
        <p><b>E-mail</b></p>
        <form className="box">
          <input id="Email" className="form_field" type="Email"/> 
          <button type="button"  className="form_button">Continuar</button>
          
        </form>
      </div>
    </>
  );
  }

