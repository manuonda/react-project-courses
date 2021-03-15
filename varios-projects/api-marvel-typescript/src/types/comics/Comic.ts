export interface iComic 
  {
        id: number,
        digitalId : number,
        title: string
        issueNumber: number
        variantDescription: string,
        description: string
        modified: Date
        isbn: string,
        upc : string,
        diamondCode: string,
        ean: string,
        issn: string,
        format: string,
        pageCount : number,
        resourceURI : string,
        urls: Array[],
        series (SeriesSummary, optional): A summary representation of the series to which this comic belongs.,
        variants (Array[ComicSummary], optional): A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
        collections (Array[ComicSummary], optional): A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
        collectedIssues (Array[ComicSummary], optional): A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
        dates (Array[ComicDate], optional): A list of key dates for this comic.,
        prices (Array[ComicPrice], optional): A list of prices for this comic.,
        thumbnail (Image, optional): The representative image for this comic.,
        images (Array[Image], optional): A list of promotional images associated with this comic.,
        creators (CreatorList, optional): A resource list containing the creators associated with this comic.,
        characters (CharacterList, optional): A resource list containing the characters which appear in this comic.,
        stories (StoryList, optional): A resource list containing the stories which appear in this comic.,
        events (EventList, optional): A resource list containing the events in which this comic appears.
        }
}