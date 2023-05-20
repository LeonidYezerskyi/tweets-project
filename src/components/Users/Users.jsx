import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Users.module.css';
import UserCard from '../UserCard/UserCard';
import ButtonLoadMore from './ButtonLoadMore/ButtonLoadMore';
import { getUsers } from '../../services/api';
import Loader from './Loader/Loader';

const Users = ({ filter }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [followingList, setFollowingList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const storedFollowingList = JSON.parse(localStorage.getItem("following"));
        setFollowingList(storedFollowingList || [])
    }, [])

    const fetchUsers = async () => {
        try {
            setIsLoading(true);

            const response = await getUsers(page);

            setUsers((prevUsers) => {
                const newUsers = response.filter((newUser) => !prevUsers.some((existingUser) => existingUser.id === newUser.id));
                return [...prevUsers, ...newUsers];
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
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
                        <UserCard
                            key={id}
                            user={user}
                            tweets={tweets}
                            followers={followers}
                            src={avatar}
                            id={id}
                            followingList={followingList}
                            setFollowingList={setFollowingList}
                        />
                    );
                })}
            </ul>
            {isLoading && <Loader style={{ marginBottom: "70px" }} />}

            {filteredUsers.length > 0 && filteredUsers.length < 10 && <ButtonLoadMore onClick={onClickBtn} />}
        </div>
    );
};

Users.propTypes = {
    filter: PropTypes.string.isRequired,
    setIsLoading: PropTypes.func.isRequired,
};

export default Users;