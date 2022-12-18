import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async(name) => {
        console.log("Fetching Names:" + name);
        const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=6e7fd477562341d9a126ac69cad9e8c3&cuisine=" + name;
        const data = await fetch(URL);
    // ('https://api.spoonacular.com/recipes/complexSearch?apiKey=6e7fd477562341d9a126ac69cad9e8c3&cuisine=$name');
        const recipes = await data.json();
        console.log("Fetching recipes: "+ recipes.results.number);
        setCuisine(recipes.results);
    };


    useEffect( () => {
       getCuisine(params.type)
       console.log(params.type);
    },[params.type]);

  return (
    <Grid
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
        >
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt="ERROR"/>
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
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

export default Cuisine