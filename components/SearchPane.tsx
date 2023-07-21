import CardItem from 'components/CardItem'
import InlineButton from './common/InlineButton'

const SearchPane = (props) => {
    return (
        <div className="bg-kaiba-blue-800 min-w-[30%] p-5 rounded border-4 border-kaiba-blue-500">
            <div className="flex justify-between">
                <input placeholder="Search" className="rounded p-1 max-w-full"></input>
                <InlineButton text="Filter" />
            </div>
            <div className="font-bold my-3">TCGPlayer Prices</div>
            <div className="space-y-2">
                <CardItem name="Baby Dragon" price="0.30" />
                <CardItem name="Time Wizard" price="0.15" />
            </div>
        </div>
    )
}

export default SearchPane
