import React from 'react';
import './Card.css';

import ToggleButton from '../ToggleButton/ToggleButton';

interface CardProps {
    title: string;
    image: string;
    description: string;
}

const Card: React.FC<CardProps> =  ({ title, image, description }) => {
    return (
        <section className="card">
            <img src={ image } alt={title} />
            <h2>{ title }</h2>
            <p>{ description }</p>
            <ToggleButton />
        </section>
    );
};

export default Card;