import React, { useState } from "react";
import Title from "../components/Title";
import ContactList from "./ContactList";
import SearchFilter from "./SearchFilter";
// Data Base (Db)
import { getContacts } from "./db";

export default function PhoneBookApp() {
  let dbContacts = getContacts();
  //   States
  const [showContacts, setShowContacts] = useState(false);
  const [sortAZ, setSortAZ] = useState(true);
  const [searchContact, setSearchContact] = useState("");

  const toggleContacts = () => {
    showContacts ? setShowContacts(false) : setShowContacts(true);
  };

  const toggleSortAZ = () => {
    sortAZ ? setSortAZ(false) : setSortAZ(true);
  };
  return (
    <>
      <Title text={"Phone book"}></Title>
      <main className="bg-dark text-light p-1">
        <SearchFilter
          handleToggleContacts={toggleContacts}
          handleToggleSortAZ={toggleSortAZ}
          handleSearchContact={setSearchContact}
        />
        <div style={{ height: 650, overflow: "auto" }}>
          <h2 className="subtitle text-center">Display contacts</h2>
          {showContacts && (
            <ContactList
              contacts={(sortAZ
                ? dbContacts.sort((a, b) =>
                    a.first_name.localeCompare(b.first_name)
                  )
                : dbContacts.sort((a, b) =>
                    b.first_name.localeCompare(a.first_name)
                  )
              ).filter((contact) => {
                if (searchContact === "") {
                  return contact;
                } else if (
                  contact.first_name
                    .toLocaleLowerCase()
                    .includes(searchContact.toLowerCase())
                ) {
                  return contact;
                }
              })}
            />
          )}
        </div>
      </main>
    </>
  );
}
