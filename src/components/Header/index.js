import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => (
    <header id="mainHeader">
        <Link to="/">The most powerfull Facebook development tools</Link>
    </header>
);

export default Header;