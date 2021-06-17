import React from 'react';
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="images/bao.jpg"/>
            </Background>
            <ImageTitle>
                <img src="/images/disney.png"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                   <img src="/images/play-icon-black.png"/>
                   <span>Play</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png"/>
                   <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>
                        +
                    </span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who's sad her grown son leaves
                home gets another chance at motherhod when
                one of her dumpling springs to life. But she 
                finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
}

export default Detail
const Container = styled.div`
min-height: calc(100vh-70px);
padding: 0 calc(3.5vw + 5px);
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
`
const Description = styled.div`
line-height: 1.4;
font-size: 20px;
margin-top:16px;
color: rgb(249,249,249);
`