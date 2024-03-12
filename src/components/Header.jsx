import { Button, Flex } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setTeheme } from "./redux/slices/slice";

const Header = () => {
  const dispatch = useDispatch();
  const { is_dark_theme } = useSelector((state) => state.theme);
  console.log(is_dark_theme);

  const handleTheme = () => {
    dispatch(setTeheme());
  };
  return (
    <div
      style={{
        backgroundColor: is_dark_theme ? "rgb(55, 53, 53)" : "dimgrey",
      }}
    >
      <Flex justify="space-between">
        <h2>Redux Crud</h2>
        <Button
          onClick={handleTheme}
          style={{ marginTop: "25px" }}
          type="primary"
        >
          Temayı değiş
        </Button>
      </Flex>
    </div>
  );
};

export default Header;
