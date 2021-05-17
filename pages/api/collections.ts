import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { getCollectionData } from '../../lib/collections'

import { NextApiRequest, NextApiResponse } from 'next'
import { CollectionData } from "../../interfaces/interfaces"
import Collection from '../../components/Collection'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  
    const body = req.body
    res.status(200).json(
        coll1Data
    )
}

const collection1Html = 
`
<div>
    <p>Next.js has two forms of pre-rendering: <strong>Static Generation</strong> and <strong>Server-side Rendering</strong>. The difference is in <strong>when</strong> it generates the HTML for a page.</p>
    <ul>
        <li><strong>Static Generation</strong> is the pre-rendering method that generates the HTML at <strong>build time</strong>. The pre-rendered HTML is then <em>reused</em> on each request.</li>
        <li><strong>Server-side Rendering</strong> is the pre-rendering method that generates the HTML on <strong>each request</strong>.</li>
    </ul>
    <Text>Importantly, Next.js lets you <strong>choose</strong> which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.</Text>
</div>
`
const coll1Data: CollectionData = { 
    contentHtml: collection1Html, 
    date: "2021-05-28",  
    id: "mysticwave",
    image: "/card-wave2.svg",
    title: "Mystical waves"

}
