import { useForm } from "react-hook-form";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { Div, GlobalContainer, Img, ImgGroup, InputPassword } from "./styles";
import Logo from "../../assets/burguerKenzie.png";
import bag from "../../assets/shopping-bag.png";
import Group from "../../assets/Group135.png";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./RegisterSchema";
import { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";

interface IRegisterData {
  name: string;
  email: string;
  password: string;
}

export const Registration = () => {
  const { UserRegister, setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
    mode: "onBlur",
  });

  const submit = (data: IRegisterData) => {
    console.log(data);
    UserRegister(data, setUser);
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
          <div>
            <h1>Cadastro</h1>
            <Link to={"/"}>Retornar para o login</Link>
          </div>

          <Input id={`Nome`} type="text" register={register("name")}></Input>
          {errors.name?.message && <p> {errors.name.message}</p>}
          <Input id={`Email`} type="Email" register={register("email")}></Input>
          {errors.email?.message && <p> {errors.email.message}</p>}
          <InputPassword
            placeholder={`Senha`}
            type="password"
            {...register("password")}
          ></InputPassword>
          {errors.password?.message && <p> {errors.password.message}</p>}
          <InputPassword
            placeholder={`Confirmar Senha`}
            type="password"
            {...register("password")}
          ></InputPassword>
          {errors.password?.message && <p> {errors.password.message}</p>}
          <Button />
        </form>
      </GlobalContainer>
    </>
  );
};
