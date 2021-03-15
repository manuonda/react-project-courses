import  { iComicDataContainer } from'./ComicDataContainer';

export interface iComicDataWrapper{
    code: number, 
    status: string, 
    copyright: string,
    attributionText: string,
    attributionHTML: string, 
    data: iComicDataContainer,
    etag: string
}

