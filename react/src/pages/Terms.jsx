import React from 'react';
import './styles/Terms.css';

const Terms = () => {
    return (
        <div className='terms'>
            <div className='terms-container'>
                <h1>Terms of Service</h1>
                <div className='terms-content'>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing or using placeholder, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our service.</p>
                    <h2>2. Eligibility</h2>
                    <p>You must be at least 13 years old to use placeholder. If you are under 18, you should have permission from a parent or guardian.</p>
                    <h2>3. User Accounts</h2>
                    <li>
                        <ul>Account Creation: To access certain features, you may need to create an account. You must provide accurate information and keep your account secure.</ul>
                        <ul>Responsibility: You are responsible for all activities that occur under your account. Notify us immediately of any unauthorized use.</ul>
                    </li>
                    <h2>4. User-Generated Content</h2>
                    <li>
                        <ul>Ownership: You retain ownership of any playlists or content you create. However, by submitting content, you grant placeholder a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute that content.</ul>
                        <ul>Content Guidelines: You must not submit content that is unlawful, infringing, abusive, or otherwise objectionable. We reserve the right to remove any content that violates these guidelines.</ul>
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Terms;
