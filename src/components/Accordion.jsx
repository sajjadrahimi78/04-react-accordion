import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum dolor, Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias porro aperiam quo at velit dicta voluptatum quas doloremque nihil, necessitatibus fugit iure, libero, cumque praesentium odio consectetur vero dignissimos!",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias porro aperiam quo at velit dicta voluptatum quas doloremque nihil, necessitatibus fugit iure, libero, cumque praesentium odio consectetur vero dignissimos!",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti alias porro aperiam quo at velit dicta voluptatum quas doloremque nihil, necessitatibus fugit iure, libero, cumque praesentium odio consectetur vero dignissimos!",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  // state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((is) => !is)}
      >
        {item.title}
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
