'use client'

import CardItem from 'components/CardItem'
import InlineButton from './common/InlineButton'

import { useEffect, useState } from 'react'

const SearchPane = (props) => {
    const PaginatedCardList = (props) => {
        return (

        )
    }

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        try {
            const res = fetch(
                'https://db.ygoprodeck.com/api/v7/cardinfo.php?format=Goat',
            )
            .then(response => response.json())
            .then((data) => {
                setCardData(data.data)
            });
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div className="bg-kaiba-blue-800 min-w-[30%] p-5 rounded border-4 border-kaiba-blue-500">
            <div className="flex justify-between">
                <input placeholder="Search" className="rounded p-1 max-w-full"></input>
                <InlineButton text="Filter" />
            </div>
            <div className="font-bold my-3">TCGPlayer Prices</div>
            <div className="space-y-2">
                {cardData.map((card) => {
                    return (
                        <CardItem key={card.name} name={card.name} price={card.card_prices[0].tcgplayer_price} />
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPane
