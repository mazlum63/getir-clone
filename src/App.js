import Navbar from "./components/navbar/Navbar";
import LoginOrSingup from "./components/loginOrSignup/LoginOrSignup";
import Categories from "./components/categories/Categories";
import Campaigns from "./components/campaign/Campaigns";
import Favorites from "./components/favosites/Favorites";
import MobileApp from "./components/mobileApp/MobileApp";
import Carts from "./components/carts/Carts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <LoginOrSingup />
            <Categories />
            <Campaigns />
            <Favorites />
            <MobileApp />
            <Carts />
            <Footer />
        </div>
    );
}

export default App;
