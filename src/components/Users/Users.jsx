import React from "react";
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                photoUrl: 'https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg',
                followed: false,
                fullname: 'Aliev Timur',
                status: 'Helloooo....?',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 1,
                photoUrl: 'https://www.rosphoto.com/images/u/articles/1510/7_5.jpg',
                followed: true,
                fullname: 'Alex Adamov',
                status: 'BB',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://www.rosphoto.com/images/u/articles/1510/4_8.jpg',
                followed: false,
                fullname: 'Ludmila Alieva',
                status: 'Good job',
                location: {city: 'St. Petersburg', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/jtu8XyqgHqj6WMg7N6VREPqsMk020be9onpVamLUzDXbrpInX6MUAG5bV6qOLsKgtb9ycv5d7SFjkk2wJ5UkDyfm6A',
                followed: true,
                fullname: 'Tatiana Alieva',
                status: 'Good luck',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/ThhO5ieSH6eKRY5fcJrCvW9DXwYmNgRQVAyumCuyNEn7IRAYu6-mymfexUqFKrEiCz1nzoKg8l46in0Gd6quwrasAgh_dqES40lFSgpsfLf4q112gAGP9H8ZHeigVR5ZZdfn5pAo_7JT1Tx18n2RYYgRXyOP2Q',
                followed: false,
                fullname: 'Lisa Keldysh',
                status: 'Free',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }

    return <div>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullname}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
        </div>)
    }</div>
}

export default Users;