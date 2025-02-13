import React, { useState } from 'react';
import CommonModal from './commonModal';
import ContactUsModal from './contactUsModal';

const Footer: React.FC = () => {
  const [contactUsModal, setContactUsModal] = useState(false);


  return (
    <footer className="bg-black text-white py-10 ">
      <div className="container mx-auto px-5 lg:px-2 sm:w-3/4">
        {/* Top Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-8  grow">
          <div className="text-center md:text-left">
            {/* <hr className="hidden mt-8 mb-8" /> */}
            {/* <h2 className="text-xl sm:text-4xl font-bold mb-3">Book a Demo with Us</h2> */}
            <p className="text-sm font-semibold text-gray-400"> <span>Zaman &copy; 2024, All rights reserved.</span></p>
          </div>
          <div className="flex gap-2" onClick={() => setContactUsModal(true)}>
            <button className="bg-customGreen text-white rounded-md px-4 py-2 font-semibold hover:bg-customBlue">
              Contact Us
            </button>
          </div>
        </div>


        
      </div>
      {contactUsModal && <div>
        <CommonModal
          visible={contactUsModal}
          onCancel={() => setContactUsModal(false)}
          width='400px'
        >
          <ContactUsModal onCancel={() => setContactUsModal(false)} />
        </CommonModal>

      </div>
      }
    </footer>
  );
};

export default Footer;
