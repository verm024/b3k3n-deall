import React, { useState } from "react";

import { Input } from "../../components/atom";
import { BookList } from "../../components/organism";
import { useResponsive } from "../../hooks";

const BookCategory = () => {
  const { isMobile, isTablet, isLgScreen } = useResponsive();
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
      <BookList
        col={isMobile ? 1 : isTablet ? 2 : isLgScreen ? 3 : 4}
        data={[
          {
            id: 0,
            title: "The Intelligent Investor",
            category_id: 1,
            authors: ["Benjamin Graham"],
            cover_url:
              "https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur vo",
            sections: [
              {
                title: "Intro",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
              },
              {
                title: "The story of Mr. Market",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "Are you a speculator?",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed od",
              },
              {
                title: "The basic principles",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n       obcaecati tenetur ",
              },
              {
                title: "Starting your career",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n       obcaecati t",
              },
              {
                title: "Ending your career",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat i",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor s",
              },
            ],
            audio_length: 840,
          },
          {
            id: 1,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 2,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 3,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 4,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 5,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 6,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 7,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
          {
            id: 8,
            title: "Eat to Live",
            category_id: 1,
            authors: ["Joel Fuhrman"],
            cover_url:
              "https://cdn.sejutacita.id/60594de91882d200135bd833/Booku/bec21735-9392-4694-9805-1ba929f03f1b.jpeg",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max",
            sections: [
              {
                title: "Eat high-nutritious food",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum",
              },
              {
                title: "The societal myths",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium nemo aut",
              },
              {
                title: "The daily menu",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam",
              },
              {
                title: "The benefetial impacts",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n      ",
              },
              {
                title: "The implementation",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n       molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n       numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n       optio, eaque rerum! Provident similique accusantium ",
              },
              {
                title: "Final notes",
                content: "Lorem ipsum dolor sit ",
              },
            ],
            audio_length: 3972,
          },
        ]}
      />
      <p>{inputState}</p>
    </div>
  );
};

export default BookCategory;
