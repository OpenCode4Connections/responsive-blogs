// ==UserScript==
// @copyright    Copyright IBM Corp. 2017
// @name         Scott Good Bootstrap Injection
// @version      0.1
// @description  Injects Bootstrap into Blog pages to create a responsive design and a new look
// @namespace    http://ibm.com
// @author       Scott Good
// @include      *://apps.*.collabserv.com/blogs*
//  @run-at       document-end
//
// ==/UserScript==
var debug = false;
if (typeof (initialSearchBar) != "undefined") {
    var _51 = function () {
        var _52 = document.body.classList.contains("scloud3") ? document.getElementById("ocsBanner") : document.getElementById("lotusBanner");
        if (_52 && dojo.position(_52).h > 0) {
            if (debug) console.log("Good to go now");
            if(typeof(dojo) != "undefined") {
                if (debug) console.log('We have dojo at this point!')
                
                var linksFilenames = [
                    'SG_Bootstrap/blogs.css',
                    'SG_Bootstrap/ProjectMuse.css',
                    'SG_Bootstrap/ConnectionsBootstrap.css',
                    'SG_Bootstrap/bootstrap.min.css',
                    'SG_Bootstrap/blogsListing.css',
                    'SG_Bootstrap/coreDesign.css'
                ];
                for (var a = 0; a < linksFilenames.length; a++){
                    var link = document.createElement( "link" );
                    link.href = "/files/muse-static/" + linksFilenames[a];
                    link.type = "text/css";
                    link.rel = "stylesheet";
                    link.media = "screen,print";
                    document.getElementsByTagName( "head" )[0].appendChild( link );
                }
            }
            doBlogListingMods();
        } else {
            if (debug) console.log("Not ready yet");
            setTimeout(_51, 1);
        }
    };
    setTimeout(_51, 1);
}