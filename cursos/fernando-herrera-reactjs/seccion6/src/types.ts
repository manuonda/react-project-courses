export type Gif = {

    bitly_gif_url: string,
    bitly_url: string,
    content_url: string,
    embed_url: string,
    id: string,
    images: Array<Image>,
    import_datetime: string,
    title: string,
    url: string
   
}

export type Image = {
    url?:string
}


export type State = {
    data:[];
    loading:boolean;
}