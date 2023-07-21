import SearchPane from 'components/SearchPane'
import DeckPane from 'components/DeckPane'

const DeckBuilderPane = (props) => {
    return (
        <div className="bg-kaiba-blue-400 max-h-screen p-3 rounded flex space-x-3">
            <SearchPane />
            <DeckPane />
        </div>
    )
}

export default DeckBuilderPane;
