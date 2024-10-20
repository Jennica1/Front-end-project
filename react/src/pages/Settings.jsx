import React from 'react';
import './styles/Settings.css';

const Settings = () => {
    return (
        <div className='settings'>

            <div className='settingsHeader'>
                <h1>Settings</h1>
            </div>

            <div className='accessibilitySettings'>
                <h2 className='settingsSubhead'>
                    Accessibility
                </h2>
                <div className='content'>
                    <div className='settingsItem'>
                        <h3 className='itemName'>
                            Light Mode
                        </h3>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className='settingsItem'>
                        <h3 className='itemName'>
                            Text Size
                        </h3>
                        <select name="size" id="text" className='textBox'>
                            <option value="normal">Normal</option>
                            <option value="big">Big</option>
                            <option value="bigger">Bigger</option>
                        </select>
                    </div>
                    <div className='settingsItem'>
                        <h3 className='itemName'>
                            Language
                        </h3>
                        <select name="size" id="text" className='languageBox'>
                            <option value="english">English</option>
                            <option value="chinese">Chinese (Traditional)</option>
                            <option value="pirate">Pirate Speak</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='settingsGroup'>
                <h2 className='settingsSubhead'>
                    Account
                </h2>
                <div className='content'>
                    <div className='settingsItem'>
                        <h3 className='itemName'>
                            Account Email
                        </h3>
                        <p className='emailText'>
                            epic_mixx_sundays@gmail.com &nbsp;&nbsp; >
                        </p>
                    </div>
                    <div className='settingsItem'>
                        <h3 className='itemName'>
                            Password
                        </h3>
                        <p className='passwordText'>
                            Change Password &nbsp;&nbsp; >
                        </p>
                    </div>
                </div>
            </div>

            <div className='settingsGroup'>
                <h2 className='settingsSubhead'>
                    Other
                </h2>
                <div className='content'>
                    <div className='settingsItem'>
                        <h3 className='itemName'>
                            Log Out
                        </h3>
                        <p className='logout'>
                            >
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
