import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { addContact, editContact, selectContact } from "../store/contactSlice";

const inputStyle =
  "bg-white ml-2 border rounded py-2 px-2 shadow-sm focus:outline-none focus:border-aliceblue focus:black focus:ring-2";
const radioStyle =
  "checked:bg-blue-500 pointer required:border-red-500 valid:border-green-500 invalid:border-red-500 mr-2";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const contacts = useAppSelector(selectContact);
  const location = useLocation();

  const edidtContact = contacts.find((contact) => contact.id === location.state)

  const [formData, setFormData] = useState({
    fName: edidtContact?.fName ?? '',
    lName: edidtContact?.lName ?? '',
    isActive: edidtContact?.isActive ?? 'Active',
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, isActive: value === "Active" ? 'Active' : 'InActive' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fName && formData.lName) {
      dispatch(edidtContact ? editContact({
        id: edidtContact.id,
        fName: formData.fName,
        lName: formData.lName,
        isActive: formData.isActive
      }) :
        addContact({
          id: Date.now().toString(),
          ...formData,
          fName: formData.fName,
          lName: formData.lName,
          isActive: formData.isActive
        })
      );
      setFormData({ fName: "", lName: "", isActive: 'Active' });
      navigate("/contacts");
    }
  };

  return (
    <div className="mt-10 bg-darkseagreen pl-24 pr-24 pt-10 drop-shadow-lg max-w-screen-sm h-80 border-2">
      <form
        action="/contacts"
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <h2 className="self-center text-3xl font-cursive text-black">
          {edidtContact ? 'Edit Contact Screen' : 'Create Contact Screen'}
        </h2>
        <div>
          <label htmlFor="fName" className="text-2xl">First Name:</label>
          <input
            id="fName"
            type="text"
            name="fName"
            placeholder="Enter your first name!"
            value={formData.fName}
            onChange={handleInputChange}
            className={inputStyle}
            maxLength={15}
          />
        </div>
        <div>
          <label htmlFor="lName" className="text-2xl mr-0.5">Last Name:</label>
          <input
            id="lName"
            type="text"
            name="lName"
            placeholder="Enter your last name!"
            value={formData.lName}
            onChange={handleInputChange}
            className={inputStyle}
            maxLength={15}
          />
        </div>
        <div className="flex justify-evenly">
          <label className="text-2xl">Status:</label>
          <label className="p-2 cursor-auto">
            <input
              type="radio"
              name="isActive"
              value="Active"
              checked={formData.isActive === 'Active'}
              onChange={handleRadioChange}
              className={radioStyle}
            />
            Active
          </label>
          <label className="p-2 cursor-auto">
            <input
              type="radio"
              name="isActive"
              value="InActive"
              checked={formData.isActive === 'InActive'}
              onChange={handleRadioChange}
              className={radioStyle}
            />
            Inactive
          </label>
        </div>
        <button
          type="submit"
          className="ml-20 w-1/2 bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 rounded flex justify-center items-center"
        >
          {edidtContact ? 'Save Editted Contact' : 'Save Contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
