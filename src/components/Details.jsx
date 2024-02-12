
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details()
{
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        fetchUserDetails();
    }, [id]);

    const fetchUserDetails = async () =>
    {
        try
        {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/users/${id}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        } catch (error)
        {
            console.error('Error fetching user details:', error);
            setLoading(false);
        }
    };

    if (loading)
    {
        return <div className='container'>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="text-center mt-4">
                <img src={user.image} alt="Avatar" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
                <h1 className="mt-3">{user.firstName} {user.lastName}</h1>
                <div>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;
