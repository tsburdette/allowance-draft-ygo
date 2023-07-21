const BigButton = (props) => {
    const {text, onClick} = props;
    return (
        <button className="px-5 py-3 rounded-full bg-kaiba-red-500 hover:bg-kaiba-red-600 active:bg-kaiba-red-500">{text}</button>
    )
}

export default BigButton;