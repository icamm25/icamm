import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/accordion.css'; // Import the CSS file

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display three images at a time by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Display two images at a time for screens smaller than 1024px
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Display one image at a time for screens smaller than 768px
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  const onItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderContent = (item, index) => {
    const isActive = activeIndex === index;
    const accordionContentClass = `accordion-content ${isActive ? 'active' : ''}`;

    return (
      <div key={index} className="accordion-item">
        <div className="accordion-header" onClick={() => onItemClick(index)}>
          {item.title}
        </div>
        <div className={accordionContentClass}>
          <Slider {...settings}>
            {item.images.map((image, imageIndex) => (
              <div key={imageIndex} className='past'>
                <img src={image} alt={`Image ${imageIndex + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  };

  return (
    <div className="accordion">
        <h1 className='technical-title'>Previous Editions</h1>
      {items.map((item, index) => renderContent(item, index))}
    </div>
  );
};

const Accord = () => {
  const accordionItems = [
    {
      title: 'ICAMM 2023',
      images: ['/23_01.jpg','/23_01.jpg'],
    },
    {
        title: 'ICAMM 2021',
        images: ['/21_01.PNG','/21_01.PNG'],
      },
    {
      title: 'ICAMM 2018',
      images: ['/18_01.JPG', '/18_02.JPG', '/18_03.JPG', '/18_04.JPG', '/18_05.JPG', '/18_06.JPG'],
    },
    
      {
        title: 'ICAMM 2016',
        images: ['/16_01.JPG', '/16_02.JPG', '/16_03.JPG', '/16_04.JPG', '/16_05.JPG', '/16_06.JPG'],
      },
      {
        title: 'ICAMM 2014',
        images: ['/14_01.jpg', '/14_02.JPG', '/14_03.JPG', '/14_04.JPG', '/14_05.JPG', '/14_06.JPG'],
      },
  ];

  return <Accordion items={accordionItems} />;
};

export default Accord;
