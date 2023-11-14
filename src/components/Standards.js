import React from "react";
import styled from "styled-components";

function Standards() {
  return (
    <Container>
      <Heading>Elevating Standards</Heading>
      <SubHeading>
        Reserve InfiWheel at your convenience, whether by the hour or day, and
        pay solely for the duration you spend driving.
      </SubHeading>
      <Main>
        <Item>
          <ItemImage
            src="https://cdn-icons-png.flaticon.com/512/557/557033.png"
            alt="item"
          />
          <Title>24/7 Accessibility</Title>
          <Description>
            lapsflaofkaof asa avsvl oa salfnv agsmgk asf;k afm kafmnaf xmxkmaf
            af afaf.
          </Description>
        </Item>
        <Item>
          <ItemImage
            src="https://cdn-icons-png.flaticon.com/512/557/557033.png"
            alt="item"
          />
          <Title>Cars near you</Title>
          <Description>
            lapsflaofkaof asa avsvl oa salfnv agsmgk asf;k afm kafmnaf xmxkmaf
            af afaf.
          </Description>
        </Item>
        <Item>
          <ItemImage
            src="https://cdn-icons-png.flaticon.com/512/557/557033.png"
            alt="item"
          />
          <Title>Save money</Title>
          <Description>
            lapsflaofkaof asa avsvl oa salfnv agsmgk asf;k afm kafmnaf xmxkmaf
            af afaf.
          </Description>
        </Item>
        <Item>
          <ItemImage
            src="https://cdn-icons-png.flaticon.com/512/557/557033.png"
            alt="item"
          />
          <Title>Go beyond public transit</Title>
          <Description>
            lapsflaofkaof asa avsvl oa salfnv agsmgk asf;k afm kafmnaf xmxkmaf
            af afaf.
          </Description>
        </Item>
      </Main>
    </Container>
  );
}

export default Standards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 1px;
`;

const SubHeading = styled.span`
  margin-bottom: 48px;
  opacity: 0.85;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const ItemImage = styled.img`
  width: 10vw;
  height: auto;
  margin-bottom: 12px;
`;

const Title = styled.h4``;

const Description = styled.span`
  text-align: center;
`;
