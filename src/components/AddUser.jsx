import React, { useState } from 'react';

function AddUser()
{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        company: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) =>
            {
                setSuccessMessage('User Added Successfully!');

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    company: '',
                });
            })
            .catch((error) =>
            {
                console.error('Error adding new user:', error);
            });
    };

    return (
        <div className="container mt-4">
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address:</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="company" className="form-label">Company:</label>
                    <input type="text" className="form-control" id="company" name="company" value={formData.company} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </div>
    );
}

export default AddUser;
