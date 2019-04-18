var LAST_PASS_BLOCK_COUNT = 'LastPassBannerBlockCount';

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

setInterval(findBanner, 1000);
