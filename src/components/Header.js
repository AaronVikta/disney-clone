import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import WatchlistIcon from '@material-ui/icons/Add'
import OriginalIcon from '@material-ui/icons/Star'
import MovieIcon from '@material-ui/icons/Movie'
import SeriesIcon from '@material-ui/icons/Tv'


function Header() {
    return (
        <Nav>
            <Logo src="/images/disney.png"/>
            <NavMenu>
                <a href="#">
                    <HomeIcon  fontSize="small"/>
                    <span> HOME</span>
                </a>
                <a href="#">
                    <SearchIcon  fontSize="small"/>
                    <span> SEARCH</span>
                </a>
                <a href="#">
                    <WatchlistIcon  fontSize="small"/>
                    <span> WATCHLIST</span>
                </a>
                <a href="#">
                    <OriginalIcon  fontSize="small"/>
                    <span> ORIGINALS</span>
                </a>
                <a href="#">
                    <MovieIcon  fontSize="small"/>
                    <span> MOVIES</span>
                </a>
                <a href="#">
                    <SeriesIcon  fontSize="small"/>
                    <span> SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/aryan.jpg" alt=" My image"/>
        </Nav>
    )
}

export default Header
const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
padding:0 36px;
align-items: center;
 overflow-x: hidden;`

const Logo = styled.img`
    width: 80px
`
const NavMenu = styled.div`
display:flex;
align-items:center;
flex:1;
margin-left: 20px;
a {
    display: flex;
    align-items: center;
    padding:0 12px;
    text-decoration:none;
    color: #fff;
    cursor:pointer;
    span {
        font-size:13px;
        letter-spacing: 1.42px;
        position: relative;
        &:after {
            content:" ";
            height: 2px;
            background: white;
            position:absolute;
            right: 0;
            left: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 258ms cubic-beizer(0.25,0.46, 0.45,0.94) 0s;
            transform: scaleX(0) ;
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
}
`
const UserImg = styled.img`
height: 48px;
width: 48px;
border-radius: 50%;
curson:pointer;
`