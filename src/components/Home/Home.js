import { Fragment } from 'react';

import useCoins from "../../hooks/useCoins";

import Coin from "../Coin/Coin";
import Title from '../Title/Title';

function Home() {

    const [coins, setCoins] = useCoins();

    const list = coins.map((coin) => (
        <Coin
            coin={coin}
            key={coin.id}
        />
    ));

    return(
        <>
            <Title title="CoinGecko"/>
            {list}
        </>
    );
}

export default Home;