import { getFolder } from "../services/artwork";
import Folder from "../types/Folder";

const WEBSITE_URL = "https://www.claudiobizzo.com";

function generateSiteMap(folders: Folder[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     <url>
        <loc>${WEBSITE_URL}/</loc>
        <image:image>
          <image:loc>${WEBSITE_URL}/homepage_main_img.png</image:loc>
        </image:image>
     </url>
     <url>
        <loc>${WEBSITE_URL}/artworks</loc>
     </url>
     <url>
        <loc>${WEBSITE_URL}/about</loc>
        <image:image>
          <image:loc>${WEBSITE_URL}/about_main_img.jpg</image:loc>
        </image:image>
        <image:image>
          <image:loc>${WEBSITE_URL}/about_lab_img.png</image:loc>
        </image:image>
     </url>
     <url>
        <loc>${WEBSITE_URL}/contact</loc>
     </url>
     <url>
        <loc>${WEBSITE_URL}/events</loc>
     </url>
     ${folders
       .map((folder) => {
         return `
      <url>
        <loc>${`${WEBSITE_URL}/artworks/${folder.name}`}</loc>
      </url>
      `;
       })
       .join("")}
   </urlset>
 `;
}

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export async function getServerSideProps({ res }) {
  let folders: Folder[] = [];

  // We make an API call to gather the URLs for our site
  try {
    folders = await getFolder(
      `${process.env.NEXT_PUBLIC_CLOUDINARY_MAIN_FOLDER}/LAVORI`
    );
  } catch (error) {
    console.error(error);
    throw error;
  }

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(folders);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
