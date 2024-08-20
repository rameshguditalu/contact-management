import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/addcontact");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="w-full bg-aliceblue flex flex-col md:flex-row">
        <Navbar />
        <main className="flex basis-4/5 flex-col items-center h-full w-full overflow-auto">
          <div className="flex justify-center w-full h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default App;
