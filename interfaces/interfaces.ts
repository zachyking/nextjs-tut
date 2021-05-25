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

export interface TxStatusData {
    iconFrom: string,
    iconTo: string,
    status: string
}