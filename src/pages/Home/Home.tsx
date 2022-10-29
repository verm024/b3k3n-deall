import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

import { Text, Container, Spacer } from "../../components/atom";
import { Tag } from "../../components/molecules";

import { useResponsive } from "../../hooks";

interface Category {
  id: string;
  name: string;
}

const Home = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  const { data = [] } = useQuery("category", async () => {
    const res = await fetch(
      process.env.NODE_ENV === "development"
        ? "/fee-assessment-categories"
        : `${window.location.origin}/api/fee-assessment-categories`
    );
    if (!res.ok) {
      throw new Error("Fetch Error");
    }
    return await res.json();
  });

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
        {data.map((category: Category, index: number) => (
          <React.Fragment key={category.id}>
            {index > 0 && <Spacer size={4} inline />}
            <Tag
              cursor="pointer"
              onClick={() => {
                navigate(`/category/${category.id}`);
              }}
              margin="4px 0"
            >
              {category.name}
            </Tag>
            {index < data.length - 1 && <Spacer size={4} inline />}
          </React.Fragment>
        ))}
      </Container>
    </Container>
  );
};

export default Home;
