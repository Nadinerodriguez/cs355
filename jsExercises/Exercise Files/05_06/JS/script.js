
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");


captionElement.append(altText);

FEATURED.append(captionElement);

THEIMAGE.setAttribute("alt", "");
