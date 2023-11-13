import "./info-contacts.css";

import { ContactsMap } from "./contacts-map/contacts-map";
import { Contacts } from "./contacts/contacts";

export const InfoContacts = () => {
  return (
    <div className="info-contacts-container">
      <div className="info-contacts">
        <ContactsMap />
        <Contacts />
      </div>
    </div>
  );
};
