export interface Artwork {
    readonly publicId: string;
    readonly name: string;
    readonly extension: string;
    readonly imageURL: string;

    readonly title?: string;
    readonly description?: string;
    readonly date?: string;
    readonly availability?: string;
    readonly materials?: string;
  }