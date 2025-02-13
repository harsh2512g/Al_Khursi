import React, { useState } from 'react';
import axios from 'axios';

interface ContactUsModalProps {
    // Define your component props here
    onCancel: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ onCancel }) => {
    // Implement your component logic here
    const [values, setValues] = useState({
        name: '',
        mobile: '',
        email: '',
        description: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        mobile: '',
        email: '',
        description: ''
    });

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            name: e.target.value
        });
    }


    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            mobile: e.target.value
        });
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            email: e.target.value
        });
        setErrors({
            ...errors,
            email: ''
        })
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            mobile: e.target.value
        });
    }


    const handleSubmit = () => {
        
        if (!values?.email) {
            setErrors({
                ...errors,
                email: 'Please enter email'
            })
        }
        axios.post('https://byte.treint.com/treint/api/v1/support-request', {
            subject: values?.name,
            message: values?.description,
            email: values?.email,
            mobile_no: values?.mobile
        })
            .then(response => {
                console.log('Data fetched: ', response.data.documents);
                onCancel();
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                onCancel();
            });
    }

    return (
        <div className='p-1 w-full'>
            <h1 className='modalTitle mb-4 text-[24px] font-extrabold'>Contact Us</h1>

            <div className='w-full mb-3'>
                <p className='text-sm font-medium'>Your Name</p>
                <input type='text' onChange={handleNameChange} placeholder='Please enter your name' className='w-full border rounded-[6px] border-[#10131F] py-1 px-4 mt-2' />
            </div>
            <div className='w-full mb-3'>
                <p className='text-sm font-medium'>Mobile Number</p>
                <input type='text' onChange={handleMobileChange} placeholder='Mobile number' className='w-full border rounded-[6px] border-[#10131F] py-1 px-4 mt-2' />
            </div>
            <div className='w-full mb-3'>
                <p className='text-sm font-medium'>Email ID</p>
                <input type='text' onChange={handleEmailChange} placeholder='Please enter your email id' className='w-full border rounded-[6px] border-[#10131F] py-1 px-4 mt-2' />
                <p className='text-xs text-red-500'>{errors.email}</p>
            </div>
            <div className='w-full'>
                <p className='text-sm font-medium'>Description</p>
                <input type='text' onChange={handleDescriptionChange} placeholder='Please add description here' className='w-full border rounded-[6px] border-[#10131F] py-1 px-4 mt-2' />
            </div>
            <div className='bg-customGreen py-2 mt-5 text-white rounded-[6px] text-center cursor-pointer' onClick={handleSubmit}>
                Submit
            </div>
        </div>
    );
};

export default ContactUsModal;
