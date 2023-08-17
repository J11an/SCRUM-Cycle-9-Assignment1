import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/react";
import "./ExploreContainer.css";
import { Link } from "react-router-dom";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clothing Webstore</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="home-container">
          <section className="welcome-message">
            <h2>Welcome to Our Clothing Webstore</h2>
            <p>Discover the latest trends and styles in fashion.</p>
          </section>
          <section className="products-header">
            <h2>Our Products</h2>
            <p>
              Explore our diverse collection of high-quality clothing and
              accessories that cater to every style and occasion.
            </p>
            <Link to="/products">
              <IonButton color="primary">Browse Products</IonButton>
            </Link>
          </section>
          <section className="about-us">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing high-quality clothing and
              accessories that reflect your unique style and personality.
            </p>
            <Link to="/about">
              <IonButton color="primary">Learn More</IonButton>
            </Link>
          </section>
          <section className="contact-us">
            <h2>Contact Us</h2>
            <p>
              Have questions or feedback? Feel free to reach out to our customer
              support team.
            </p>
          </section>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExploreContainer;
