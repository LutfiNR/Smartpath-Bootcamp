import React from 'react';
import ContactForm from '../Fragments/ContactForm'; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Headline from '../Elements/Headline';
import { motion } from 'framer-motion';

interface IContactInfo {
  location: string;
  phone: string;
  email: string;
  github: string;
}

const ContactPage: React.FC = () => {
  const contactInfo: IContactInfo = {
    location: 'Rowokele, Kebumen, Jawa Tengah',
    phone: '+62 4343-4343-5673',
    email: 'lutfinurrohman5@gmail.com',
    github: 'https://github.com/LutfiNR'
  };

  return (
    <div className="container mx-auto p-4 h-screen">
        <div className="flex justify-center">
        <Headline
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center inline-block"
        >
          Contact
        </Headline>
      </div>
      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring",delay: 0.3 }}
      className='flex flex-col md:flex-row w-full justify-between mt-4'
      >
      <div className="space-y-4 mb-8 text-primary">
        <div className="flex items-center text-xl md:text-2xl">
          <div className='outline-dashed w-10 h-10 p-2 flex justify-center items-center shadow-primary-lg'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          </div>
          <span className='ml-6'>{contactInfo.location}</span>
        </div>
        <div className="flex items-center text-xl md:text-2xl">
        <div className='outline-dashed w-10 h-10 p-2 flex justify-center items-center shadow-primary-lg'>
          <FontAwesomeIcon icon={faPhone} />
          </div>
          <span className='ml-6'>{contactInfo.phone}</span>
        </div>
        <div className="flex items-center text-xl md:text-2xl">
        <div className='outline-dashed w-10 h-10 p-2 flex justify-center items-center shadow-primary-lg'>
          <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <a href={`mailto:${contactInfo.email}`} className='ml-6'>{contactInfo.email}</a>
        </div>
        <div className="flex items-center text-xl md:text-2xl">
        <div className='outline-dashed w-10 h-10 p-2 flex justify-center items-center shadow-primary-lg'>
          <FontAwesomeIcon icon={faGithub} />
          </div>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className='ml-6'>{contactInfo.github}</a>
        </div>
      </div>
      <ContactForm />
      </motion.div>
    </div>
  );
};

export default ContactPage;
