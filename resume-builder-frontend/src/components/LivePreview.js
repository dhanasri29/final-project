// LivePreview.js
import { BsChevronDoubleRight } from "react-icons/bs";
import React from 'react';
import "./LivePreview.css"
import DownloadPDF from './DownloadPDF';
import Template1 from './Template1/Template1';
import Template2 from './Template2/Template2';
import Template3 from './Template3/Template3';
import Template4 from './Template4/Template4';
import Template5 from './Template5/Template5';
import Template6 from './Template6/Template6';
import Template7 from './Template7/Template7';
import Template8 from './Template8/Template8';
import Template9 from './Template9/Template9';
import Template10 from './Template10/Template10';

const templateComponents = {
  template1: Template1,
  template2: Template2,
  template3: Template3,
  template4: Template4,
  template5: Template5,
  template6: Template6,
  template7: Template7,
  template8: Template8, 
  template9: Template9,
  template10: Template10


};

const LivePreview = ({ template, formData }) => {
  const TemplateComponent = templateComponents[template];

  return (
    <>
    <div id="resume-preview">
      {TemplateComponent ? <TemplateComponent formData={formData} /> : <p>Please select a template.</p>}
    </div>
    <br></br>
    <div className='PDF'>AFTER EDITING DOWNLOAD HERE<BsChevronDoubleRight /> <DownloadPDF/></div>
    </>
  );
};

export default LivePreview;
