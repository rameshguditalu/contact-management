import { Link } from 'react-router-dom';
import Contact from '../assets/contacts.png';
import ChartsAndMaps from '../assets/emerging-markets.png';

const Navbar = () => {
  return (
    <div className="relative flex flex-col bg-clip-border shadow-md bg-white text-gray-700 h-screen sticky top-0 w-full max-w-[15rem] p-4 border-x">
      {/* <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-gray-900">Contact Manager</h5>
      </div> */}
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        <Link to='/contacts' role="button" tabIndex={0} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <img src={Contact} width={30} height={30} alt="contacts" />
          </div>
          Contacts
        </Link>
        <Link to="/chartandmaps" role="button" tabIndex={0} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
            <img src={ChartsAndMaps} width={30} height={30} alt="chartsandmaps" />
          </div>
          Charts and Maps
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
