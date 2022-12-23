import { useContext, useState } from "react";
import { CartContext } from "../../Providers/CartContext";
import Trash from "../../assets/trash.png";
import ReactModal from "react-modal";
import {
  CartConteiner,
  CartDiv,
  CartItem,
  CartList,
  CartPurchases,
  CartTitleAddItems,
  CategoryCart,
  ContCart,
  ContTotal,
  EmptyCart,
  EmptyCartTitle,
  ImgCart,
  RemoveAllButton,
  TitleAmount,
  TitleCart,
  TitleTotal,
} from "./styles";

ReactModal.setAppElement("#root");

export const ModalCart = () => {
  const {
    currentSale,
    cartTotal,
    removeClick,
    removeAll,
    handleCloseModal,
    modal,
  } = useContext(CartContext);

  if (currentSale.length === 0) {
    return (
      <ReactModal
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto ",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            padding: "0",
            border: "none",
            maxHeight: "500px",
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)",
          },
        }}
        isOpen={modal}
        onRequestClose={handleCloseModal}
      >
        <CartConteiner>
          <CartPurchases>Carrinho de compras</CartPurchases>
          <EmptyCart>
            <EmptyCartTitle>Sua sacola está vazia</EmptyCartTitle>
            <CartTitleAddItems>Adicione itens</CartTitleAddItems>
          </EmptyCart>
        </CartConteiner>
      </ReactModal>
    );
  } else {
    return (
      <ReactModal
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto ",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
            padding: "0",
            border: "none",
            maxHeight: "500px",
          },
          overlay: {
            background: "rgba(18, 18, 20, 0.5)",
          },
        }}
        isOpen={modal}
        onRequestClose={handleCloseModal}
      >
        <CartConteiner>
          <CartPurchases>
            Carrinho de compras
            <p onClick={handleCloseModal}>x</p>
          </CartPurchases>
          <CartList>
            {currentSale.map((productCart, index) => (
              <CartItem key={index}>
                <ContCart>
                  <ImgCart src={productCart.img} alt={productCart.name} />
                  <CartDiv>
                    <TitleCart>{productCart.name}</TitleCart>

                    <CategoryCart>{productCart.category}</CategoryCart>
                  </CartDiv>
                </ContCart>
                <button onClick={() => removeClick(productCart.id)}>
                  <img src={Trash} alt="" />
                </button>
              </CartItem>
            ))}
          </CartList>
          <ContTotal>
            <TitleTotal>Total</TitleTotal>
            <TitleAmount>R$ {cartTotal}</TitleAmount>
            <RemoveAllButton onClick={() => removeAll()}>
              Remover todos{" "}
            </RemoveAllButton>
          </ContTotal>
        </CartConteiner>
      </ReactModal>
    );
  }
};
