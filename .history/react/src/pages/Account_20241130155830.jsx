import React from 'react';
import './styles/Account.css';

const Account = () => {

    <script src="src/script.ts" type="module"></script>
    return (
        <div className='account'>
            <div className='profile-header'>
                <div className='profile-image'>
                    <img src="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png" width={150} alt="profile" />
                </div>
                <div className='profile-info'>
                    <h2 className='profile-username'>DJ_MIXX</h2>
                    <button>Edit profile</button>
                    <ul className='profile-stats'>
                        <li><strong>2</strong> posts</li>
                        <li><strong>10</strong> followers</li>
                        <li><strong>5</strong> following</li>
                    </ul>
                </div>
            </div>
            <div className='profile-bio'>
                <h3>hi guys</h3>
            </div>

            <div className='post-grid'>
                <div className='post-item'><img src="https://via.placeholder.com/150" alt="post" /></div>
                <div className='post-item'><img src="https://via.placeholder.com/150" alt="post" /></div>
            </div>
        </div>
    );
};

export default Account;
