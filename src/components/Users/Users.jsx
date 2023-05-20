import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard/UserCard';
import { getUsers } from '../../services/api';
import css from './Users.module.css';
import Button from './Button/Button';

const Users = ({ filter }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [followingList, setFollowingList] = useState([]);

    useEffect(() => {
        const storedFollowingList = JSON.parse(localStorage.getItem("following"));
        setFollowingList(storedFollowingList || [])
    }, [])

    const fetchUsers = async () => {
        try {
            const response = await getUsers(page);

            setUsers((prevUsers) => {
                const newUsers = response.filter((newUser) => !prevUsers.some((existingUser) => existingUser.id === newUser.id));
                return [...prevUsers, ...newUsers];
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [page]);

    useEffect(() => {
        let updatedUsers = users;
        if (filter === 'show all') {
            updatedUsers = users;
        } else if (filter === 'follow') {
            updatedUsers = users.filter((user) => !followingList.includes(user.id));
        } else if (filter === 'followings') {
            updatedUsers = users.filter((user) => followingList.includes(user.id));
        }
        setFilteredUsers(updatedUsers);
    }, [users, filter, followingList]);

    const onClickBtn = () => {
        setPage(page + 1);
    };

    return (
        <div className={css.listContainer}>
            <ul className={css.list}>
                {filteredUsers.map(({ user, tweets, followers, avatar, id }) => {
                    return (
                        <UserCard key={id} user={user} tweets={tweets} followers={followers} src={avatar} id={id} followingList={followingList} setFollowingList={setFollowingList} />
                    );
                })}
            </ul>
            {filteredUsers.length > 0 && filteredUsers.length < 10 && <Button onClick={onClickBtn} />}
        </div>
    );
};

Users.propTypes = {
    filter: PropTypes.string.isRequired,
};

export default Users;