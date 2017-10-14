# responsive-blogs
Uses Bootstrap to bring a responsive UI experience IBM Connections blogs

## Overall goal
 
Connections has a non-responsive design. That is, the UI will not adjust to fit on smaller screens such as tablets and smartphones. My goal was to demonstrate that it's possible (using Connections Customizer) to break through that rather glaring limitation and convert Connections into a responsive UI using Bootstrap. However, even though that's pretty cool, technically, it is completely boring to look at, so I've also also totally redesigned the blog listing and blog pages to make them look VERY not-Connections-like.

Here is a [quick demonstration video](https://apps.na.collabserv.com/files/app/file/22b255fd-2e2d-4617-929a-e33c807ec909)
 
## How to demonstrate

As demonstrated in the video linked above, the customization here only applies to Lucille Suarez, and only when she is on either the blog listing page, or an individual blog entry. Therefore, my suggestion is you first show the blog listing page using Frank Adams (or someone else that's not Lucille Suarez) and point out (a) the standard look and feel and (b) the fact the page is not responsive. Then log out and log back in as Lucille Suarez.

As Lucille Suarez, navigate through the pages already demonstrated (which will look the same) until you arrive at the blogs listing, which will be very different. Point out that it's the same page with a different look and feel, then narrow the browser window to demonstrate that the page has become responsive. Again, see the video above for a demo of the demo.

## Why do this?
 
As much as anything, this demonstration was built to show a change of substance with Connections Customizer. Many of the early demos of Customizer have been quite simplistic and while, technically, they prove the concept, customers often want to see something with a little more "wow" factor. Hopefully this provides that.

The Customizer app imports three javascript files, injects Bootstrap tags into the page's HTML, then imports half a dozen CSS files to completely change the look and feel of the page. As a responsive web page, as the browser window narrows, the content alters itself appropriately, like this:
 

## Developer’s notes

Most of the UI you see here—images, colors, etc.—are controlled by the blogsListing.css file. There are only two images (LittleBoy.jpg, which is the background; and BrownPaperBG.png, which is behind the community name at the top of the page. These two images are included in the Git repository but are not served up from there. Instead, they are hosted externally. 

If you wish to change these images (or if, for some reason, the external site is not responding), you will need to change the URLs pointing to them in the blogsListing.css file. The LittleBoy.jpg background is referenced on line 10 of blogsListing.css, and the BrownPaperBG.png file can be found on line 235 (subject to change). Screen shots below show what you’re looking for:

