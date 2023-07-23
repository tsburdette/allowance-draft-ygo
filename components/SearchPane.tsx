"use client";

import { useEffect, useState, useRef } from "react";

import CardItem from "components/CardItem";
import InlineButton from "./common/InlineButton";

const SearchPane = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const PaginatedCardList = (props) => {
        const { cardsPerPage, totalCards, currentPage, setCurrentPage } = props;

        const paginationContainerRef = useRef(null);

        const paginate = (current: number, end: number, neighbors: number) => {
            const leftNeighbors = current - neighbors,
                rightNeighbors = current + neighbors;
            let range = [],
                rangeWithDots = [],
                l;

            for (let i = 1; i <= end; i++) {
                if (
                    i > 1 &&
                    i < end &&
                    i >= leftNeighbors &&
                    i <= rightNeighbors
                ) {
                    range.push(i);
                }
            }

            rangeWithDots.push(1)
            if (leftNeighbors > 1 + neighbors) {
                rangeWithDots.push("...");
            }
            rangeWithDots.push(...range)
            if (rightNeighbors <= end - neighbors) {
                rangeWithDots.push("...");
            }
            rangeWithDots.push(end)

            return rangeWithDots;
        };

        const pageNumbers = paginate(
            currentPage,
            Math.ceil(totalCards / cardsPerPage),
            1
        );

        const handleClick = (pageNumber) => {
            if (typeof pageNumber === "number") {
                setCurrentPage(pageNumber);
            }
        };

        return (
            <div
                className="inline-flex w-full place-content-center"
                ref={paginationContainerRef}
            >
                {pageNumbers.map((pageNumber, index) => {
                    return pageNumber !== currentPage ? (
                        <button
                            className="py-1 px-3 m-1 rounded-md bg-kaiba-red-500 hover:bg-kaiba-red-600 active:bg-kaiba-red-500"
                            key={index}
                            onClick={() => handleClick(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ) : (
                        <button
                            className="py-1 px-3 m-1 rounded-md bg-kaiba-red-700 hover:bg-kaiba-red-800 active:bg-kaiba-red-700"
                            key={index}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
        );
    };

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        try {
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
                ></input>
                <InlineButton text="Filter" />
            </div>
            <div className="font-bold my-3">TCGPlayer Prices</div>
            <div className="space-y-2 mb-4">
                {cardData
                    .slice((currentPage - 1) * 20, currentPage * 20)
                    .map((card) => {
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
