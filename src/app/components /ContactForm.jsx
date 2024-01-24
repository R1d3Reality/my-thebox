'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Додайте код для обробки подій відправки форми тут
        console.log('Form Submitted:', formData);
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='contact'>
                <div className='contact-info'>
                    <h3 className='contact-info-title'>
                        What can us do for you?
                    </h3>
                    <p className='contact-info-txt'>
                        We are ready to work on a project of any complexity, whether it’s commercial or residential.
                    </p>
                </div>
                <div className='contact-row'>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder='Your Name:'
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        placeholder='Your Email:'
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='contact-row'>
                    <label htmlFor="reason"></label>
                    <input
                        type="text"
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        placeholder='Reason for Contacting:'
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone"></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        placeholder='Phone:'
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="message"></label>
                <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    placeholder='Message:'
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
