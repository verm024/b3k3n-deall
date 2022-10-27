import React, { useState } from "react";

import { Input, Image } from "../../components/atom";

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
        width="90%"
      />
      <Image
        src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png"
        width="200px"
        height="100px"
      />
      <p>{inputState}</p>
    </div>
  );
};

export default BookCategory;
