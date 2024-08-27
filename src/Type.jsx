const pokemonType = (type) => {
    switch (type) {
        case "불꽃":
            return "#EF7374";
        case "물":
            return "#74ACF5";
        case "풀":
            return "#82C274";
        case "전기":
            return "#FCD659";
        case "벌레":
            return "#B8C26A";
        case "격투":
            return "#FFAC59";
        case "독":
            return "#B884DD";
        case "땅":
            return "#B88E6F";
        case "바위":
            return "#CBC7AD";
        case "비행":
            return "#ADD2F5";
        case "에스퍼":
            return "#F584A8";
        case "고스트":
            return "#A284A2";
        case "얼음":
            return "#81DFF7";
        case "드래곤":
            return "#8D98EC";
        case "페어리":
            return "#F5A2F5";
        default:
            return "#9DC1B7";
    }
};

export default pokemonType;
