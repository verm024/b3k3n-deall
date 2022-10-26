import React from "react";
import { useNavigate } from "react-router-dom";

import { Text, Container, Spacer } from "../../components/atom";
import { Tag } from "../../components/molecules";

const Home = () => {
  const navigate = useNavigate();

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
  ];
  return (
    <Container
      display="flex"
      justifyContent="center"
      width="100%"
      height="100vh"
      flexDirection="column"
    >
      <Text textType="h2" color="#6c31f5" bold>
        EXPLORE CATEGORIES
      </Text>
      <Text textType="h5">What book category would you like to see?</Text>
      <Spacer size={12} />
      <Container>
        {categories.map((category, index) => (
          <>
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
            {index < categories.length - 1 && <Spacer size={8} inline />}
          </>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
