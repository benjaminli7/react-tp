import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';


function DealsElement({deal, curConvert, cur})
{
    let salePrice = Math.round(deal.salePrice * curConvert);
    let normalPrice = Math.round(deal.normalPrice * curConvert);

    return(

        <div className="box">
            <h2> { deal.title } </h2>
            <img alt="gameImage"src={deal.thumb}/>
            <p><span className="salePrice"> { deal.salePrice == 0.00 ? 'Gratuit' : salePrice + ' ' + cur} <Badge variant="secondary"> -{ Math.round(deal.savings) }%</Badge></span> au lieu de </p>
            <span className="normalPrice">{normalPrice} {cur}</span>
            <p><b>Metacritic Score</b> : { deal.metacriticScore != 0 ? <span> { deal.metacriticScore } </span> : <span>Non défini</span>}</p>
            <hr/>
        </div>

    )
}

export default function DealsDisplay({deals, cur, prevCur}){

    const [currencyConvert, setCurrencyConvert] = useState(0);
    const API_KEY = "89b1aa8e50654d37b117";
    useEffect(() => {
        fetch(`https://free.currconv.com/api/v7/convert?q=${prevCur}_${cur}&compact=ultra&apiKey=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setCurrencyConvert(data[`${prevCur}_${cur}`]))
    }, [cur, prevCur])

    return(
        <div className="dealList">

            {deals?.map(deal => (
                <DealsElement deal={deal} curConvert={currencyConvert} cur={cur}/>
            ))}
        </div>
    )
}