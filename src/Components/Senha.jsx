import { useState, useEffect } from "react";
import "./senha.css";
import Elipse from "../fotos/Elipse.png";
import Repair from "../fotos/Repair.png";
import { Link } from "react-router-dom";

function Senha() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.password = "Por favor, digite sua senha!";
    } else if (!regex.test(values.password)) {
      errors.password = "Senha incorreta";
    }

    return errors;
  };
  return (
    <>
      <div className="container1">
        <img className="fundo" src={Elipse} alt="Elipse" />
      </div>
      <img className="logo" src={Repair} alt="Repair" />
      <div className="Senha">
        <h1>Faça seu login</h1>
        <p>
          <b>Senha</b>
        </p>
        <form onSubmit={handleSubmit} className="box">
        <p className="falha">{formErrors.password}</p>
        <input
              type="password"
              id="Senha"
              className="field"
              name="password"
              value={formValues.password}
              onChange={handleChange}
          />
          <br></br>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Link to="/" className="form_botton">
            Entrar
          </Link>
        </form>
      </div>
    </>
  );
}

export default Senha;