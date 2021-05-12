import {Link} from "react-router-dom";
import './Coin.css';

function Coin(props) {

    const { coin } = props;
    const { id, name, image, market_cap_rank, current_price } = coin;

    return(
        <Link to={ "/coin/"+ id} className={"Coin__link"}>
            <div className={"Coin__start"}>
                <div className={"Coin"}>
                    <div className={"Coin__id"}>{market_cap_rank}</div>
                    <img className={"Coin__icon"} src={image} alt={name}/>
                    <div className={"Coin__title"}>{name}</div>
                </div>
            </div>
            <div className={"Coin__end"}>
                <div className={"Coin"}>
                    <div className={"Coin__price"}>{current_price + ' €'}</div>
                </div>
            </div>
        </Link>
    )
}

export default Coin;