import {
  ButtonAdd,
  CategoryProduct,
  ContainerUl,
  ContInformation,
  ContInput,
  HeaderContInput,
  HeaderStyle,
  Img,
  ImgSearch,
  Picture,
  ProductPrice,
  Result,
  ResultCont,
  ResultText,
  StyledProduct,
  StyleInput,
  CartCont,
  TitleProduct,
} from "./styles";
import Logo from "../../assets/Logo.png";
import disable from "../../assets/button-disable.png";
import Cart from "../../assets/cart.png";
import search from "../../assets/search.png";
import Logaut from "../../assets/logaut.png";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/UserContext";
import { Link, Navigate } from "react-router-dom";
import { CartContext } from "../../Providers/CartContext";
import { ModalCart } from "../../Components/ModalCart";

export const Dashboard = () => {
  const { loading, User } = useContext(UserContext);
  const {
    handleClick,
    handleOpenModal,
    filter,
    setFilteredProducts,
    filteredProducts,
    currentSale,
  } = useContext(CartContext);
  const [Search, setSearch] = useState(false);
  const [target, setTarget] = useState("");

  if (loading) {
    return <h2>Carrregando...</h2>;
  }

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    setFilteredProducts(target);
    setSearch(false);
    event.preventDefault();
  };

  return User ? (
    <>
      {Search ? (
        <HeaderStyle>
          <HeaderContInput onSubmit={submit}>
            <StyleInput
              placeholder="Digitar Pesquisa"
              onChange={(event) => setTarget(event.target.value)}
            />
            <button>
              <img src={disable} alt="" />
            </button>
          </HeaderContInput>
        </HeaderStyle>
      ) : (
        <HeaderStyle>
          <img src={Logo} alt="Logo" />
          <div>
            <ImgSearch
              onClick={() => setSearch(true)}
              src={search}
              alt="search"
            />

            <ContInput onSubmit={submit}>
              <StyleInput
                placeholder="Digitar Pesquisa"
                onChange={(event) => setTarget(event.target.value)}
              />
              <button>
                <img src={disable} alt="" />
              </button>
            </ContInput>
            <picture>
              <CartCont>
                <p>{currentSale.length}</p>
              </CartCont>
              <Img onClick={handleOpenModal} src={Cart} alt="Cart" />
            </picture>

            <Link to="/" onClick={() => localStorage.clear()}>
              <img src={Logaut} alt="Logaut" />
            </Link>
          </div>
        </HeaderStyle>
      )}
      {filteredProducts.length !== 0 ? (
        <ResultCont>
          <ResultText>
            <Result>Resultados para: </Result>
            {filteredProducts}
          </ResultText>
        </ResultCont>
      ) : (
        console.log()
      )}
      <ContainerUl>
        {filter?.map<any>((product) => (
          <StyledProduct key={product.id}>
            <Picture>
              <img src={product.img} alt={""} />
            </Picture>
            <ContInformation>
              <TitleProduct>{product.name}</TitleProduct>
              <CategoryProduct>{product.category}</CategoryProduct>
              <ProductPrice>R${product.price}</ProductPrice>
              <ButtonAdd onClick={() => handleClick(product.id)}>
                Adicionar
              </ButtonAdd>
            </ContInformation>
          </StyledProduct>
        ))}
      </ContainerUl>
      <ModalCart></ModalCart>;
    </>
  ) : (
    <Navigate to="/" />
  );
};
