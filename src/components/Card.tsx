import React from 'react';
import Button from './Button';

interface CardProps {
  title: string;
  image: string;
  description: string;
}
const Card: React.FC<CardProps> = ({ title, image, description }) => {
  return (
    <section className="grid grid-rows-[auto_1fr_auto] min-h-[500px] max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-5">{description}</p>
      </div>
      <div className="p-4 pt-0">
        <Button
          text="Click me"
          type="primary"
          onClick={() => console.log('Button clicked')}
        />
      </div>
    </section>
  );
};

export default Card;
