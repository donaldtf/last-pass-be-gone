var LAST_PASS_BLOCK_COUNT = 'LastPassBannerBlockCount';

chrome.storage.local.get([LAST_PASS_BLOCK_COUNT], function(result) {
  var blockCount = result[LAST_PASS_BLOCK_COUNT];
  var blockCount = blockCount ? blockCount : 0;

  var newText = 'Total Banners Blocked: ' + blockCount;

  document.getElementById(LAST_PASS_BLOCK_COUNT).textContent = newText;
});
