import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './TemplateSelection.css';

const templates = [
  { id: 'template1', src: './images/templates/template1.jpg' },
  { id: 'template2', src: './images/templates/template2.jpg' },
  { id: 'template3', src: './images/templates/template3.jpg' },
  { id: 'template4', src: './images/templates/template4.jpg' },
  { id: 'template5', src: './images/templates/template5.jpg' },
  { id: 'template6', src: './images/templates/template6.jpg' },
  { id: 'template7', src: './images/templates/template7.jpg' },
  { id: 'template8', src: './images/templates/template8.jpg' },
  { id: 'template9', src: './images/templates/template9.jpg' },
  { id: 'template10', src: './images/templates/template10.jpg'}
];

const TemplateSelection = ({ handleTemplateSelect }) => {
  return (
    <div className="template-selection">
      <Carousel showThumbs={false}    showStatus={false} onClickItem={(index) => handleTemplateSelect(templates[index].id)}>
        {templates.map(template => (
          <div key={template.id}>
            <img src={template.src} alt={`Template ${template.id}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TemplateSelection;
