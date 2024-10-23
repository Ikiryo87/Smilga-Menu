import { useState } from "react";

import MenuList from "./components/MenuList";
import Title from "./components/Title";
import data from "./data";
import Categories from "./components/Categories";

// OLD
// const tempCat = data.map((menu) => menu.category);
// const tempSet = new Set(tempCat);
// // console.log(tempSet);
// const tempItems = ["all", ...tempSet];
// // console.log(tempItems);

const allCat = ["all", ...new Set(data.map((menu) => menu.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCat);

  const filterMenu = (category) => {
    // console.log(category);
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenuList = data.filter((item) => item.category === category);
    setMenu(newMenuList);
  };

  return (
    <main>
      <section className="menu">
        <Title menu={menu} />
        <Categories categories={categories} filterMenu={filterMenu} />
        <MenuList menu={menu} />
      </section>
    </main>
  );
};
export default App;
