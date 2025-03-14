import Header from "../components/MainHeader/Header";
import { useNavigate } from "react-router-dom";
import SearchInput from "../components/SearchInput/SearchInput";
import ShopFilter from "../components/ShopFilter/ShopFilter";
import ShopList from "../components/ShopList/ShopList";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/linkpost");
  };
  return (
    <>
      <Header buttonName="생성하기" onButtonClick={handleButtonClick} />
      <SearchInput />
      <ShopFilter />
      <ShopList />
    </>
  );
};

export default Home;
