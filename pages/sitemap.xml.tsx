import Folder from "../types/Folder";

const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';
const WEBSITE_URL = "https://www.claudiobizzo.com/";

function generateSiteMap(folders: Folder[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${WEBSITE_URL}</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL + "gallery"}</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL + "about"}</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL + "contact"}</loc>
     </url>
     <url>
       <loc>${WEBSITE_URL + "events"}</loc>
     </url>
     ${folders
       .map((folder) => {
         return `
       <url>
           <loc>${`${WEBSITE_URL}/artwork/${folder.name}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;