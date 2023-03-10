import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Searched() {

    const[searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async(name) => {
        const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=e816293a46fa42c783797bfd811c91f5&query=" +name;
        const data = await fetch (URL);
        const recipes = await data.json();

        setSearchedRecipes(recipes.results);
    };

    useEffect(()=> {
        getSearched(params.search);
    },[params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item) =>{
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-grap: 3rem;
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`;


export default Searched