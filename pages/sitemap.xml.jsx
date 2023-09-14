import { urls } from './api/urls'

export default (req, res) => {
  // Generate the sitemap XML dynamically
  const sitemapXml = `
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset
     xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
       http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
     ${urls
       .map(
         (url) => `
         <url>
           <loc>${url.loc}</loc>
           <lastmod>${url.lastmod}</lastmod>
           <priority>${url.priority}</priority>
         </url>
       `
       )
       .join('')}
   </urlset>
 `

  // Set the response header and send the XML content
  res.setHeader('Content-Type', 'application/xml')
  res.write(sitemapXml)
  res.end()
}
