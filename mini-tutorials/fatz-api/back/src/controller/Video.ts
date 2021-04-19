import { RequestHandler, Response, Request } from "express";
import video from "../model/video";
import { IVideo } from "../types/ivideo";
import Video from "../model/video";
import { Mongoose } from "mongoose";
import { ObjectID } from "mongodb";

export const all = async (req: Request, res: Response) => {
  try {
    const videos: IVideo[] = await Video.find({});
    res.status(200).json({ videos });
  } catch (error) {
    res.status(500);
  }
};

export const add = async (req: Request, res: Response): Promise<void> => {
  console.log("add post ");
  try {
    const { title, description, url } = req.body;
    const video: IVideo = new Video({
      title: title,
      description: description,
      url: url,
    });
    const result = await video.save();
    res.status(200).send({ result });
  } catch (error) {
    console.error("error");
    console.error(error);
    res.status(500);
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateVideo: IVideo | null = await Video.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({ updateVideo, message: "Update Video" });
  } catch (error) {
    res.status(500);
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    if (ObjectID.isValid(id)) {
      res.status(500).json({ message: "ID Invalidate" });
    } else {
      const result: IVideo | null = await Video.findByIdAndRemove({ _id: id });
      res.status(200).json({ message: "Delete Video" });
    }
  } catch (error) {
    res.status(500);
    throw error;
  }
};

export const get = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    console.log(`id : ${id}`);
    if (ObjectID.isValid(id)) {
      const objectId = new ObjectID(id);
      console.log(objectId);
      const video: IVideo | null = await Video.findById(objectId);
      res.status(200).json({ video });
    } else {
      res.status(500).json({ message: "ID invalidate" });
    }
  } catch (error) {
    //throw error;
    console.error(error);
    res.status(500);
  }
};
