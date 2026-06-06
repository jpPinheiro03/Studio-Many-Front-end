import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContextDefinition";
import {
  login as loginService,
  logout as logoutService,
  register as registerService,
} from "../services/authService";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const login = async (email, senha) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await loginService({ email, senha });
      const userData = {
        id: response.id,
        nome: response.nome,
        email: response.email,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      if (response.token) {
        localStorage.setItem("auth_token", response.token);
      }
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Email ou senha inválidos");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (dados) => {
    setIsLoading(true);
    setError(null);
    try {
      await registerService(dados);
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao cadastrar. Tente novamente.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutService();
    } catch {
      // logout local mesmo se a API falhar
    } finally {
      setUser(null);
      localStorage.removeItem("user");
      localStorage.removeItem("auth_token");
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
