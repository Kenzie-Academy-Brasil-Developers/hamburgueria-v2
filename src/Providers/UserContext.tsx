import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IChildrenProps {
  children: React.ReactNode;
}

interface Iuser {
  email: string;
  id: string;
  name: string;
}

interface IformData {
  email: string;
  password: string | number;
  name: string;
}

interface Iresponse {
  accessToken: string;
  user: Iuser;
}

export interface IUserContext {
  UserRegister: (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<Iuser | null>>
  ) => void;
  UserLogin: (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<Iuser | null>>
  ) => void;
  User: Iuser | null;
  setUser: React.Dispatch<React.SetStateAction<Iuser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);

export const ContextProviders = ({ children }: IChildrenProps) => {
  const [User, setUser] = useState<Iuser | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const UserRegister = async (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<Iuser | null>>
  ) => {
    try {
      const request = await api.post<Iresponse>("users", formData);
      setUser(request.data.user);
      localStorage.setItem("@Token", request.data.accessToken);
      toast.success("Cadastro realizado com sucesso");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      toast.error(error);
    }
  };

  const UserLogin = async (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<Iuser | null>>
  ) => {
    try {
      const request = await api.post<Iresponse>("login", formData);
      setUser(request.data.user);
      localStorage.setItem("@Token", request.data.accessToken);
      localStorage.setItem("@User", JSON.stringify(request.data.user));
      toast.success("Login realizado com sucesso");
      console.log(request.data);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@Token");
      const UserProfile: Iuser[] | string | any = localStorage.getItem("@User");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        await api.get(`products`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        setUser(JSON.parse(UserProfile));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{ UserRegister, User, setUser, UserLogin, loading, setLoading }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
