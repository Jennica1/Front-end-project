import React from 'react';
import './styles/Account.css';

const Account = () => {
    return (
        <div className='account'>
            <div className='profile-header'>
                <div className='profile-image'>
                    <img src="https://cdn.discordapp.com/attachments/1283117600431276174/1300628114350542888/IMG_6479.jpg?ex=674e5ad2&is=674d0952&hm=a0025a4268c8f9a8e749e11ec07851c6e2ab2657e5ae0c3f6166ad58cf59c801&" width={150} alt="profile" />
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
                <h3>hi music fellas! let's get groovy!</h3>
            </div>

            <div className='post-grid'>
                <div className='post-item'><img src="https://i.scdn.co/image/ab6761610000e5ebd77a9c855001f3a9b5815bc0" alt="100gecs_playlist" /></div>
                <div className='post-item'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-O0mtiOFEWaav-mZSxfY9nwsN5FHdD7pVA&s" alt="rap_playlist" /></div>
            </div>
        </div>
    );
};

export default Account;
