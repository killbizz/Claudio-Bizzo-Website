import { Metadata } from './Metadata';
import { File } from "./File";

export interface Artwork {

    readonly imageFiles: File[];
    readonly data?: Metadata;
  
}