import { useContext } from "react";
import { Btn, Div, GlobalContainer, Img, ImgGroup } from "./styles";
import Logo from "../../assets/burguerKenzie.png";
import bag from "../../assets/shopping-bag.png";
import Group from "../../assets/Group135.png";
import { Input } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema/LoginSchema";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });
  const { UserLogin, setUser } = useContext(UserContext);

  const submit = (data: IFormData) => {
    UserLogin(data, setUser);
    reset();
  };
  return (
    <>
      <GlobalContainer>
        <article>
          <Img src={Logo} alt="burguerKenzie" />
          <Div>
            <picture>
              <img src={bag} alt="" />
            </picture>
            <h2>
              A vida é como um sanduíche, é preciso recheá-la com os
              <span> melhores </span>
              ingredientes.
            </h2>
          </Div>

          <ImgGroup src={Group} alt="" />
        </article>
        <form onSubmit={handleSubmit(submit)}>
          <h1>Login</h1>
          <Input id={`Email`} type="email" register={register("email")}></Input>
          {errors.email?.message && <p> {errors.email.message}</p>}
          <Input
            id={`Senha`}
            type="password"
            register={register("password")}
          ></Input>
          {errors.password?.message && <p> {errors.password.message}</p>}
          <Btn>Logar</Btn>
          <h4>
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </h4>
          <Link to={"/registration"}>
            <Button />
          </Link>
        </form>
      </GlobalContainer>
    </>
  );
};
