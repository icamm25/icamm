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
    <div id='#past_conference' className="accordion">
        <h1 className='technical-title'>Previous Editions</h1>
      {items.map((item, index) => renderContent(item, index))}
    </div>
  );
};

const Accord = () => {
  const accordionItems = [
    {
      title: 'ICAMM 2023',
      images: ['/23_01.jpg','/23_02.JPG','/23_03.jpeg','/23_04.JPG'],
    },
    {
        title: 'ICAMM 2021',
        images: ['/21_01.png','/21_02.jpeg','/21_03.jpeg','/21_04.jpeg','/21_05.jpeg'],
      },
    {
      title: 'ICAMM 2018',
      images: ['/18_01.jpg', '/18_02.jpg', '/18_03.jpg', '/18_04.jpg', '/18_05.jpg', '/18_06.jpg'],
    },
    
      {
        title: 'ICAMM 2016',
        images: ['/16_01.jpg', '/16_02.jpg', '/16_03.jpg', '/16_04.jpg', '/16_05.jpg', '/16_06.jpg'],
      },
      {
        title: 'ICAMM 2014',
        images: ['/14_01.jpg', '/14_02.jpg', '/14_03.jpg', '/14_04.jpg', '/14_05.jpg', '/14_06.jpg'],
      },
  ];

  return (
    <div className='acc-container'>
      <Accordion items={accordionItems} />;
    </div>
  
  )
};

export default Accord;
