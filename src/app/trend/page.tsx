import NOSSR from "@/components/common/NOSSR";
import Footer from "@/components/footer/Footer";
import TrendPage from "@/components/trend/TrendPage";

const Trend = async () => {
  return (
    <NOSSR>
      <TrendPage />
      <Footer />
    </NOSSR>
  );
};

export default Trend;
