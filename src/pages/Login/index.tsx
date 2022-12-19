import React from "react";
import { Btn, Div, GlobalContainer, Img, ImgGroup } from "./styles";
import Logo from "../../assets/burguerKenzie.png";
import bag from "../../assets/shopping-bag.png";
import Group from "../../assets/Group135.png";
import { Input } from "../../Components/Input";
import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  interface ILoginData {
    name: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<ILoginData>({});

  const submit = (data: ILoginData) => {
    console.log(data);
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
          <Input id={`Nome`} type="text" register={register("name")}></Input>
          <Input
            id={`Senha`}
            type="password"
            register={register("password")}
          ></Input>
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
