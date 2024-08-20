import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  deleteContact,
  selectContact,
} from "../store/contactSlice";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(selectContact);
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id: string) => {
    navigate('/contact-save', { state: id })
  };

  return (
    <div className="flex flex-wrap mx-8 gap-4">
      {contacts.map((contact) => (
        <Card contact={contact} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ContactList;
