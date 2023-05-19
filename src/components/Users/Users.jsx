import { useEffect, useState } from 'react';

import UserCard from "../UserCard/UserCard"
import { getUsers } from '../../services/api';
import css from "./Users.module.css";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <ul className={css.list}>
            {users.map(({ user, tweets, followers, avatar, id }) => {
                return <UserCard key={id} user={user} tweets={tweets} followers={followers} src={avatar} id={id} />
            })}
        </ul>
    )
}

export default Users