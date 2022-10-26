import { getPreviewArtwork } from './../../services/artwork';
import { Artwork } from './../../types/Artwork';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const params = JSON.parse(req.body);

    let newArtworks: Artwork[] = [];

    for (let i = 0; i < params.folders.length; i++) {
        newArtworks.push(await getPreviewArtwork(params.folders[i].path));
    };

    return res.status(200).json(
        {
            newArtworks
        }
    );
}