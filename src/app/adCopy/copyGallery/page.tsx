import CopyGalleryPage from "@/components/adCopy/CopyGalleryPage";
import NOSSR from "@/components/common/NOSSR";
import Footer from "@/components/footer/Footer";

const CopyGallery = async () => {
  return (
    <NOSSR>
      <CopyGalleryPage />
      <Footer />
    </NOSSR>
  );
};

export default CopyGallery;
