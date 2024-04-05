import { getWikiMedia } from '@/lib/getWikiMedia'
import React from 'react'
import Item from './components/Item'

type Props = {
    params:{
        searchTerm:string
    }
}

export async function generateMetadata({ params: { searchTerm } }: Props) {
    const wikiData: Promise<SearchResult> = getWikiMedia(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}

const page = async ({params:{searchTerm}}: Props) => {
   const wikidata : Promise<SearchResult>=  getWikiMedia(searchTerm)
   const data = await wikidata
   const results: Result[] | undefined = data?.query?.pages

  return (
    <main className="bg-slate-200 container mx-auto my-3 py-2 min-h-screen">
    {results
        ? Object.values(results).map(result => {
            return <Item key={result.pageid} result={result} />
        })
        : <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
    }
</main>
  )
}

export default page