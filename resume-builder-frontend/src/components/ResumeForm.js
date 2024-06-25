// ResumeForm.js


import React from 'react';
import "./ResumeForm.css"

const ResumeForm = ({ formData, setFormData }) => {
  const handleAboutChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (index, event, section) => {
    const { name, value } = event.target;
    const updatedSection = formData[section].map((item, idx) => 
      idx === index ? { ...item, [name]: value } : item
    );
    setFormData({ ...formData, [section]: updatedSection });
  };

  const handleAddItem = (section) => {
    setFormData({ ...formData, [section]: [...formData[section], {}] });
  };

  const handleRemoveItem = (index, section) => {
    const updatedSection = formData[section].filter((item, idx) => idx !== index);
    setFormData({ ...formData, [section]: updatedSection });
  };


  
  return (
    <>
    <div className='resume-form'>
      <section className='about-sc'>
      <div className="container">
        <div className="about-cnt">
          <form className="cv-form" id="cv-form">
            {/* About Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>about section</h3>
              </div>
              <div className="cv-form-row cv-form-row-about">
                <div className="cols-3">
                  <div className="form-elem">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input
                      name="firstname"
                      type="text"
                      className="form-control firstname"
                      value={formData.firstname}
                      onChange={handleAboutChange}
                      placeholder="e.g. John"
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="middlename" className="form-label">Middle Name <span className="opt-text">(optional)</span></label>
                    <input
                      name="middlename"
                      type="text"
                      className="form-control middlename"
                      value={formData.middlename}
                      onChange={handleAboutChange}
                      placeholder="e.g. Herbert"
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input
                      name="lastname"
                      type="text"
                      className="form-control lastname"
                      value={formData.lastname}
                      onChange={handleAboutChange}
                      placeholder="e.g. Doe"
                    />
                  </div>
                </div>

                <div className="cols-3">
                  <div className="form-elem">
                    <label htmlFor="image" className="form-label">Your Image</label>
                    <input
                      name="image"
                      type="file"
                      className="form-control image"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <input
                      name="designation"
                      type="text"
                      className="form-control designation"
                      value={formData.designation}
                      onChange={handleAboutChange}
                      placeholder="e.g. Sr. Accountant"
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                      name="address"
                      type="text"
                      className="form-control address"
                      value={formData.address}
                      onChange={handleAboutChange}
                      placeholder="e.g. Lake Street-23"
                    />
                  </div>
                </div>

                <div className="cols-3">
                  <div className="form-elem">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      name="email"
                      type="text"
                      className="form-control email"
                      value={formData.email}
                      onChange={handleAboutChange}
                      placeholder="e.g. johndoe@gmail.com"
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="phoneno" className="form-label">Phone No:</label>
                    <input
                      name="phoneno"
                      type="text"
                      className="form-control phoneno"
                      value={formData.phoneno}
                      onChange={handleAboutChange}
                      placeholder="e.g. 456-768-798"
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="summary" className="form-label">Summary</label>
                    <input
                      name="summary"
                      type="text"
                      className="form-control summary"
                      value={formData.summary}
                      onChange={handleAboutChange}
                      placeholder="e.g. Dedicated accountant with 5+ years of experience..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>achievements</h3>
              </div>
              <div className="row-separator repeater">
                <div className="repeater" data-repeater-list="achievements">
                  {formData.achievements.map((achievement, index) => (
                    <div key={index} data-repeater-item>
                      <div className="cv-form-row cv-form-row-achievement">
                        <div className="cols-2">
                          <div className="form-elem">
                            <label htmlFor={`achieve_title_${index}`} className="form-label">Title</label>
                            <input
                              name="achieve_title"
                              type="text"
                              className="form-control achieve_title"
                              value={achievement.achieve_title}
                              onChange={(e) => handleInputChange(index, e, 'achievements')}
                              placeholder="e.g. Employee of the Month"
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`achieve_description_${index}`} className="form-label">Description</label>
                            <input
                              name="achieve_description"
                              type="text"
                              className="form-control achieve_description"
                              value={achievement.achieve_description}
                              onChange={(e) => handleInputChange(index, e, 'achievements')}
                              placeholder="e.g. Recognized for outstanding performance..."
                            />
                          </div>
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => handleRemoveItem(index, 'achievements')}
                          >
                             <span></span>
                  <span></span>
                  <span></span>
                  <span></span>-
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem('achievements')}
                >
                  
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>+
                </button>
              </div>
            </div>

            {/* Experiences Section (Similar structure as Achievements) */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>experience</h3>
              </div>
              <div className="row-separator repeater">
                <div className="repeater" data-repeater-list="experiences">
                  {formData.experiences.map((experience, index) => (
                    <div key={index} data-repeater-item>
                      <div className="cv-form-row cv-form-row-experience">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label htmlFor={`exp_title_${index}`} className="form-label">Title</label>
                            <input
                              name="exp_title"
                              type="text"
                              className="form-control exp_title"
                              value={experience.exp_title}
                              onChange={(e) => handleInputChange(index, e, 'experiences')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`exp_organization_${index}`} className="form-label">Company / Organization</label>
                            <input
                              name="exp_organization"
                              type="text"
                              className="form-control exp_organization"
                              value={experience.exp_organization}
                              onChange={(e) => handleInputChange(index, e, 'experiences')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`exp_location_${index}`} className="form-label">Location</label>
                            <input
                              name="exp_location"
                              type="text"
                              className="form-control exp_location"
                              value={experience.exp_location}
                              onChange={(e) => handleInputChange(index, e, 'experiences')}
                            />
                          </div>
                        </div>
                        <div className="cols-3">
                          <div className="form-elem">
                            <label htmlFor={`exp_start_date_${index}`} className="form-label">Start Date</label>
                            <input
                              name="exp_start_date"
                              type="date"
                              className="form-control exp_start_date"
                              value={experience.exp_start_date}
                              onChange={(e) => handleInputChange(index, e, 'experiences')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`exp_end_date_${index}`} className="form-label">End Date</label>
                            <input
                              name="exp_end_date"
                              type="date"
                              className="form-control exp_end_date"
                              value={experience.exp_end_date}
                              onChange={(e) => handleInputChange(index, e, 'experiences')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`exp_description_${index}`} className="form-label">Description</label>
                            <input
                              name="exp_description"
                              type="text"
                              className="form-control exp_description"
                              value={experience.exp_description}
                              onChange={(e) => handleInputChange(index, e, 'experiences')}
                            />
                          </div>
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => handleRemoveItem(index, 'experiences')}
                          >
                            <span></span>
                  <span></span>
                  <span></span>
                  <span></span> -
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem('experiences')}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>+
                </button>
              </div>
            </div>

            {/* Education Section (Similar structure as Achievements and Experiences) */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>education</h3>
              </div>
              <div className="row-separator repeater">
                <div className="repeater" data-repeater-list="educations">
                  {formData.educations.map((education, index) => (
                    <div key={index} data-repeater-item>
                      <div className="cv-form-row cv-form-row-education">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label htmlFor={`edu_school_${index}`} className="form-label">School</label>
                            <input
                              name="edu_school"
                              type="text"
                              className="form-control edu_school"
                              value={education.edu_school}
                              onChange={(e) => handleInputChange(index, e, 'educations')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`edu_degree_${index}`} className="form-label">Degree</label>
                            <input
                              name="edu_degree"
                              type="text"
                              className="form-control edu_degree"
                              value={education.edu_degree}
                              onChange={(e) => handleInputChange(index, e, 'educations')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`edu_city_${index}`} className="form-label">City</label>
                            <input
                              name="edu_city"
                              type="text"
                              className="form-control edu_city"
                              value={education.edu_city}
                              onChange={(e) => handleInputChange(index, e, 'educations')}
                            />
                          </div>
                        </div>
                        <div className="cols-3">
                          <div className="form-elem">
                            <label htmlFor={`edu_start_date_${index}`} className="form-label">Start Date</label>
                            <input
                              name="edu_start_date"
                              type="date"
                              className="form-control edu_start_date"
                              value={education.edu_start_date}
                              onChange={(e) => handleInputChange(index, e, 'educations')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`edu_graduation_date_${index}`} className="form-label">Graduation Date</label>
                            <input
                              name="edu_graduation_date"
                              type="date"
                              className="form-control edu_graduation_date"
                              value={education.edu_graduation_date}
                              onChange={(e) => handleInputChange(index, e, 'educations')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`edu_description_${index}`} className="form-label">Description</label>
                            <input
                              name="edu_description"
                              type="text"
                              className="form-control edu_description"
                              value={education.edu_description}
                              onChange={(e) => handleInputChange(index, e, 'educations')}
                            />
                          </div>
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => handleRemoveItem(index, 'educations')}
                          >
                             <span></span>
                  <span></span>
                  <span></span>
                  <span></span>-
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem('educations')}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>+
                </button>
              </div>
            </div>

            {/* Projects Section (Similar structure as other sections) */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>projects</h3>
              </div>
              <div className="row-separator repeater">
                <div className="repeater" data-repeater-list="projects">
                  {formData.projects.map((project, index) => (
                    <div key={index} data-repeater-item>
                      <div className="cv-form-row cv-form-row-project">
                        <div className="cols-3">
                          <div className="form-elem">
                            <label htmlFor={`proj_title_${index}`} className="form-label">Project Name</label>
                            <input
                              name="proj_title"
                              type="text"
                              className="form-control proj_title"
                              value={project.proj_title}
                              onChange={(e) => handleInputChange(index, e, 'projects')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`proj_link_${index}`} className="form-label">Project link</label>
                            <input
                              name="proj_link"
                              type="text"
                              className="form-control proj_link"
                              value={project.proj_link}
                              onChange={(e) => handleInputChange(index, e, 'projects')}
                            />
                          </div>
                          <div className="form-elem">
                            <label htmlFor={`proj_description_${index}`} className="form-label">Description</label>
                            <input
                              name="proj_description"
                              type="text"
                              className="form-control proj_description"
                              value={project.proj_description}
                              onChange={(e) => handleInputChange(index, e, 'projects')}
                            />
                          </div>
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => handleRemoveItem(index, 'projects')}
                          >
                             <span></span>
                  <span></span>
                  <span></span>
                  <span></span>-
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem('projects')}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>+
                </button>
              </div>
            </div>

            {/* Skills Section (Similar structure as other sections) */}
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>skills</h3>
              </div>
              <div className="row-separator repeater">
                <div className="repeater" data-repeater-list="skills">
                  {formData.skills.map((skill, index) => (
                    <div key={index} data-repeater-item>
                      <div className="cv-form-row cv-form-row-skills">
                        <div className="form-elem">
                          <label htmlFor={`skill_${index}`} className="form-label">Skill</label>
                          <input
                            name="skill"
                            type="text"
                            className="form-control skill"
                            value={skill.skill}
                            onChange={(e) => handleInputChange(index, e, 'skills')}
                          />
                        </div>
                        {index > 0 && (
                          <button
                            type="button"
                            className="repeater-remove-btn"
                            onClick={() => handleRemoveItem(index, 'skills')}
                          >
                             <span></span>
                  <span></span>
                  <span></span>
                  <span></span>-
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="repeater-add-btn"
                  onClick={() => handleAddItem('skills')}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>+
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </section>
      </div>
      </>
  );
};

export default ResumeForm;
