import Link from "next/link";

const HeaderToolbar = (props: {}) => {
    return (
        <div className="bg-kaiba-blue-500 max-w-full flex rounded p-3 justify-between">
            <div className="flex space-x-5">
                {/* TODO: Make these links work */}
                <div className="">Main</div>
                <div className="">Collection</div>
                <Link href="/deckbuilder" className="">
                    Deck Builder
                </Link>
                <Link href="/shopping" className="">
                    Shopping
                </Link>
                <div className="">Wins & Losses</div>
            </div>
            <div className="flex space-x-5">
                {/* TODO: Make allowance pull from real db */}
                <div className="flex-none">Allowance: $20</div>
                <div className="flex-initial">Login</div>
            </div>
        </div>
    );
};

export default HeaderToolbar;
