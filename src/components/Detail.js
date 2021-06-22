import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams, useHistory} from 'react-router-dom'
import db from '../firebase'


function Detail() {

    const {id} = useParams();
    const [movie, setMovie] = useState();
    const history = useHistory();
    
    useEffect(() =>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc) =>{
            if(doc.exists){
                setMovie(doc.data())
            } else{
                // redirect home
                history.push("/")
            }
        })
    }, [])


    return (
        <Container>
            
            {movie &&
                <>
                 <Background>
                    <img src={movie.backgroundImg} alt="background"/>
                 </Background>
                <ImageTitle>
                    {/* <img src="/images/baotitle.png"/> */}
                </ImageTitle>
                <Controls>
                    <PlayButton>
                    <img src="/images/play-icon-black.png" alt="playback-icon"/>
                    <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="trailer-icon"/>
                    <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                        <span>
                            +
                        </span>
                    </AddButton>
                    <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="group-icon"/>
                    </GroupWatchButton>
                </Controls>
                <SubTitle>
                <h4>{movie.title}</h4>
                    {movie.subTitle}
                </SubTitle>
                <Description>
                    
                    {movie.description}
                </Description>
                </>
            }
           
        </Container>
    )
}

export default Detail
const Container = styled.div`
min-height: 90vh;
padding: 0 calc(3.5vw + 5px);
// width: 100vw;
position:relative;
`
const Background = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom: 0;
z-index: -1;
opacity:0.8;
img{
    width:100%;
    height:100%;
    object-fit: cover;
}
`
const ImageTitle = styled.div`
height: 30vh;
min-height: 170px;
min-width:200px;
width:35vw;
margin:0px;
// margin-bottom:10vh;

img{
   height: 100%;
   width:100%;
   object-fit:contain;
}
`
const Controls = styled.div`
display:flex;
align-items: center;

`
const PlayButton = styled.button`
border-radius: 4px;
font-size: 15px;
display:flex;
align-items: center;
height: 56px;
background: rgb(249,249 249);
border:none;
padding: 0px 24px;
margin-right: 20px;
letter-spacing: 1.8px;
cursor:pointer;
text-transform: uppercase;
&:hover{
    background:rgb(198, 198, 198);
}
`
const TrailerButton =styled(PlayButton)`
background: rgba(0, 0, 0, 0.3);
border:1px solid rgb(249,249, 249);
color:rgb(249, 249, 249);

`
const AddButton = styled.button`
border-radius:50%;
height:44px;
width: 44px;
margin-right:16px;
display:flex;
align-items:center;
justify-content:center;
background:rgba(0,0,0, 0.6);
border: 1px solid white;
cursor:pointer;

span{
    font-size:30px;
    color:white;

}
`
const GroupWatchButton = styled(AddButton)`
background:rgba(0, 0,0, 0.95);
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    h4{
        font-size:30px;
    }
    `
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top:16px;
color: rgb(249,249,249);
max-width:760px;
`
