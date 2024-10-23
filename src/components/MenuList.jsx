import SingleMenu from "./SingleMenu";

const MenuList = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        return <SingleMenu key={item.id} {...item} />;
      })}
    </div>
  );
};
export default MenuList;
