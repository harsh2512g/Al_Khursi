import React, { useState } from 'react';
import CommonModal from './commonModal';
import ContactUsModal from './contactUsModal';
import Link from 'next/link';
const Footer: React.FC = () => {
  const [contactUsModal, setContactUsModal] = useState(false);


  return (
    <footer className="bg-black text-white py-10 ">
      <div className="container mx-auto px-5 lg:px-2 sm:w-3/4">
        {/* Top Section */}
        <div>
          <p className='font-semibold'>Contact Us</p>
          <div>
            <span className='text-sm font-semibold'>Headquarters: </span>
            <span className='text-sm font-semibold text-gray-400'>Al Khursi UAE, Dubai, Business Bay, Za’abeel, Marasi Drive Street, 98, Office 209</span>
          </div>
          <div>
            <span className='text-sm font-semibold'>📞 Phone: </span>
            <span className='text-sm font-semibold text-gray-400'>+7 778 602 2281</span>
          </div>
          <div>
            <span className='text-sm font-semibold'>Email: </span>
            <span className='text-sm font-semibold text-gray-400'>sakhi.sheikhislam@gmail.com </span>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-8 mt-2 grow">
          <div className="text-center md:text-left">
            {/* <hr className="hidden mt-8 mb-8" /> */}
            {/* <h2 className="text-xl sm:text-4xl font-bold mb-3">Book a Demo with Us</h2> */}
            <span className='font-semibold'>Company Overview:</span>
            <span className="text-sm font-semibold text-gray-400">  Al Khursi LLP is a global leader in trading, strategic investments, and AI-powered infrastructure, driving innovation across commodities, energy, and digital transformation.</span>
          </div>

          {/* <div className="flex gap-2" onClick={() => setContactUsModal(true)}>
            <button className="bg-customGreen text-white rounded-md px-4 py-2 font-semibold hover:bg-customBlue">
              Contact Us
            </button>
          </div> */}
        </div>
        <div className="text-center md:text-left mt-2">
          <span className='font-semibold'>Quick Links: </span>
          <Link href='/' className='text-sm font-semibold text-gray-400 cursor-pointer'>Home | </Link>
          <Link href='/#ourExpertise' className='text-sm font-semibold text-gray-400 cursor-pointer'>Services | </Link>
          <Link href='/#ourExpertise' className='text-sm font-semibold text-gray-400 cursor-pointer'>Industries | </Link>
          <Link href='/#ourExpertise' className='text-sm font-semibold text-gray-400 cursor-pointer'>Partner | </Link>
          <Link href='/#ourExpertise' className='text-sm font-semibold text-gray-400 cursor-pointer'>Contact Us </Link>
        </div>
        <div>
          <span className='font-semibold'>Legal: </span>
          <Link href='/' className='text-sm font-semibold text-gray-400 cursor-pointer'>Privacy Policy | </Link>
          <Link href='/' className='text-sm font-semibold text-gray-400 cursor-pointer'>Terms & Conditions </Link>
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
