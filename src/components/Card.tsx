import { Contact } from "../store/contactSlice"
import Profile_Img from '../assets/images.jpg'
type props = {
    contact: Contact;
    onEdit: (e: string) => void;
    onDelete: (e: string) => void;
}

const Card = ({ contact, onEdit, onDelete }: props) => {
    return (
        <div className="rounded overflow-hidden shadow-xl p-2 w-1/4">
            <img width={100} height={100} src={Profile_Img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{`${contact.fName} ${contact.lName}`}</div>
                <p className="text-gray-700 text-base">
                    Status : {contact.isActive}
                </p>
            </div>
            <div className="flex justify-around">
                <button onClick={() => onEdit(contact.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Edit
                </button>
                <button onClick={() => onDelete(contact.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Delete
                </button>

            </div>
        </div>
    )
}

export default Card