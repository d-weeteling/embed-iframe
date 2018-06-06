function changeIframeSrc() {
  var textElem = document.getElementById("url-field");
  var newSrc = textElem.value;
  var iframeElem = document.getElementById("child");
  var oldSrc = iframeElem.getAttribute("src");

  if (oldSrc !== newSrc)
    iframeElem.setAttribute("src", newSrc);
}