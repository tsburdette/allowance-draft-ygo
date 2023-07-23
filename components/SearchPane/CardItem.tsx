import InlineButton from "@/components/common/InlineButton";

const CardItem = (props: { name: string; price: number }) => {
    const USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <div className="justify-between flex">
            <div>{props.name}</div>
            <div className="flex space-x-3">
                <div>{USDollar.format(props.price)}</div>
                <InlineButton text="+" />
            </div>
        </div>
    );
};

export default CardItem;
