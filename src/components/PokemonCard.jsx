import React from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

const PokemonCard = ({ pokemon, isSelected, addPokemon, removePokemon }) => {
    const navigate = useNavigate();

    // 동행 포켓몬 추가
    const onAddPokemon = () => {
        addPokemon(pokemon);
    };

    // 동행 포켓몬 제거
    const onRemovePokemon = () => {
        removePokemon(pokemon);
    };

    return (
        <>
            <Card
                onClick={(e) => {
                    navigate(`/dex/${pokemon.id}`);
                }}
            >
                <Img src={pokemon.img_url} />

                <p>No.{pokemon.id}</p>
                <p>{pokemon.korean_name}</p>

                {isSelected ? (
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemovePokemon();
                        }}
                    >
                        몬스터볼에 넣기
                    </Button>
                ) : (
                    <Button
                        onClick={(e) => {
                            e.stopPropagation();
                            onAddPokemon();
                        }}
                    >
                        동행 시키기
                    </Button>
                )}
            </Card>
        </>
    );
};

export default PokemonCard;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 20%px;
    height: 100%;

    padding: 10px;

    text-decoration: none;

    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    gap: 8px;

    cursor: pointer;

    &:hover img {
        scale: 1.1;
        transition: 0.5s;
    }
    &:hover button {
        transition: 0.5s;
    }
`;

const Button = styled.button`
    width: 100px;
    height: 50px;
    margin-top: 10px;

    color: #fff;

    border-radius: 10px;
    background-color: #ff4d6d;

    &:hover {
        scale: 1.04;
        transition: 0.5s;
        background-color: #af41f8;
    }
`;

const Img = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 10px;
`;
