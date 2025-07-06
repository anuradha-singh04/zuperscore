'use client';

import React from 'react';
import CommonButton from './commonButton';

interface ImageTextProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
  imagePosition?: 'left' | 'right';
  onButtonClick?: () => void;
  buttonLink?: string;
}

const ImageText: React.FC<ImageTextProps> = ({
  imageSrc,
  title,
  description,
  buttonText,
  imagePosition = 'left',
  onButtonClick,
  buttonLink,
}) => {
  const isImageLeft = imagePosition === 'left';

  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-12 py-8 px-4 md:px-16">
      <div className={`w-full md:w-1/2 ${isImageLeft ? '' : 'md:order-2'}`}>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto rounded-lg object-cover shadow-md"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 text-left">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <CommonButton
          text={buttonText}
          href={buttonLink}
          onClick={onButtonClick}
          className="btn-primary w-[130px]"
        />
      </div>
    </div>
  );
};

export default ImageText;
