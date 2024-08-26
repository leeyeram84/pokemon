import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useParams } from "react-router-dom";

const PokemonList = ({ pokemonList, addPokemon }) => {
    return (
        <div>
            <ListContainer>
                {pokemonList.map((pokemon) => {
                    return (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                            isSelected={false}
                            addPokemon={addPokemon}
                        />
                    );
                })}
            </ListContainer>
        </div>
    );
};

export default PokemonList;

const ListContainer = styled.div`
    width: 1240px;
    height: 300px;
    border-radius: 10px;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
`;
