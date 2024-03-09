import NOSSR from "@/components/common/NOSSR";
import Footer from "@/components/footer/Footer";
import ItemPage from "@/components/trend/ItemPage";

const Item = async () => {
  return (
    <NOSSR>
      <ItemPage />
      <Footer />
    </NOSSR>
  );
};

export default Item;
