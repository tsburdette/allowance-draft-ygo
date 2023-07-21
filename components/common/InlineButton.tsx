const InlineButton = (props) => {
    const { text, onClick } = props;
    return (
        <button
            onClick={onClick}
            className="px-3 rounded bg-kaiba-red-500 hover:bg-kaiba-red-600 active:bg-kaiba-red-500"
        >
            {text}
        </button>
    );
};

export default InlineButton;
