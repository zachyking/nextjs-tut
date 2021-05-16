import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import { getCollectionData } from '../../lib/collections'

import { NextApiRequest, NextApiResponse } from 'next'
import { CollectionData } from "../../interfaces/interfaces"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  
    if(!req.body) res.status(400).json({ data: "not found"})
  
    const body = JSON.stringify(req.body)
    res.status(200).json(
        await getCollectionData(body)
    )
}

export async function getCollectionDataa(id: string) {
    const fullPath = path.join("http://localhost:3000/collections", `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...(matterResult.data as { date: string; title: string; image: string })
    }
  }