# Sierra Plans

Create PDF of plans that can be added to a strapi CMS online.
The plans are built in SVG for speed and compatability
The building through the web was for updateability

I cant build this online as it has private info on it.

Im kinda confused by the process but in the end it works.

1. Grab the SVG from the strapi CMS
2. Place a blank canvas
3. UseEffect to update the canvas with the SVG after it has been loaded as otherwise theres nothing to change
4. Base64 encode the SVG
5. Set that base string as a State
6. Use a class with a componentDidMount so it only loads once the canvas is ready
7. Build out the PDF with the info from the CMS and the SVG