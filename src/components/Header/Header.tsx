import { Layout } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
   const { Header } = Layout;

   return (
      <Header
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "52px",
            backgroundColor: "transparent",
            height: "80px",
         }}
      >
         <Link style={{ color: "#000", fontSize: "18px" }} to="/">
            Главная
         </Link>
         <Link style={{ color: "#000", fontSize: "18px" }} to="/catalog">
            Каталог нейросетей
         </Link>
      </Header>
   );
};

export default Header;
