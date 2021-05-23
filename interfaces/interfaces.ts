export interface ContextualHref {
    makeContextualHref: (extraQueryParams: { [key: string]: any }) => string
    returnHref: string
}
  
export interface CollectionData {
    id: string
    date: string
    title: string
    image: string
    contentHtml: string
}

export interface SaleTxData {
    txid: string,
    iconFrom: string,
    iconTo: string,
    status: string
}