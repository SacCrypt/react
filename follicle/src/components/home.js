import woman_wall from "../static/images/woman_wall.jpg";
import haircut from "../static/images/haircut.jpeg";
import man_wall from "../static/images/man_wall.jpeg";
import stylist from "../static/images/stylist.jpg";
import products from "../static/images/products.png";
import specialist from "../static/images/specialist.jpg";
import hairgame from "../static/images/hairgame.jpeg";
import logo from "../static/images/Logo.png";
import "../static/css/home.css";

const Home = () => {
  return (
    <>
      {" "}
      <div className="wallpaper">
        <link
          href="https://fonts.googleapis.com/css?family=Lobster"
          rel="stylesheet"
        ></link>
        {/* When window height change */}
        <img src={woman_wall} alt="woman hair wallpaper" />
        <img id="logo" src={logo} alt="logo" />
        <img id="man_wall" src={man_wall} alt="man hair wallpaper" />
      </div>
      <div className="alternate">
        <div>
          <p>
            Need a Haircut? Book an <a href="/#"> appointment </a> with us in a
            nearest hair salon to you.
          </p>
          <img src={haircut} alt="Hair-cut" />
        </div>
        <div>
          <p>
            Style your hair just the way you want with a professional{" "}
            <a href="/#"> Hair Dresser.</a>
          </p>
          <img src={stylist} alt="H-Dresser" />
        </div>
        <div>
          <p>
            Skim through your hair with <a href="/#">Hair products </a> that
            provide your hair everything they need.
          </p>
          <img src={products} alt="Product" />
        </div>
        <div>
          <p>
            Dealing with hair loss? Contact an <a href="/#"> Expert </a> and
            find out the exact root of your hair-loss.
          </p>
          <img src={specialist} alt="Specialist" />
        </div>
        <div>
          <p>
            Not sure what do you need ? Checkout the{" "}
            <a href="/#"> Virtual hair </a> page.
          </p>
          <img src={hairgame} alt="VHG" />
        </div>
      </div>
    </>
  );
};

export default Home;
