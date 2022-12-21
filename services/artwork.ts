import { Metadata } from './../types/Metadata';
import { Artwork } from '../types/Artwork';
import Folder from "../types/Folder";
import { getFolderList, getFileList, getSubfolderList } from "../lib/cloudinary/utils";
import { File } from '../types/File';
import { nthOccurrenceIndexOfString } from '../lib/utility';
import {v4 as uuidv4} from 'uuid';


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

  if(!(tag === "anteprima_galleria" || tag === "anteprima_home")){
    console.error("getPreviewArtwork Error : wrong tag used to search for cloudinary images");
    throw Error("getPreviewArtwork Error : wrong tag used to search for cloudinary images");
  }

  const fileList = await getFileList(folder, tag);

  // console.log("FOLDER: " + folder);
  // console.log("TAG: " + tag);
  // console.log(fileList);

  // this artwork is not intended to be in the home artworks preview
  if((fileList.total_count <= 1) && (tag === "anteprima_home"))
    return null;

  return parseFileList(fileList);
};

export const getArtworkInFolder = async (folder: string): Promise<Artwork> => {

  const imageFileList = new Array<File>();
  let metadata: Metadata = undefined;

  const fileList = await getFileList(folder);

  return parseFileList(fileList);
};

const parseFileList = async (fileList: any): Promise<Artwork> => {

  const imageFileList = new Array<File>();
  let metadata: Metadata = undefined;

  for(const element of fileList.resources){
        // metadata file
        if(element.format === "txt"){
          // retrieving info from txt file
          let dataString = await fetch(element.secure_url)
            .then((response) => response.text())
            .catch(reason => {
              console.error(reason);
              throw Error(reason);
            });

          // extracting the description in order to keep newLines
          const descBegin = nthOccurrenceIndexOfString(dataString, '"', 5);
          const descEnd = nthOccurrenceIndexOfString(dataString, '"', 8);
          // +2 in order to keep the final '",' characters
          let description: string = dataString.substring(descBegin, descEnd + 2);

          dataString = dataString.replace(description, '');

          description = description.replace('"descrizione" : "', '');
          description = description.replace('",', '');

          const dataJSON = JSON.parse(dataString);

          metadata = {
            title : dataJSON.titolo,
            description : description,
            date : dataJSON.data,
            materials : dataJSON.materiali,
            availability : dataJSON.disponibilita,
            dimensions : dataJSON.dimensioni
          }
        // image file
        } else {
          imageFileList.push({
            publicId: element.public_id,
            name: element.filename,
            extension: element.format,
            url: element.secure_url,
          });
        }
  }

  // missing data
  if(metadata === undefined){
    metadata = {
      title : "informazioni non disponibili",
      description : "informazioni non disponibili",
      date : "informazioni non disponibili",
      materials : "informazioni non disponibili",
      availability : "informazioni non disponibili",
      dimensions : "informazioni non disponibili"
    }
  }
  if(imageFileList.length < 1){
    imageFileList.push({
      publicId: uuidv4(),
      name: "no_image_available",
      extension: "png",
      url: "/no_image_available.png"
    })
  }

  return {
    imageFiles : imageFileList,
    data : metadata
  };

};