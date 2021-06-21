import React, {useEffect} from 'react'
import Movies from './Movies';
import db from '../firebase';
import {useDispatch} from 'react-redux';
import {setMovies} from '../features/movie/movieSlice'
import styled from 'styled-components';

function MovieListing() {
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies = snapshot.docs.map((doc) =>{
                return {id: doc.id, ...doc.data()}
            })
          
            dispatch(setMovies(tempMovies));
        })
    }, []);

    return (
        <Container>
            <h2>Movies</h2>
            <Movies/>
        </Container>
    )
}

export default MovieListing
const Container = styled.div`
padding:0 36px;
h2{
    text-align:center;
}`