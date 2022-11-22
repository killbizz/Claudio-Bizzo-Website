import cloudinary from "./configuration";

export const getImageList = (folderPath: string, tag: string = ""): Promise<any> => {
    let expression: string = `folder:${folderPath} OR format=txt`;

    if (tag !== "") {
        expression += ` AND tags=${tag}`;
    }

    return cloudinary.search
        .expression(expression)
        //.with_field("context")
        // .max_results(3)
        .execute()
        .then((result: any) => {
            return result;
        })
        .catch(() => {
            throw Error("Failed to get data from cloudinary");
    });
};

export const getFolderList = (): Promise<any> => {
    return cloudinary.api
        .root_folders()
        .then((result: any) => {
            return result;
        })
        .catch(() => {
            throw Error("Failed to get list of folder from cloudinary");
    });
};

export const getSubfolderList = (folder: string): Promise<any> => {
    return cloudinary.api
        .sub_folders(folder)
        .then((result: any) => {
            return result;
        })
        .catch(() => {
            throw Error(`Failed to get list of subfolder in ${folder} from cloudinary`);
    });
};