const BigButton = (props: { text: string; onClick?: () => void }) => {
    const { text, onClick } = props;
    return (
        <button
            onClick={onClick}
            className="px-5 py-3 rounded-full bg-kaiba-red-500 hover:bg-kaiba-red-600 active:bg-kaiba-red-500"
        >
            {text}
        </button>
    );
};

export default BigButton;
