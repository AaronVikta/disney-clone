import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import WatchlistIcon from '@material-ui/icons/Add'
import OriginalIcon from '@material-ui/icons/Star'
import MovieIcon from '@material-ui/icons/Movie'
import SeriesIcon from '@material-ui/icons/Tv';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import {auth, provider} from '../firebase';
import Cross from '@material-ui/icons/Cancel';
import {
    selectUserName,
     selectUserPhotoUrl,
     setUserLogin,
     setSignOut
    }from '../features/user/userSlice';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Header() {
    const [showHam, setToggle] = useState(true)
    const [showMenu, setMenu] = useState(false)
    const userName = useSelector(selectUserName);
    const userphotoUrl = useSelector(selectUserPhotoUrl);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() =>{
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
              }))
              history.push("/");
            }
        });
    }, [])
    
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) =>{
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
            history.push("/")
        })
    }
    const signOut = ()=>{
        auth.signOut()
        .then(() =>{
            dispatch(setSignOut);
            history.push("/login")
        })
    }
    const toggleMenu = (e) =>{
        e.preventDefault();
        setToggle(false);
        setMenu(true);
    }
    const showHamMenu = (e) =>{
        e.preventDefault();
        
        setToggle(true);
        setMenu(false);
    }
    return (  
        <>
        <Nav>
            <Link to="/"><LogoDiv><Logo src="/images/disney.png"/></LogoDiv> </Link>
          
           {!userName
              ?
             <LoginContainer>
                  <Login onClick ={signIn}>Login</Login>
             </LoginContainer>
              :
                <>
            <NavMenu>
                <Link to="/"> <a href="#">
                    <HomeIcon  fontSize="small"/>
                    <span> HOME</span>
                </a>
                </Link>
                <Link to="#">
                    <a href="#">
                        <SearchIcon  fontSize="small"/>
                        <span> SEARCH</span>
                    </a>
                </Link>
               <Link>
               <a href="#">
                    <WatchlistIcon  fontSize="small"/>
                    <span> WATCHLIST</span>
                </a>
               </Link>

               <Link to="#">
               <a href="#">
                    <OriginalIcon  fontSize="small"/>
                    <span> ORIGINALS</span>
                </a>
               </Link>
                <a href="#">
                    <MovieIcon  fontSize="small"/>
                    <span> MOVIES</span>
                </a>
                <a href="#">
                    <SeriesIcon  fontSize="small"/>
                    <span> SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="/images/aryan.jpg" alt=" My image"
            onClick={signOut}
            />
                 {
                     showHam ?
                     <MobileNav>
                    <Hamburger>
                      <MenuIcon onClick ={toggleMenu}/>
                   </Hamburger>
                    </MobileNav>
                    :
                    ""
                 }
                </>
               
            }    
            </Nav>
            <ShowOnMobile>
            {!userName
              ?
             ""
              :
                <>
                {
                    showMenu ?
                    <HamMenu>

                    <Cross className="cancel" onClick ={showHamMenu}/>
                    <ul>
                    <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <span> HOME</span>
                    <span> <HomeIcon  fontSize="small" className="pad-ham"/></span>
                        
                    </Link>
                    </a>
                    </div>
                    <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <span> SEARCH</span>
                    <span> <SearchIcon  fontSize="small" className="pad-ham"/></span>
                        
                    </Link>
                    </a>
                    </div>
    
                   <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <span> WATCHLIST</span>
                    <span> <WatchlistIcon  fontSize="small" className="pad-ham"/></span>
                        
                    </Link>
                    </a>
                    </div>
                   
                   <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <span> ORIGINALS</span>
                    <span> <OriginalIcon  fontSize="small" className="pad-ham"/></span>
                        
                    </Link>
                    </a>
                    </div>
                    <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <span> MOVIES</span>
                    <span> <MovieIcon  fontSize="small" className="pad-ham"/></span>
                        
                    </Link>
                    </a>
                    </div>
                    <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <span> SERIES</span>
                    <span> <SeriesIcon  fontSize="small" className="pad-ham"/></span>
                        
                    </Link>
                    </a>
                    </div>
                    <div className="ham-menu">
                    <a>
                    <Link to="#">
                    <UserImg src="/images/aryan.jpg" alt=" My image" onClick={signOut}/>
                        
                    </Link>
                    </a>
                    </div>
                    </ul>
                </HamMenu>
                :""
                }
                </>
                }
            </ShowOnMobile>
            </>
    )
}

export default Header
const Nav = styled.nav`
height: 70px;
background: #090b13;
display: flex;
padding:0% 2% 0% 2%;
align-items: center;
 overflow-x: hidden;
 z-index: 1;
 width: 100%;

 
 `

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
    @media (max-width: 950px){
        display:none;
    }
}
`
const UserImg = styled.img`
height: 48px;
width: 48px;
border-radius: 50%;
curson:pointer;
@media (max-width: 950px){
    display:none;
}
`
const Login = styled.div`
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background-color: rgba(0, 0,0, 0.6);
cursor:pointer;

&:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`
const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content: flex-end;
`
const Hamburger = styled.div`
    display:none;
    @media screen and (max-width: 950px){
        display:flex;
        flex:1;
        cursor:pointer;
    }
    
`

const LogoDiv = styled.div`
    @media screen and (max-width: 912px){
        flex:3;
    }
`
const MobileNav = styled.div`
` 
const HamMenu = styled.div`
display: none;
padding: 10% 5%;
font-size:20px;
.ham-menu{
    color:#fff;
    margin-top:6%;
    display: block;
    margin-right: 20%;
    align-items:center;
    vertical-align: middle;
    // justify-content:center;
    &:hover{
        border-bottom: 2px solid blue;
    }
     a{
         text-decoration:none;
         color:#fff;
     }
     .pad-ham{
         margin-top: 20px;
         color:#fff;
     }
}

 @media (max-width:950px){
     position: absolute;
     height: 100vh;
     top: 0;
     right: 0;
     display:block;
     background-color: rgba(0, 0, 0, 0.9);
     z-index:1000;
     width: 50%;
     .ham-link{
        border: 2px solid blue;
        margin-right: 20px;
        color:#fff;
    }
    .cancel{
        position:absolute;
        top:0;
        right:0;
        opacity:0.7;
        margin: 10px 10px;
        cursor:pointer;
    }
 }
`
const ShowOnMobile = styled.div`
display:none;
@media (max-width: 950px){
    display:block;
}
`