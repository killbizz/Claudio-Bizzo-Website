import { Artwork } from './../types/Artwork';
import Folder from "../types/Folder";
import { getFolderList, getImageList, getSubfolderList } from "./cloudinary/utils";


export const getFolder = async (folder: string = ""): Promise<Folder[]> => {
    const folderList =
      folder === "" ? await getFolderList() : await getSubfolderList(folder);
    const folders = new Array<Folder>();
  
    folderList.folders.forEach((element: { name: string; path: string }) => {
      const folderElement: Folder = {
        name: element.name,
        path: element.path,
      };
      folders.push(folderElement);
    });
  
    return folders;
  };
  
  export const getPreviewArtwork = async (folder: string, tag: string): Promise<Artwork> => {

    if(!(tag === "anteprima_galleria" || tag === "evidenza_home")){
      throw Error("getPreviewArtwork Error : wrong tag used to search for cloudinary images");
    }

    const imageList = await getImageList(folder, tag);

    if(imageList === undefined || imageList === null){
      throw Error("getPreviewArtwork Error : error retrieving imageList");
    }

    // console.log("folder: " + folder);
    // console.log("tag: " + tag);
    // console.log(imageList);

    if(imageList.total_count === 0){
      return null;
    }

    const context: any = imageList.resources[0].context;

    if(context === undefined || context === null){
      throw Error("getPreviewArtwork Error : context field is not present");
    }

    const artwork: Artwork = {
      publicId: imageList.resources[0].public_id,
      name: imageList.resources[0].filename,
      extension: imageList.resources[0].format,
      imageURL: imageList.resources[0].secure_url,

      title: context.titolo
    };
  
    return artwork;
  };
  
  export const getArtworkInFolder = async (folder: string): Promise<Artwork[]> => {
    const imageList = await getImageList(folder);
    const artworkList = new Array<Artwork>();
  
    imageList.resources.forEach(
      (element: {
        public_id: string;
        filename: string;
        format: string;
        secure_url: string;
        context: any;
      }) => {
        const artwork: Artwork = {
          publicId: element.public_id,
          name: element.filename,
          extension: element.format,
          imageURL: element.secure_url,

          title: element.context ? element.context.titolo : "",
          description: element.context ? element.context.descrizione : "",
          materials: element.context ? element.context.materiali : "",
          date: element.context ? element.context.data : "",
          availability: element.context ? element.context.disponibilita : "",
          dimensions: element.context ? element.context.dimensioni : ""
        };
        artworkList.push(artwork);
      }
    );
  
    return artworkList;
  };