'use client'

import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardImage from '../components/CardImage';
import CardHeader from '../components/CardHeader';
import CardBody from '../components/CardBody';
import Button from '../components/Button';

const cardsData = [
   {
      id: 1,
      imageSrc: 'https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg',
      altText: 'Card 1',
      title: 'Heading 1',
      buttonText: 'Button 1',
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam vel sapien imperdiet viverra sit amet aliquet quam.',
   },
   {
      id: 2,
      imageSrc: 'https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg',
      altText: 'Card 2',
      title: 'Heading 2',
      buttonText: 'Button 2',
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam vel sapien imperdiet viverra sit amet aliquet quam.',
   },
   {
      id: 3,
      imageSrc: 'https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg',
      altText: 'Card 3',
      title: 'Heading 3',
      buttonText: 'Button 3',
      bodyText:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam vel sapien imperdiet viverra sit amet aliquet quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas convallis purus eget feugiat interdum. Duis ligula velit, aliquet blandit nunc a, faucibus luctus lorem.',
   },
];

const HeroLayout = () => {
   const [selectedCard, setSelectedCard] = useState(2);

   useEffect(() => {
      // Apply border to the middle card on load
      setSelectedCard(2);
   }, []);

   const handleCardClick = (cardId) => {
      setSelectedCard(cardId);
   };

   return (
      <div className="main">
         <div className="hero-background">
            <div className="hero-layout">
               {<img src="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg" alt="" />}
               <br />
               <div className="cards-container">
                  {cardsData.map((card) => (
                     <Card key={card.id} className={selectedCard === card.id ? 'selected' : ''}
                     >
                        <CardImage src={card.imageSrc} alt={card.altText} />
                        <CardHeader title={card.title} />
                        <CardBody>{card.bodyText}</CardBody>
                        <Button onClick={() => handleCardClick(card.id)}>
                           {card.buttonText}
                        </Button>
                     </Card>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroLayout;
