import React, { useState } from "react";

import { Input, Container } from "../../components/atom";
import { BookCard } from "../../components/molecules";

const BookCategory = () => {
  const [inputState, setInputState] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setInputState(target.value);
  };

  return (
    <div>
      <p>Book Category Page</p>
      <Input
        value={inputState}
        onChange={handleInputChange}
        placeholder="Halo"
        width="100%"
      />
      <Container display="flex" justifyContent="space-between" width="100%">
        {/* isXLScreen: 4 col */}
        {/* isLgScreen: 3 col */}
        {/* Tablet: 2 col */}
        {/* Mobile: 1 col */}
        <BookCard
          imageSrc="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png"
          title="Title Book Yang Agak Panjangan Dikit"
          author="Benjamin Button, Benjamin Cook, and Benjamin Sarabi"
        />
        <BookCard
          imageSrc="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png"
          title="Title Book Yang Agak Panjangan Dikit"
          author="Benjamin Button"
        />
      </Container>
      <p>{inputState}</p>
    </div>
  );
};

export default BookCategory;
