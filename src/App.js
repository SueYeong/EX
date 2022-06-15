import { Menus } from "./components/Meus";
import { TodayMenu } from "./db";

const App = () => {
  return (
    <>
      <Menus menu={TodayMenu} />
    </>
  );
};

export default App;
