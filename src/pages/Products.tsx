import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Products.css";
import ProductCard from "../components/ProductCard";

const productsList = [
  {
    product_id: 0,
    image: "tshirt.jpg",
    title: "T-Shirt",
    price: 15.99,
    product_details:
      "A comfortable and stylish black T-shirt made from high-quality cotton.",
  },
  {
    product_id: 1,
    image: "shorts.webp",
    title: "Shorts",
    price: 24.99,
    product_details:
      "Casual navy cotten shorts, perfect for a relaxed summer look.",
  },
  {
    product_id: 2,
    image: "hat.webp",
    title: "Hat",
    price: 9.99,
    product_details: "A stylish canvas hat that provides great sun protection.",
  },
  {
    product_id: 3,
    image: "sneakers.webp",
    title: "Shoes",
    price: 49.99,
    product_details:
      "Trendy white sneakers made from high-quality synthetic leather.",
  },
];

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>
        {productsList.map((product) => (
          <ProductCard
            key={product.product_id}
            imageSrc={product.image}
            cardTitle={product.title}
            cardPrice={product.price}
            cardContent={product.product_details}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Products;
