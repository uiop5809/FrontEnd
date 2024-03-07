import NOSSR from "@/components/common/NOSSR";
import Footer from "@/components/footer/Footer";
import MainPage from "@/components/main/MainPage";

const Main = async () => {
  return (
    <NOSSR>
      <MainPage />
      <Footer />
    </NOSSR>
  );
};

export default Main;
