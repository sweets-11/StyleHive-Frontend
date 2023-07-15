import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import MainCarousel from "./MainCarousel";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <MainCarousel />
      <ShoppingList />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;