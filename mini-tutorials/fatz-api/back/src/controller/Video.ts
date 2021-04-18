import { RequestHandler , Response, Request} from "express";
import video from "../model/video";
import { IVideo } from "../types/ivideo";
import Video from "../model/video";
import { Resolver } from "dns";
import { RSA_NO_PADDING } from "constants";

export const all= async  (req:Request, res: Response) => {
  try{
      const videos : IVideo[] = await Video.find({});
      res.status(200).json({videos });
  } catch( error ) {
      res.status(500);
  }
}

export const add = async ( req: Request, res: Response) :Promise<void> => {

    try {
        const { title, description, url } = req.body; 
        const video: IVideo = new Video({
            title: title,
            description: description,
            url: url
        });
        const result = await  video.save();
        res.status(200).send({result});

    } catch (error) {
        res.status(500);+
    }
}

