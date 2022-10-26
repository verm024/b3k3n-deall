import React from "react";
import { useNavigate } from "react-router-dom";

import { Text, Container, Spacer } from "../../components/atom";
import { Tag } from "../../components/molecules";

import { useResponsive } from "../../hooks";

const Home = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const categories = [
    {
      id: "1",
      name: "Category Ichi",
    },
    {
      id: "2",
      name: "Category Ni",
    },
    {
      id: "3",
      name: "Category San",
    },
    {
      id: "4",
      name: "Category Shi",
    },
    {
      id: "5",
      name: "Category Shi",
    },
    {
      id: "6",
      name: "Category Shi",
    },
    {
      id: "7",
      name: "Category Shi",
    },
  ];
  return (
    <Container
      display="flex"
      justifyContent="center"
      width="100%"
      height="100vh"
      flexDirection="column"
    >
      <Text
        textType={isMobile ? "h3" : "h2"}
        color="#6c31f5"
        bold
        textAlign={isMobile ? "center" : "left"}
      >
        EXPLORE CATEGORIES
      </Text>
      <Spacer size={8} />
      <Text
        textType={isMobile ? "h6" : "h5"}
        textAlign={isMobile ? "center" : "left"}
      >
        What book category would you like to see?
      </Text>
      <Spacer size={20} />
      <Container textAlign={isMobile ? "center" : "left"}>
        {categories.map((category, index) => (
          <>
            {index > 0 && <Spacer size={4} inline />}
            <Tag
              cursor="pointer"
              key={category.id}
              onClick={() => {
                navigate(`/category/${category.id}`);
              }}
              margin="4px 0"
            >
              {category.name}
            </Tag>
            {index < categories.length - 1 && <Spacer size={4} inline />}
          </>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
