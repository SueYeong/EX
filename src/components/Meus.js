export const Menus = ({ menu }) => {
  return (
    <>
      <ul>
        <h1>오늘의 메뉴</h1>
        <h3>선택사항</h3>
        <li>
          오늘의 메뉴는 {menu[0].menu} 사이드는 {menu[0].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[1].menu} 사이드는 {menu[1].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[2].menu} 사이드는 {menu[2].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[3].menu} 사이드는 {menu[3].side}
        </li>
        <li>
          오늘의 메뉴는 {menu[4].menu} 사이드는 {menu[4].side}
        </li>
        <h3>고르든지 말들지</h3>
      </ul>
    </>
  );
};
