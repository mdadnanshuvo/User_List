
import React from 'react';

function UserDetail({ user })
{
    return (
        <div className="card">
            <img
                src={`${user.image}`}
                className="card-img-top"
                alt="Avatar"
            />
            <div className="card-body text-dark">
                <strong className="card-title">First Name: </strong> {`${user.firstName}`} <br />
                <strong className="card-title">Last Name: </strong> {`${user.lastName}`}
                <p className="card-text">
                    <strong>Email:</strong> {user.email}
                    <br />
                    <strong>Company:</strong> {user.company.name}

                    <br />
                    <strong>Address:</strong> {user.address.address}

                    <br />
                    <strong>City:</strong> {user.address.city}

                </p>
            </div>
        </div>
    );
}

export default UserDetail;
