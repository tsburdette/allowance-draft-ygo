"use client";

import { useEffect, useState } from "react";

import CardItem from "@/components/SearchPane/CardItem";
import InlineButton from "@/components/common/InlineButton";
import PaginatedCardList from "@/components/SearchPane/PaginatedCardList";

const SearchPane = (props: {}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        try {
            // TODO: Maybe pull out this URL somewhere
            const res = fetch(
                "https://db.ygoprodeck.com/api/v7/cardinfo.php?format=Goat"
            )
                .then((response) => response.json())
                .then((data) => {
                    setCardData(data.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <div className="bg-kaiba-blue-800 min-w-[30%] p-5 rounded border-4 border-kaiba-blue-500">
            <div className="flex justify-between">
                <input
                    placeholder="Search"
                    className="rounded p-1 max-w-full"
                />
                {/* TODO: Make filter button work */}
                <InlineButton text="Filter" />
            </div>
            <div className="font-bold my-3">TCGPlayer Prices</div>
            <div className="space-y-2 mb-4">
                {cardData
                    .slice((currentPage - 1) * 20, currentPage * 20)
                    .map((card: any) => {
                        return (
                            <CardItem
                                key={card.name}
                                name={card.name}
                                price={card.card_prices[0].tcgplayer_price}
                            />
                        );
                    })}
            </div>
            <PaginatedCardList
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                cardsPerPage={20}
                totalCards={cardData.length}
            />
        </div>
    );
};

export default SearchPane;
