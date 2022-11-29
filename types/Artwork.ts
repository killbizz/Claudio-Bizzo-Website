import { Metadata } from './Metadata';
import { File } from "./File";

export interface Artwork {

    imageFiles: File[];
    data?: Metadata;
  
}