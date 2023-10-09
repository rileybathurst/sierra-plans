# Sierra Plans

Create PDF of plans that can be added to a strapi CMS online.
The plans are built in SVG for speed and compatability
The building through the web was for updateability

I cant build this online as it has private info on it.

1. Grab the SVG from the strapi CMS
2. Place a blank canvas
3. UseEffect to update the canvas with the SVG after it has been loaded as otherwise theres nothing to change
4. Base64 encode the SVG
5. Set that base string as a State
6. Use a class with a componentDidMount so it only loads once the canvas is ready
7. Build out the PDF with the info from the CMS and the SVG

## Issues

- working with a lot of pages without a build the cache gets lost, a lot of the time just restart the server of clean restart
- occassionaly something like this wont be on the home page or searchable just grab it from the slug http://localhost:8000/plan/123-midas-ct/
