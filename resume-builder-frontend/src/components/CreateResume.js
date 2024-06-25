import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import LivePreview from './LivePreview';
import TemplateSelection from './TemplateSelection';
import { BsBrushFill,BsEyeFill  } from "react-icons/bs";

import Modal from 'react-modal';
import "./CreateResume.css";
import Welcome from './welcome';

Modal.setAppElement('#root'); // To avoid accessibility issues

const CreateResume = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    image: '',
    designation: '',
    address: '',
    email: '',
    phoneno: '',
    summary: '',
    achievements: [],
    experiences: [],
    educations: [],
    projects: [],
    skills: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setIsModalOpen(false); // Close the modal after selection
  };

  return (
    <>
      <nav>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">ResumeBuilder</label>
      </nav>

      <div className="create-resume-container">
        
        <div className="welcome"><Welcome/>
       <button onClick={() => setIsModalOpen(true)}><span></span>
       <span></span>
       <span></span>
       <span></span>
       SEE TEMPLATES</button>
       </div>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Select a Template"
          className="Modal"
          overlayClassName="Overlay"
        >
          <TemplateSelection handleTemplateSelect={handleTemplateSelect} />
        </Modal>
        <div className="flex-container">
          <div className="element1">
            <h3><BsBrushFill />FILL YOUR DETAILS BELOW</h3>
            <ResumeForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="element2">
            <div className="live-preview">
              <h3 className='LPh3'><BsEyeFill /> LIVE PREVIEW</h3>
              <LivePreview template={selectedTemplate} formData={formData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResume;
