import React from 'react';
import Button from './Button';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <section className="flex flex-col items-center gap-1 w-3xs bg-white shadow-md rounded-md p-4">
      <img
        className="w-full h-48 object-cover rounded-md"
        src={image}
        alt={title}
      />
      <div className="flex flex-col items-start w-full gap-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Button
        text="Click me"
        type="primary"
        onClick={() => console.log('Button clicked')}
      />
    </section>
  );
};

export default Card;
