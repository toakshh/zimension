import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Body = () => {
  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      <Menu />
      <Main />
      <Sidebar />
    </div>
  );
};

export default Body;
