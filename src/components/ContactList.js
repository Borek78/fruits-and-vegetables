import ContactCard from "./ContactCard";

function ContactList(props) {
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        key={contact.id}
        contact={contact}
        deleteContactHandler={props.deleteContactHandler}
      />
    );
  });

  console.log(renderContactList);
  return (
    <div>
      <div>{renderContactList}</div>
    </div>
  );
}

export default ContactList;
