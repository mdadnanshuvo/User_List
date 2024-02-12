import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserDetail from './UserDetail';

function UserList()
{
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() =>
    {
        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm, sortBy]);

    const fetchUsers = async () =>
    {
        try
        {
            setLoading(true);
            let url = 'https://dummyjson.com/users';
            const params = [];

            if (searchTerm)
            {
                url = `https://dummyjson.com/users/search?q=${searchTerm}`;
            }


            const response = await fetch(url);
            const data = await response.json();
            setUsers(data.users);
            setLoading(false);
        } catch (error)
        {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };


    const handleSearchChange = (e) =>
    {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (e) =>
    {
        const value = e.target.value;
        setSortBy(value);
        let url = 'https://dummyjson.com/users';

        const params = [];

        if (searchTerm)
        {
            params.push(`firstName_like=${searchTerm}`);
        }

        if (value === 'name')
        {
            params.push('_sort=firstName&_order=asc');
        } else if (value === 'email')
        {
            params.push('_sort=email&_order=asc');
        } else if (value === 'company')
        {
            params.push('_sort=company.name&_order=asc');
        }

        if (params.length > 0)
        {
            url += `?${params.join('&')}`;
        }

        fetchUsers(url);
    };

    return (
        <div className="container mt-4">
            <div className="row mb-3">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <div className="col">
                    <select
                        className="form-control"
                        value={sortBy}
                        onChange={handleSortChange}
                    >
                        <option value="">Sort by</option>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="company">Company</option>
                    </select>
                </div>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="row">
                    {users.map((user) => (
                        <div className="col-md-3 mb-3" key={user.id}>
                            <Link to={`/user/${user.id}`}>
                                <UserDetail user={user} />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default UserList;
