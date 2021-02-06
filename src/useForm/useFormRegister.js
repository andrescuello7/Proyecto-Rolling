import { useState } from "react";
import { getStorageArray, setStorage } from "../utils/utils";

const useFormRegister = (submit) => {
  const [validated, setValidated] = useState(false);
  const generateId = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
  };
  const [ouput, setOuput] = useState({});
  const [input, setInput] = useState({
    name: "",
    password: "",
    email: "",
    cuenta: "",
    id: generateId(),
  });
  const handleSubmit = (event) => {
    const form = event.target;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    setOuput(input);
    if (form.checkValidity() === true) {
      const usuario = getStorageArray("usuario");
      const usuarioUp = [...usuario, input];
      setStorage("usuario", usuarioUp);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target["name"];
    const objeto = { ...input, [name]: value };
    setInput(objeto);
  };
  return {
    handleSubmit,
    handleChange,
    generateId,
    validated,
  };
};
export default useFormRegister;
