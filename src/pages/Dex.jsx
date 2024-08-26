import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
    const [pokemonList, setPokemonList] = useState(MOCK_DATA);
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    const addPokemon = (pokemon) => {
        const findPokemon = selectedPokemon.find(
            (selectedPokemon) => selectedPokemon.id === pokemon.id
        );

        //유효성 검사
        if (findPokemon) {
            alert("이미 등록된 포켓몬이야!");
            return;
        }

        // 동행 포켓몬 등록 가능 길이 설정
        if (selectedPokemon.length === 6) {
            alert("동행 포켓몬을 더 등록 할 수 없어!");
            return;
        }
        setSelectedPokemon([...selectedPokemon, pokemon]);
    };

    // 동행 포켓몬 삭제
    const removePokemon = (pokemon) => {
        setSelectedPokemon(
            selectedPokemon.filter(
                (selectedPokemon) => selectedPokemon.id !== pokemon.id
            )
        );
    };

    return (
        <div>
            <Dashboard
                selectedPokemon={selectedPokemon}
                removePokemon={removePokemon}
            />
            <PokemonList
                pokemonList={pokemonList}
                addPokemon={addPokemon}
                removePokemon={removePokemon}
            />
        </div>
    );
};

export default Dex;
