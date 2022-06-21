import { BaseRouter } from "./components/BaseRouter";
import { Menus } from "./components/Meus";
import { StyleComponent } from "./components/StyleComponent";
import { HomeWork, TodayMenu } from "./db";
import { GlobalStyled } from "./GlobalStyles";

const App = () => {
  return (
    <>
      <GlobalStyled />
      {/* <Menus menu={TodayMenu} /> */}
      {/* <StyleComponent work={HomeWork} /> */}
      <BaseRouter />
    </>
  );
};

export default App;
