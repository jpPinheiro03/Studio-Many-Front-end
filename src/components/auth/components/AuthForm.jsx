import { useState } from "react";
import { useAuth } from "../../../context/useAuth";

const REDIRECT_DELAY_MS = 2000;

const loginFields = [
  { id: "email", label: "E-mail", type: "email", autoComplete: "email", key: "email" },
  { id: "password", label: "Senha", type: "password", autoComplete: "current-password", key: "password" },
];

const registerFields = [
  { id: "name", label: "Nome", type: "text", autoComplete: "name", key: "name" },
  { id: "cpf", label: "CPF", type: "text", autoComplete: "off", key: "cpf" },
  { id: "phone", label: "Telefone", type: "tel", autoComplete: "tel", key: "phone" },
  { id: "email", label: "E-mail", type: "email", autoComplete: "email", key: "email" },
  { id: "password", label: "Senha", type: "password", autoComplete: "new-password", key: "password" },
];

function FormField({ id, label, type, autoComplete, value, onChange, disabled }) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
    </label>
  );
}

const emptyLoginData = { email: "", password: "" };
const emptyRegisterData = { name: "", cpf: "", phone: "", email: "", password: "" };

function AuthForm({ mode, onModeChange, onSuccess }) {
  const { login, register, isLoading, error } = useAuth();
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loginData, setLoginData] = useState(emptyLoginData);
  const [registerData, setRegisterData] = useState(emptyRegisterData);

  const isRegister = mode === "register";

  const handleChange = (setter) => (key, value) => {
    setter((prev) => ({ ...prev, [key]: value }));
  };

  const showSuccessAndRedirect = (message, callback) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage("");
      callback();
    }, REDIRECT_DELAY_MS);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    const success = await login(loginData.email, loginData.password);
    if (success) {
      showSuccessAndRedirect("Login realizado com sucesso!", onSuccess);
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    setFormError("");

    const success = await register({
      nome: registerData.name,
      documento: registerData.cpf,
      telefone: registerData.phone,
      email: registerData.email,
      senha: registerData.password,
    });

    if (success) {
      setRegisterData(emptyRegisterData);
      showSuccessAndRedirect("Cadastro realizado com sucesso!", () => onModeChange("login"));
    }
  };

  const fields = isRegister ? registerFields : loginFields;
  const data = isRegister ? registerData : loginData;
  const handleChange_ = isRegister
    ? handleChange(setRegisterData)
    : handleChange(setLoginData);
  const handleSubmit = isRegister ? handleRegisterSubmit : handleLoginSubmit;

  const isDisabled = isLoading || !!successMessage;

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {(formError || error) && !successMessage && (
        <div className="auth-error" role="alert">
          {formError || error}
        </div>
      )}

      {fields.map((field) => (
        <FormField
          key={field.id}
          {...field}
          value={data[field.key]}
          onChange={(e) => handleChange_(field.key, e.target.value)}
          disabled={isDisabled}
        />
      ))}

      {!isRegister && (
        <div className="auth-options">
          <label>
            <input type="checkbox" defaultChecked />
            Lembrar de mim
          </label>
          <a href="#forgot-password">Esqueci minha senha</a>
        </div>
      )}

      {successMessage && (
        <div className="auth-success" role="status">
          {successMessage}
        </div>
      )}

      <button className="auth-submit" type="submit" disabled={isDisabled}>
        {isLoading ? "Carregando..." : isRegister ? "Cadastrar-se" : "Entrar"}
        {!isLoading && <span aria-hidden="true"> -&gt;</span>}
      </button>

      {!isRegister && (
        <>
          <div className="auth-divider">ou continue com</div>
          <button className="google-button" type="button">
            Google
          </button>
        </>
      )}

      <p className="auth-terms">
        Ao continuar, você concorda com nossos <a href="#terms">Termos</a> e{" "}
        <a href="#privacy">Política de Privacidade</a>
      </p>
    </form>
  );
}

export default AuthForm;
