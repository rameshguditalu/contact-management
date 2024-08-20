
const Header = () => {
    return (
        <header className="header sticky top-0 flex items-center justify-center bg-gray-100 h-14 border-y">
            <h1 className="w-3/12 flex items-center justify-center">
                {location.pathname === "/contacts"
                    ? "Contact Page"
                    : location.pathname === "/chartandmaps"
                        ? "Charts And Maps"
                        : "Contact Page"}
            </h1>
        </header>
    )
}

export default Header