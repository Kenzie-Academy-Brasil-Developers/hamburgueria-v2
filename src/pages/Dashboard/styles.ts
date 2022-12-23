import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--grey-0);
  display: flex;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 24px;
  justify-content: space-between;

  img {
    cursor: pointer;
  }

  div {
    display: flex;
    height: max-content;
    align-items: center;
  }

  @media (min-width: 900px) {
    padding: 20px 80px;
    margin-bottom: 32px;
  }
`;

export const CartCont = styled.div`
  height: 24px;
  width: 20px;
  border-radius: 7px;
  background-color: var(--Color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 15px;
  top: 5px;

  p {
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 800;
    color: #ffff;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
  cursor: pointer;
`;

export const ImgSearch = styled.img`
  margin-right: 20px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const ResultCont = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 0 16px;
  margin-bottom: 15px;

  @media (min-width: 900px) {
    padding: 0 80px;
    margin-bottom: 30px;
  }
`;

export const ResultText = styled.div`
  font-family: var(--Inter);
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
  color: var(--grey-300);
`;

export const ContainerUl = styled.ul`
  display: flex;
  padding: 0 16px;
  overflow: auto;

  @media (min-width: 900px) {
    padding: 20px 0 20px 80px;
    flex-wrap: wrap;
  }
`;

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  height: 346px;
  margin: 0 56px 50px 0;
  border: solid 2px var(--grey-100);

  :hover {
    border: solid 2px var(--Color-primary);
  }

  @media (min-width: 900px) {
    max-width: 255px;
    min-width: 255px;
    justify-content: space-between;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 150px;
  background-color: var(--grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContInformation = styled.div`
  display: flex;
  flex-direction: column;
  height: 196px;
  width: 100%;
  background-color: #ffff;
  padding: 23px 20px;
`;

export const TitleProduct = styled.h1`
  font-family: var(--Inter);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: var(--grey-600);
  margin-bottom: 14px;
`;

export const CategoryProduct = styled.span`
  font-family: var(--Inter);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--grey-300);
  margin-bottom: 14px;
`;

export const ProductPrice = styled.h3`
  font-family: var(--Inter);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: var(--Color-primary);
  margin-bottom: 14px;
`;

export const ButtonAdd = styled.button`
  height: 40px;
  width: 106px;
  border-radius: 8px;
  padding: 0px 15px;
  background-color: #bdbdbd;
  border: solid 2px #bdbdbd;

  color: #ffff;

  :hover {
    background-color: var(--Color-primary);
    border: solid 2px var(--Color-primary);
  }
`;

export const HeaderContInput = styled.form`
  height: 60px;
  width: 100%;
  position: relative;
  bottom: 9px;
  max-width: 365px;
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  border: solid 1px var(--grey-100);
  align-items: center;
  margin-top: 14px;
  padding: 10px;
  background-color: #ffff;

  button {
    border: none;
    cursor: pointer;
  }

  :hover {
    border: solid 1px var(--grey-600);
  }
`;

export const ContInput = styled.form`
  height: 60px;
  position: relative;
  bottom: 9px;
  width: 365px;
  display: flex;
  border-radius: 8px;
  justify-content: space-between;
  border: solid 1px var(--grey-100);
  align-items: center;
  margin-top: 14px;
  padding: 10px;
  background-color: #ffff;
  display: none;
  margin: 14px 23px 0 0;

  button {
    border: none;
    cursor: pointer;
  }

  :hover {
    border: solid 1px var(--grey-600);
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;

export const StyleInput = styled.input`
  height: 100%;
  width: 70%;
  border: solid 1px #ffff;
`;

export const Result = styled.span`
  font-family: var(--Inter);
  font-size: 26px;
  font-weight: 700;
  line-height: 34px;
  color: var(--grey-300);
`;
