import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

interface Iproduct {
  name: string;
  category: string;
  price: number;
  id: number;
  img: string;
}

interface ICartProvider {
  products: Iproduct[];
  setProducts: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  cartTotal: number | string | [];
  setCartTotal: React.Dispatch<React.SetStateAction<string | number | []>>;
  currentSale: Iproduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  removeClick: (id: number) => void;
  removeAll: () => void;
  handleClick: (id: number) => void;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  filter: any[];
  setFilteredProducts: React.Dispatch<any>;
  filteredProducts: any;
}

interface IChildrenProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as ICartProvider);

export const CartProvider = ({ children }: IChildrenProps) => {
  const [products, setProducts] = useState([] as Iproduct[]);
  const [cartTotal, setCartTotal] = useState<number | string | []>(0);
  const [currentSale, setCurrentSale] = useState([] as Iproduct[] | any);
  const [filteredProducts, setFilteredProducts] = useState(
    [] as Iproduct[] | any
  );

  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  const filter: Iproduct[] = products.filter((product: Iproduct) =>
    filteredProducts.length === 0
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase()) ||
        product.category.toLowerCase().includes(filteredProducts.toLowerCase())
  );

  function handleClick(id: number) {
    const add = products.find((element) => element.id === id);
    const filter = currentSale.filter((elem: Iproduct) => elem.id === id);
    if (filter.length === 0) {
      setCurrentSale([...currentSale, add]);
      toast.success("produto adicionado no carrinho");
    } else {
      setCurrentSale([...currentSale]);
      toast.error("Voce ja possui esse item no carrinho");
    }
  }

  const removeClick = (id: number) => {
    const remove = currentSale.filter((elem: Iproduct) => {
      return elem.id !== id;
    });
    setCurrentSale(remove);
  };

  const removeAll = () => {
    setCurrentSale([]);
  };

  useEffect(() => {
    const getList = async () => {
      const token = localStorage.getItem("@Token");
      try {
        const response = await api.get(`products`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();

    const total = () => {
      const amount: number | any = currentSale?.reduce(
        (accumulator: number, currentValue: number | any) =>
          accumulator + Number(currentValue.price),
        0
      );
      setCartTotal(amount.toFixed(2));
    };
    total();
  }, [currentSale]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        cartTotal,
        setCartTotal,
        currentSale,
        setCurrentSale,
        removeClick,
        removeAll,
        handleClick,
        modal,
        setModal,
        handleCloseModal,
        handleOpenModal,
        filter,
        setFilteredProducts,
        filteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
