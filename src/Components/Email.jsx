import React from "react";
import "./email.css";
import Elipse from "../fotos/Elipse.png";
import Repair from "../fotos/Repair.png";
import {useForm} from "react-hook-form"

import {Link} from "react-router-dom"


   function Email() {

     const {register, formState: {errors}, handleSubmit} = useForm();
     const onSubmit = data => {
     
     };
      
  
  return (
    <>
      <div className="container">
        <img className="fundo" src={Elipse} alt="Elipse" />
      </div>
      <img className="logo" src={Repair} alt="Repair" />
      <div className="login">
      
        <h1>Faça seu login</h1>
        <p>
          <b>E-mail</b>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <input className="form_field"
           {...register("Email", {required: true})}/>
           <p className="erro">{errors.Email?.type === 'required' && "Preencha o campo de E-mail"}</p>
           
          <br></br>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <button type="submit"  id="botao" className="form_button">Continuar</button>
        </form>
      </div>
    </>
  );
};

export default Email;
