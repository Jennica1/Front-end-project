import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newItem, setNewItem] = useState('');

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newItem.trim()) {
            setItems([...items, newItem.trim()]);
            setNewItem('');
        }
    };

    return (
        <div className="sidebar">
            <form onSubmit={handleSubmit} className="add-item-form">
                <input
                    type="text"
                    placeholder="Enter new item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="add-item-input"
                />
                <button type="submit" className="add-item-button">Create New Playlist</button>
            </form>
            <input
                type="text"
                placeholder="Filter"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <ul className="item-list">
                {filteredItems.map((item, index) => (
                    <li key={index} className="item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
