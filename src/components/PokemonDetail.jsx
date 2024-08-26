import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled, { keyframes } from "styled-components";
import Type from "../Type";

const PokemonDetail = () => {
    const navigate = useNavigate();

    const typeColor = useContext();

    // 포켓몬 id값을 받아와 해당 id값을 가진 포켓몬 데이터 가져오기
    const params = useParams();
    const pokemonId = Number(params.id);
    const targetPokemon = MOCK_DATA.find((pokemon) => pokemon.id === pokemonId);

    return (
        <DetailContainer color={Type(targetPokemon.types[0])}>
            <Img src={targetPokemon.img_url}></Img>
            <h1 style={{ fontSize: "50px" }}>{targetPokemon.korean_name}</h1>
            <p style={{ fontSize: "25px" }}>
                타입: {targetPokemon.types.join(", ")}
            </p>
            <p style={{ fontSize: "25px" }}>{targetPokemon.description}</p>
            <BackButton
                onClick={() => {
                    navigate("/dex");
                }}
            >
                뒤로가기
            </BackButton>
        </DetailContainer>
    );
};

export default PokemonDetail;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 700px;
    height: 700px;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    gap: 10px;

    // 반사광 초기 설정
    &:before {
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        height: 100%;
        width: 10em;
        display: block;
        position: absolute;
        top: 0;
        left: -25em;
        transform: skewX(-45deg) translateX(0);
        transition: none;
    }

    // 디테일 카드 호버 시 스타일 변경
    &:hover {
        background-color: ${(props) => props.color};
        color: #fff;

        // 호버 시 반사광 이동
        &:before {
            transform: skewX(-45deg) translateX(100em);
            transition: all 0.5s ease-in-out;
        }
    }
`;

const Img = styled.img`
    width: 300px;
    height: 300px;
`;

const BackButton = styled.button`
    width: 200px;

    position: absolute;
    top: 650px;

    margin-top: 20px;
    transition: 300ms ease-in-out;
    padding: 20px;

    color: #f8f9fa;
    font-size: 20px;

    border: 2px solid #893a48;
    border-radius: 10px;
    background-color: #ff4d6d;

    box-shadow: 3px 8px 0px 0px #893a48;

    &:hover {
        border: 2px solid #4c245a;
        background-color: blueviolet;
        box-shadow: 3px 8px 0px 0px #51255e;
    }

    &:active {
        position: absolute;
        top: 652px;
        box-shadow: 0px 0px 0px 0px #51255e;
    }
`;
