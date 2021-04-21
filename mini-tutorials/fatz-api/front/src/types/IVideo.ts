export interface IVideo {
   _id?: number | string | undefined;
   title: string;
   description: string;
   url: string;
   createdAt?: string | Date;
   updatedAt?: string | Date;
}