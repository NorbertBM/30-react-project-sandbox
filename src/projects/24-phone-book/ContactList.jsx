import React from "react";
import Contact from "./Contact";
export default function ContactList({ contacts }) {
  const generateRandomImg = () => {
    const types = [
      "male",
      "female",
      "human",
      "identicon",
      "initials",
      "bottts",
      "avataaars",
      "jdenticon",
      "gridy",
      "micah",
    ];
    // console.log(types);
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact
            key={id}
            icon={`https://avatars.dicebear.com/api/${generateRandomImg()}/john.svg?`}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNr={contact.phone}
          />
        );
      })}
    </ul>
  );
}
