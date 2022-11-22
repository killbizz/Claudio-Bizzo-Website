import { Metadata } from './../types/Metadata';
import { Artwork } from '../types/Artwork';
import Folder from "../types/Folder";
import { getFolderList, getImageList, getSubfolderList } from "./cloudinary/utils";
import { File } from '../types/File';
import nthOccurrenceIndexOfString from '../lib/utility';


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

    const fileList = await getImageList(folder, tag);

    if(fileList === undefined || fileList === null){
      throw Error("getPreviewArtwork Error : error retrieving fileList");
    }

    console.log("folder: " + folder);
    console.log("tag: " + tag);
    console.log(fileList);

    if(fileList.total_count === 0){
      return null;
    }

    let imageFile: File = null;
    let data: Metadata = null;

    fileList.resources.forEach(
      async (element: {
        public_id: string;
        filename: string;
        format: string;
        secure_url: string;
      }) => {
        // metadata file
        if(element.format === "txt"){
          // retrieving info from txt file
          const dataString = await fetch(element.secure_url)
            .then((response) => response.text())
            .catch(reason => {throw Error(reason)})

          console.log(dataString);
          const dataJSON = JSON.parse(dataString);
          data = {
            title : dataJSON.titolo,
            description : dataJSON.descrizione,
            date : dataJSON.data,
            materials : dataJSON.materiali,
            availability : dataJSON.disponibilita,
            dimensions : dataJSON.dimensioni
          }
        // image file
        } else {
          imageFile = {
            publicId: element.public_id,
            name: element.filename,
            extension: element.format,
            url: element.secure_url,
          };
        }
      }
    );

    const artwork: Artwork = {
      imageFiles: Array<File>().concat(imageFile),
      data
    };
  
    return artwork;
  };
  
  export const getArtworkInFolder = async (folder: string): Promise<Artwork> => {

    const imageFileList = new Array<File>();
    let finalMetadata: Metadata = undefined;

    const fileList = await getImageList(folder);

    for(const element of fileList.resources){
          // metadata file
          if(element.format === "txt"){
            // retrieving info from txt file
            let dataString = await fetch(element.secure_url)
              .then((response) => response.text())
              .catch(reason => {throw Error(reason)});
  
            // extracting the description in order to keep newLines
            const descBegin = nthOccurrenceIndexOfString(dataString, '"', 5);
            const descEnd = nthOccurrenceIndexOfString(dataString, '"', 8);
            // +2 in order to keep the final '",' characters
            let description: string = dataString.substring(descBegin, descEnd + 2);
  
            dataString = dataString.replace(description, '');
  
            description = description.replace('"descrizione" : "', '');
            description = description.replace('",', '');
  
            const dataJSON = JSON.parse(dataString);
  
            finalMetadata = {
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
    
    return {
      imageFiles : imageFileList,
      data : finalMetadata
    };
  };