import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Main>
        <h1>Hello Everyone this is the landing page</h1>
      </Main>
      <Footer />
    </>
  );
}
