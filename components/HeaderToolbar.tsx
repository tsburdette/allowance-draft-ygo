const HeaderToolbar = (props: {}) => {
    return (
        <div className="bg-kaiba-blue-500 max-w-full flex rounded p-3 justify-between">
            <div className="flex space-x-5">
                <div className="">Main</div>
                <div className="">Collection</div>
                <div className="">Deck Builder</div>
                <div className="">Wins & Losses</div>
            </div>
            <div className="flex space-x-5">
                <div className="flex-none">Allowance: $20</div>
                <div className="flex-initial">Login</div>
            </div>
        </div>
    );
};

export default HeaderToolbar;
