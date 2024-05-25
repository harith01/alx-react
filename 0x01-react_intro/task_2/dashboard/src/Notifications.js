import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <button
              style={{ 
                color: "#3a3a3a",
                fontWeight: 'bold',
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                cursor: 'pointer',
                border: 'none'
               }} 
              aria-label='Close'
              onClick={console.log('Close button has been clicked')}>
                <img src={closeIcon} width="10px" alt='Close Icon' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}