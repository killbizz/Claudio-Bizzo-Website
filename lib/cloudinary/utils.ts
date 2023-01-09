import cloudinary from "./configuration";

export const getFileList = (folderPath: string, filter: string = ""): Promise<any> => {
    let expression: string = `folder:${folderPath}`;

    if (filter === "anteprima_home") {
        expression += ` AND ( format=txt OR tags=${filter} )`;
    }

    if (filter === "anteprima_galleria") {
        expression += ` AND ( format=txt OR filename:anteprima* )`;
    }

    if (filter === "anteprima_eventi") {
        expression += ` AND tags=anteprima_home `;
    }

    return cloudinary.search
        .expression(expression)
        //.with_field("context")
        // .max_results(3)
        .execute()
        .then((result: any) => {
            return result;
        })
        .catch((e) => {
            console.error(e);
            throw Error("Failed to get data from cloudinary");
    });
};

export const getFolderList = (): Promise<any> => {
    return cloudinary.api
        .root_folders()
        .then((result: any) => {
            return result;
        })
        .catch((e) => {
            console.error(e);
            throw Error("Failed to get list of folder from cloudinary");
    });
};

export const getSubfolderList = (folder: string): Promise<any> => {
    return cloudinary.api
        .sub_folders(folder)
        .then((result: any) => {
            return result;
        })
        .catch((e) => {
            console.error(e);
            throw Error(`Failed to get list of subfolder in ${folder} from cloudinary`);
    });
};