import { Menus } from "./components/Meus";
import { StyleComponent } from "./components/StyleComponent";
import { HomeWork, TodayMenu } from "./db";

const App = () => {
  return (
    <>
      {/* <Menus menu={TodayMenu} /> */}
      <StyleComponent work={HomeWork} />
    </>
  );
};

export default App;
