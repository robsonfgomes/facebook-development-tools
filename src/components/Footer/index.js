import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const Footer = () => (
    <footer>
        <p>
            Made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://github.com/robsonfgomes" target="_blank">Robson Gomes</a>
        </p>
    </footer>
);


export default Footer;