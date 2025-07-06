'use client';

import HeroSection from '@/components/Home/heroSection/HeroSection'
import Metrics from '@/components/Home/metrics/Metrics'
import ImageText from '@/components/Layouts/imageText'
import { imageTextSections } from '@/constant/Home';
import { useRouter } from 'next/navigation';

const Contact = () => {

  const router = useRouter();

  return (
    <div>
      <HeroSection />
      <Metrics />
      <div>
        {imageTextSections.map((section, index) => (
          <ImageText
            key={index}
            imageSrc={section.imageSrc}
            title={section.title}
            description={section.description}
            buttonText={section.buttonText}
            imagePosition={section.imagePosition}
            buttonLink={section.buttonLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Contact
