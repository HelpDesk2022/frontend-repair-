import React from "react";
import "./email.css"
import Elipse from "../src/fotos/Elipse.png"
import Repair from "../src/fotos/Repair.png"

export default function (props) {
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
          <input id="Email"class="form_field"type="Email" prequired/>
          <button type="button" onclick="validUserForm()" class="form_button">Continuar</button>
          
        </form>
      </div>
    </>
  );
}
