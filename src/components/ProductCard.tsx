import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import "./ProductCard.css";

function Example(props: {
  imageSrc: any;
  cardTitle: any;
  cardPrice: any;
  cardContent: any;
}) {
  const { imageSrc, cardTitle, cardPrice, cardContent } = props;
  return (
    <div className="centered-container">
      <IonCard>
        <img alt="Card" src={imageSrc} className="productImg" />
        <IonCardHeader>
          <IonCardTitle>{cardTitle}</IonCardTitle>
          <IonCardSubtitle>${cardPrice}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>{cardContent}</IonCardContent>
      </IonCard>
    </div>
  );
}
export default Example;
