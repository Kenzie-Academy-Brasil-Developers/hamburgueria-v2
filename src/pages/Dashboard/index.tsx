import {
  ButtonAdd,
  CategoryProduct,
  ContainerUl,
  ContInformation,
  HeaderStyle,
  Img,
  Picture,
  ProductPrice,
  StyledProduct,
  TitleProduct,
} from "./styles";
import Logo from "../../assets/Logo.png";
import Cart from "../../assets/cart.png";
import search from "../../assets/search.png";
import Logaut from "../../assets/logaut.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Iproduct {
  name: string;
  category: string;
  price: number;
  id: number;
  img: string;
}

export const Dashboard = () => {
  const [products, setProducts] = useState([] as Iproduct[] | null);
  const [cartTotal, setCartTotal] = useState<number | string | []>(0);
  const [currentSale, setCurrentSale] = useState([] as Iproduct[] | null);

  useEffect(() => {
    async function getList() {
      try {
        const response = await api.get(`products`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getList();

    function total() {
      const amount: number | any = currentSale?.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.price),
        0
      );
      setCartTotal(amount.toFixed(2));
    }
    total();
  }, [currentSale]);

  return (
    <>
      <HeaderStyle>
        <img src={Logo} alt="Logo" />
        <div>
          <Img src={search} alt="search" />
          <Img src={Cart} alt="Cart" />
          <img src={Logaut} alt="Logaut" />
        </div>
      </HeaderStyle>
      <ContainerUl>
        {products?.map<any>((product) => {
          <StyledProduct key={product.id}>
            <Picture>
              <img src={product.img} alt={""} />
            </Picture>
            <ContInformation>
              <TitleProduct>{product.name}</TitleProduct>
              <CategoryProduct>{product.category}</CategoryProduct>
              <ProductPrice>R${product.price}</ProductPrice>
              <ButtonAdd>Adicionar</ButtonAdd>
            </ContInformation>
          </StyledProduct>;
        })}
      </ContainerUl>
      ;
    </>
  );
};
