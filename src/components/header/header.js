import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 26px;
    color: #fff;
    margin: 0;
    text-shadow: 0 0 15px #000
    transition: font-size 0.3s linear
    &:hover{
        font-size: 27px;
    }
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">
                    <b>Game of Thrones DB</b>
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link to='/characters'>Characters</Link>
                </li>
                <li>
                    <Link to='/houses'>Houses</Link>
                </li>
                <li>
                    <Link to='/books'>Books</Link>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;