import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hook";
import { selectContact } from "../store/contactSlice";

const buttonStyle =
  "bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded";

const CreateContact = () => {
  const contacts = useAppSelector(selectContact);
  return (
    <div className="flex flex-col items-center p-4 text-center gap-4">
      <Link to="/contact-save">
        <button className={buttonStyle}>Create Contact</button>
      </Link>
      {contacts.length === 0 && (
        <p>No Contact found. Please add contact from create contact button</p>
      )}
    </div>
  );
};

export default CreateContact;
