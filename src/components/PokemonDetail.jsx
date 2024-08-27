import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled, { keyframes } from "styled-components";
import Type from "../Type";

const PokemonDetail = () => {
    const navigate = useNavigate();

    // 포켓몬 id값을 받아와 해당 id값을 가진 포켓몬 데이터 가져오기
    const params = useParams(); // params 로 url id 가져오기
    const pokemonId = Number(params.id); // 가져운 url id 정수타입으로 변환
    const targetPokemon = MOCK_DATA.find((pokemon) => pokemon.id === pokemonId); // 가져온 url id와 MOCK_DATA id를 비교

    // const typeColor = [Type(targetPokemon.types[0])];

    return (
        <Box>
            <DetailContainer color={targetPokemon.types}>
                <Img src={targetPokemon.img_url}></Img>
                <h1 style={{ fontSize: "50px" }}>
                    {targetPokemon.korean_name}
                </h1>
                <p style={{ fontSize: "25px" }}>
                    타입: {targetPokemon.types.join(", ")}
                </p>
                <p style={{ fontSize: "25px" }}>{targetPokemon.description}</p>
            </DetailContainer>
            <BackButton
                onClick={() => {
                    navigate("/dex");
                }}
            >
                뒤로가기
            </BackButton>
        </Box>
    );
};

export default PokemonDetail;

const Box = styled.div`
    position: absolute;

    width: 700px;
    min-height: 700px;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
`;

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    width: 100%;
    height: 100%;

    overflow: hidden;

    padding-bottom: 50px;

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
        background: ${(props) => {
            if (props.color.length > 1) {
                return `linear-gradient(45deg, ${Type(props.color[0])},${Type(
                    props.color[1]
                )} )`;
            } else {
                return Type(props.color[0]);
            }
        }};

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
    bottom: 0px;
    left: 50%;

    transition: 300ms ease-in-out;
    padding: 20px;

    color: #f8f9fa;
    font-size: 20px;

    border: 2px solid #893a48;
    border-radius: 10px;
    background-color: #ff4d6d;

    box-shadow: 3px 8px 0px 0px #893a48;

    transform: translateX(-50%);

    &:hover {
        border: 2px solid #4c245a;
        background-color: blueviolet;
        box-shadow: 3px 8px 0px 0px #51255e;
    }

    &:active {
        bottom: -10px;
        box-shadow: 0px 0px 0px 0px #51255e;
    }
`;
