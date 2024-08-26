import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, removePokemon }) => {
    return (
        <div>
            <DashboardContainer>
                <Img
                    src={
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                    }
                ></Img>
                <h1 style={{ color: "#fff" }}>동행 포켓몬</h1>
                {selectedPokemon.length === 0 ? (
                    <Header>
                        등록된 동행 포켓몬이 없어!
                        <br /> 동행 포켓몬을 등록해줘! Ϟ(๑⚈․̫ ⚈๑)⋆
                    </Header>
                ) : (
                    <Card>
                        {selectedPokemon.map((pokemon) => {
                            return (
                                <PokemonCard
                                    key={pokemon.id}
                                    pokemon={pokemon}
                                    isSelected={true}
                                    removePokemon={removePokemon}
                                />
                            );
                        })}
                    </Card>
                )}
            </DashboardContainer>
        </div>
    );
};

export default Dashboard;

const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 1440px;
    height: 600px;

    margin: 30px auto;
    margin-bottom: 50px;

    background-color: #ff4d6d;
    border-radius: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: white;

    font-size: 20px;

    word-break: keep-all;
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 12px;
`;

const Img = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
`;
