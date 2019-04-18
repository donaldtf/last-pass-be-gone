// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

var LAST_PASS_BLOCK_COUNT = 'LastPassBannerBlockCount';
var interval = setInterval(findBanner, 500);

function handleVisibilityChange() {
  if (document[hidden]) {
    clearInterval(interval);
  } else {
    findBanner();
    var interval = setInterval(findBanner, 500);
  }
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);

function findBanner() {
  var elements = document.getElementsByClassName('lpiframeoverlay');

  if (elements.length > 0) {
    var banner = elements[0];
    banner.parentNode.removeChild(banner);

    var spacer = document.querySelector('[id*="lptopspacer"]');
    if (spacer) {
      spacer.parentNode.removeChild(spacer);
    }

    chrome.storage.local.get([LAST_PASS_BLOCK_COUNT], function(result) {
      var blockCount = result[LAST_PASS_BLOCK_COUNT];

      var blockCount = blockCount ? blockCount : 0;
      blockCount += 1;

      chrome.storage.local.set({ [LAST_PASS_BLOCK_COUNT]: blockCount });
    });
  }
}
