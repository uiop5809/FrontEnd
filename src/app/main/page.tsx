import MainPage from "@/components/main/MainPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kobaco AISAC",
  description: "Kobaco Ai analysis System for Ad Creation",
};

const Main = async () => <MainPage />;

export default Main;
