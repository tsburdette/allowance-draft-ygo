const PaginatedCardList = (props) => {
    const { cardsPerPage, totalCards, currentPage, setCurrentPage } = props;

    const paginate = (current: number, end: number, neighbors: number) => {
        const leftNeighbors = current - neighbors,
            rightNeighbors = current + neighbors;
        let range = [],
            rangeWithDots = [],
            l;

        for (let i = 1; i <= end; i++) {
            if (i > 1 && i < end && i >= leftNeighbors && i <= rightNeighbors) {
                range.push(i);
            }
        }

        rangeWithDots.push(1);
        if (leftNeighbors > 1 + neighbors) {
            rangeWithDots.push("...");
        }
        rangeWithDots.push(...range);
        if (rightNeighbors <= end - neighbors) {
            rangeWithDots.push("...");
        }
        rangeWithDots.push(end);

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

export default PaginatedCardList;