import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--gray-0);
  display: flex;
  align-items: center;
  padding: 14px 16px;
  margin-bottom: 24px;
  justify-content: space-between;

  @media (min-width: 900px) {
    padding: 20px 80px;
    margin-bottom: 32px;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
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
  color: var(--gray-100);
`;

export const ContainerUl = styled.ul`
  display: flex;
  padding: 0 16px;
  overflow: auto;

  @media (min-width: 900px) {
    padding: 20px 0 20px 80px;
    flex-wrap: wrap;
    width: 66%;
  }
`;

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  min-width: 300px;
  height: 346px;
  margin: 0 20px 20px 0;
  border: solid 2px var(--gray-20);

  @media (min-width: 900px) {
    max-width: 250px;
    min-width: 250px;
  }
`;

export const Picture = styled.picture`
  width: 100%;
  height: 150px;
  background-color: var(--gray-0);
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
  color: var(--gray-100);
  margin-bottom: 14px;
`;

export const CategoryProduct = styled.span`
  font-family: var(--Inter);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--gray-50);
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
  background-color: var(--Color-primary);
  border: solid 2px var(--Color-primary);
  color: #ffff;
`;
