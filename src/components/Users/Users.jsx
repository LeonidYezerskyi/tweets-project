import { useEffect, useState } from 'react';

import UserCard from "../UserCard/UserCard"
import { getUsers } from '../../services/api';
import css from "./Users.module.css";
import Button from './Button/Button';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers(page);
                setUsers(prevUsers => {
                    const filteredUsers = response.filter(newUser => !prevUsers.some(existingUser => existingUser.id === newUser.id));
                    return [...prevUsers, ...filteredUsers];
                });
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [page]);

    const onClickBtn = () => {
        setPage(page + 1);
    }

    return (
        <div className={css.listContainer}>
            <ul className={css.list}>
                {users.map(({ user, tweets, followers, avatar, id }) => {
                    return <UserCard key={id} user={user} tweets={tweets} followers={followers} src={avatar} id={id} />
                })}
            </ul>
            {users.length > 0 && users.length < 10 && <Button onClick={onClickBtn} />}
        </div>
    )
}

export default Users;