function findBanner() {
  var elements = document.getElementsByClassName('lpiframeoverlay');

  if (elements.length > 0) {
    var banner = elements[0];
    console.log('found banner');
    console.log(banner);
    banner.parentNode.removeChild(banner);

    var spacer = document.querySelector('[id*="lptopspacer"]');

    if (spacer) {
      spacer.parentNode.removeChild(spacer);
    }
  }
}

setInterval(findBanner, 5000);
