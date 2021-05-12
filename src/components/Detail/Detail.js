import { useEffect, useState } from 'react';

import {getInfoCoin} from "../../services/coingecko";
import {Link, useHistory, useParams} from "react-router-dom";

import Title from "../Title/Title";

import './Detail.css';

function Detail() {

    const [ name, setName ] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (id) {
            getInfoCoin(id).then(coin => setName(coin.name));
            console.log(name);
        }
    }, [id])

    return(
        <div className={"Detail"}>
            <Title title={"CoinGecko - " + name }/>
            <Link to="/" className={"Detail__link"}>↖ Retour</Link>
            <h1 className={"Detail__name"}>{name}</h1>
        </div>
    )
}

export default Detail;