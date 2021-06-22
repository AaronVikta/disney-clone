import React from 'react'
import styled from 'styled-components';
import {selectMovies} from '../features/movie/movieSlice';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function Movies() {
    const movies = useSelector(selectMovies);
    console.log("This is movies ", movies);
    return (
        <Container>
            <Content>
                { movies ?
                 movies.map((movie) =>(
                    <Wrap key={movie.id}>
                        <Link to={`/detail/${movie.id}`}>
                         <img src={movie.cardImg}/>
                        </Link>
                    </Wrap>
                 ))
                :"Failed to Fetch Movies"
                }
            </Content>
        </Container>
    )
}

export default Movies
const Container = styled.div`
margin-bottom:20px;
`
const Content = styled.div`
display:grid;
grid-gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
@media (max-width:950px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width:532px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin: 5%;
}


`
const Wrap = styled.div`
border-radius: 10px;
overflow:hidden;
max-height: 200px;
border: 3px solid rgba(249, 249,249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor:pointer;
transition: all 258ms cubic-beizer(0.25,0.46, 0.45,0.94) 0s;



img{
    width:100%;
    height: 100%;
    object-fit:cover;
}
&:hover{
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 /80%) 0px 48px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249,249,249, 0.8);
   
} 
@media (max-width:532px){
    max-height: 200px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
 }
`