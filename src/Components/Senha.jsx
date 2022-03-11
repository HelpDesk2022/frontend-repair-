import { useState, useEffect } from "react";
import "./senha.css";
import Elipse from "../fotos/Elipse.png";
import Repair from "../fotos/Repair.png";
import {useForm} from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Senha(props) {
  const navigate = useNavigate();
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = data => {
    console.log(data)
    console.log(props.email)
  /*navigate('/')*/
  };
  return (
    <><h1 className="teste">{props.Email}</h1>
      <div className="container1">
        <img className="fundo" src={Elipse} alt="Elipse" />
      </div>
      <img className="logo" src={Repair} alt="Repair" />
      <div className="Senha">
        <h1>Faça seu login</h1>
        <p>
          <b>Senha</b>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="box">
        <input className="form_field"
        maxLength="8"
           type="password"
           {...register("Senha", {required: true})}/>
           <p className="erro">{errors.Senha?.type === 'required' && "Preencha sua senha"}</p>
          <br></br>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button type="submit"  id="botao" className="form_botton">Entrar</button>

          <p className="text"><a href="">Esqueceu a senha ? Clique aqui!</a></p>
        </form>
      </div>
    </>
  );
}

export default Senha;