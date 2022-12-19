import React, { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label, Inputs } from "./styles";

interface iPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  register: UseFormRegisterReturn;
}

export const Input = ({ type, id, register, ...rest }: iPropsInput) => {
  return (
    <>
      <Label htmlFor={id}>{id}</Label>
      <Inputs id={id} {...rest} {...register} type={type} />
    </>
  );
};
