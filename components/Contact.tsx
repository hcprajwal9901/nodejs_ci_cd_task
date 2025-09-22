
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-primary">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-text-secondary text-lg mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <a 
          href="mailto:hcprajwal9901@gmail.com"
          className="inline-block bg-accent text-white font-bold py-4 px-10 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-accent/20 text-lg"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;
