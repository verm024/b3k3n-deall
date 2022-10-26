import React, { useState } from "react";

import { Input } from "../../components/atom";

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
      <p>{inputState}</p>
    </div>
  );
};

export default BookCategory;
