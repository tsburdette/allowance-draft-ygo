import Image from 'next/image'
import HeaderToolbar from 'components/HeaderToolbar'
import DeckBuilderPane from 'components/DeckBuilderPane'

export default function Home() {
  return (
    <main className="m-3 space-y-3">
        <HeaderToolbar />
        <DeckBuilderPane />
    </main>
  )
}
