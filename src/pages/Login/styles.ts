import styled from "styled-components";

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  padding: 40px 13px 21px 13px;
  align-items: center;
  justify-content: center;

  article {
    width: 100%;
    max-width: 380px;
  }

  p {
    color: var(--Negative);
    position: relative;
    bottom: 10px;
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 400;
    text-align: start;
  }

  form {
    margin-top: 14px;
    padding: 19px 21px;
    border: solid 2px var(--grey-0);
    flex-direction: column;
    max-width: 500px;

    h1 {
      font-family: var(--Inter);
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      color: var(--grey-600);
      margin-bottom: 14px;
    }

    h4 {
      font-family: var(--Inter);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
      color: #999999;
      padding: 0 10px;
      text-align: center;
      margin-bottom: 20px;

      @media (min-width: 900px) {
        padding: 0 75px;
      }
    }
  }

  @media (min-width: 900px) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
  }
`;

export const Div = styled.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
  border: solid 1px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-width: 377px;
  margin-bottom: 30px;

  picture {
    width: 60px;
    height: 60px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    background-color: rgba(39, 174, 96, 0.1);
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: 19px;

    img {
      margin: 60px;
    }
  }

  h2 {
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--grey-300);

    @media (min-width: 900px) {
      padding: 0 5px;
    }
  }

  span {
    color: var(--grey-600);
    font-family: var(--Inter);
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
`;

export const Img = styled.img`
  margin-bottom: 22px;
`;

export const ImgGroup = styled.img`
  display: none;

  @media (min-width: 900px) {
    display: flex;
  }
`;

export const Btn = styled.button`
  height: 60px;
  width: 100%;
  border-radius: 8px;
  padding: 0px 40px;
  background-color: #219653;
  border: solid 1px #219653;
  color: var(--grey-0);
  margin-bottom: 19px;
`;
