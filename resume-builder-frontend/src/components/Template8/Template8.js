import { BsEnvelope, BsFillGeoAltFill, BsFillTelephoneFill, BsBookHalf, BsAwardFill } from "react-icons/bs";
import React from 'react';
import styles from './Template8.module.css';

const Template8 = ({ formData }) => (
  <div className={styles.template8}>
    <div className={styles.header}>
      <h1>{formData.firstname} {formData.middlename} {formData.lastname}</h1>
      <p>{formData.designation}</p>
      <div className={styles.contact}>
        <p><BsEnvelope /> {formData.email}</p>
        <p><BsFillTelephoneFill /> {formData.phoneno}</p>
        <p><BsFillGeoAltFill /> {formData.address}</p>
      </div>
    </div>
    <div className={styles.main}>
      <div className={styles.leftColumn}>
        <div className={styles.profile}>
          {formData.image && <img src={formData.image} alt="Profile" />}
        </div>
        <div className={styles.skills}>
          <h3>Skills</h3>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill.skill}</li>
            ))}
          </ul>
        </div>
        <div className={styles.projects}>
        <h3>Projects</h3>
        <ul>
          {formData.projects.map((proj, index) => (
            <li key={index}>
              <h4>{proj.proj_title}</h4>
              <p>{proj.proj_link}</p>
              <p>{proj.proj_description}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.education}>
          <h3><BsBookHalf /> Education</h3>
          <ul>
            {formData.educations.map((edu, index) => (
              <li key={index}>
                <h4>{edu.edu_degree} from {edu.edu_school}</h4>
                <p>{edu.edu_city}</p>
                <p>{edu.edu_start_date} - {edu.edu_graduation_date}</p>
                <p>{edu.edu_description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.achievements}>
          <h3><BsAwardFill /> Achievements</h3>
          <ul>
            {formData.achievements.map((ach, index) => (
              <li key={index}>
                <h4>{ach.achieve_title}</h4>
                <p>{ach.achieve_description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.experience}>
        <h3>Experience</h3>
            <ul>
                {formData.experiences.map((exp, index) => (
                    <li key={index}>
                        <h4>{exp.exp_title} at {exp.exp_organization}</h4>
                        <p>{exp.exp_location}</p>
                        <p>{exp.exp_start_date} - {exp.exp_end_date}</p>
                        <p>{exp.exp_description}</p>
                    </li>
                ))}
            </ul>
      </div>
      </div>
    </div>
  </div>
);

export default Template8;
