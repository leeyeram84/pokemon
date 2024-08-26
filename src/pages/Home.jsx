import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="top"></div>
            <div className="line">
                <button
                    className="startButton"
                    onClick={() => {
                        navigate("/Dex");
                    }}
                >
                    포켓몬 도감 시작
                </button>
            </div>
        </div>
    );
};

export default Home;
