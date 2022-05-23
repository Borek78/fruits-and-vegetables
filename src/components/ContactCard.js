import person from "../images/person-circle.svg";
import trash from "../images/trash.svg";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  return (
    <div className="contactCard">
      <img src={person} alt="" className="person" />
      <div className="name-and-email">
        <div className="name-in-contact-card">{name}</div>
        <div>{email}</div>
      </div>
      <img
        src={trash}
        alt=""
        className="trash"
        onClick={() => {
          props.deleteContactHandler(id);
        }}
      />
    </div>
  );
}

export default ContactCard;
