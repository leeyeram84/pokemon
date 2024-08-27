# 포켓몬 마스터가 되겠어!

![pokemonMaster](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfawlVdkJDQ8UBvV5T1jLBRkEurK6cMIcltLAht43KeT7_25jg5pY3tq54DuyUOVkjMMM&usqp=CAU)

3번째 개인과제 : 포겟몬 도감 만들기

> ## 프로젝트 실행 방법
>
> ```
> yarn dev
> ```
>
> ## 필수 구현사항
>
> > ### 1.페이지 라우팅 설정하여 Home페이지와 Dex페이지 구성하기
> >
> > <p align="center">
> > <img src="https://i.postimg.cc/28jxTY3w/2024-08-27-2-47-19.png" align="center" >
> > <figcaption align="center">react-router-dom 설치 후 Router.jsx파일에서 Home과 Dex페이지의 라우팅을 설정</figcaption></p>
> > <img src="https://i.postimg.cc/9Mjd95vy/Home-Dex-ezgif-com-video-to-gif-converter.gif" align="center" >
> > <figcaption align="center">주소값이 바뀌며 제대로 적용 된 모습</figcaption></p>
>
> > ### 2. 컴포넌트 분리하여 작성하기
> >
> > <p align="center">
> > <img src="https://i.postimg.cc/5y5btv8w/2024-08-27-2-55-20.png" align="center" >
> > <p> - Dashboard : 상단 동행바 컴포넌트
> > <p> - PokemonCard : PokemonList에 개별적으로 뿌려질 카드 컴포넌트
> > <p> - PokemonDetail : 포켓몬 상세페이지 컴포넌트
> > <p> - PokemonList : mock.jsx에서 받아온 포켓몬 배열을 리스트화 하는 컴포넌트
>
> > ### 3. 상태 관리와 포켓몬 선택 기능 구현하기
> >
> > <p align="center">
> > <img src="https://i.postimg.cc/Nf00pCtT/2024-08-272-19-06-ezgif-com-video-to-gif-converter.gif" align="center" width="32%">
> >
> > -   <figcaption align="center">포켓몬 카드 하단 동행시키기 버튼 입력 시 동행포켓몬 등록</figcaption>
> > -   <figcaption align="center">상단 동행 포켓몬 카드의 몬스터볼에 넣기 버튼 입력 시 동행바에서 제거 </figcaption></p>
> >
> > ### 4. 알림 기능 구현
> >
> > <p align="center">
> > <img src="https://i.postimg.cc/5yHPpjcY/2024-08-276-36-44-ezgif-com-video-to-gif-converter.gif" align="center" width="32%">
> >
> > -   <figcaption align="center">동일한 포켓몬 선택 시 알람</figcaption></p>
> > -   <figcaption align="center">빈 동행칸이 없을 때 포켓몬 선택 시 알림</figcaption></p>
> >
> > ### 5. 디테일 페이지 구현
> >
> > <p align="center">
> > <img src="https://i.postimg.cc/xTpmngz2/2024-08-276-41-44-ezgif-com-video-to-gif-converter.gif" align="center" width="32%">
> >
> > -   <figcaption align="center">포켓몬 카드 클릭 시 해당 포켓몬의 디테일 페이지로 이동</figcaption></p>
> > -   <figcaption align="center">뒤로가기 클릭 시 Dex 페이지로 이동</figcaption></p>
> >
> > ### 6. Context API로 리팩터링하기
> >
> > <p align="center">
> > <img src="https://r2.jjalbot.com/2023/03/pKBP-p2RcO.jpeg" align="center" width="32%">
>
> > ### 트러블슈팅
> >
> > 필수 구현사항은 아니지만 포켓몬별 각 타입을 받아 디테일페이지의 카드 배경 컬러를 따로 적용하였다.
> >
> > <p>Type.jsx파일을 별개로 만들어 각 타입에 해당하는 컬러의 hex코드를 swich문으로 만들고, 디테일 페이지에서 props를 통해 각 포켓몬별 타입을 넘겨준다. 그 후 타입의 갯수에 따라 출력되는 컬러값이 다르기때문에 삼항 연상자를 통해 이를 구분해주어 컬러값을 반환해 출력한다.
> > <p> 이 과정에서 컬러값이 2개 이상 일 경우 배경색을 그라데이션으로 출력해야하는데, 타입값을 제대로 받아오지 못하거나, 2개 중 1개(첫번째 값)만을 반환하여 코드가 의도대로 작동하지 않았다.
> > <p>해당 부분의 코드이다
> > ```
> > <DetailContainer color={targetPokemon.types}>
> > const DetailContainer = styled.div`
> > // 디테일 카드 호버 시 스타일 변경
> >    &:hover {
> >     background: ${(props) => {
> >      if (props.color.length > 1) {
> >       return `linear-gradient(45deg, ${Type(props.color[0]> >)},${Type(
> >     props.color[1]
> >                )} )`;
> >         } else {
> >          return Type(props.color[0]);
> >   }}}};`

> > love my team
> > 이창현 님
> > 장종호 님
> > 류지원 님
> > 김태흔 님

도움을 주신 분들
정수희 님
노용철 님
권다정 님
박준호 님
신희범 님
외 다수
감사합니다

```

```
