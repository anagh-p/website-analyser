document.addEventListener('click', function(e) {
    e = e || window.event;
    const clickedButton = e.target.id;
    chrome.tabs.getSelected(null, function(tab) {
      const currentURL = new URL(tab.url);
      destinationDecider(clickedButton, currentURL);
    });

}, false);

function destinationDecider(clickedButton, currentURL){
  var finalURL;
  switch (clickedButton) {
    case 'js-pagespeed':
      finalURL = `https://developers.google.com/speed/pagespeed/insights/?url=${currentURL}`
      navigateTo(finalURL);
      break;
    case 'js-dfp':
      finalURL = `${currentURL}?dfpdeb`
      navigateTo(finalURL);
      break;
    case 'js-structured-data':
      finalURL1 = `https://search.google.com/test/rich-results?url=${currentURL}`
      finalURL2 = `https://search.google.com/structured-data/testing-tool#url=${currentURL}`
      navigateTo(finalURL1);
      navigateTo(finalURL2);
      break;
    case 'js-amp':
      finalURL1 = `https://validator.ampproject.org/#url=${currentURL}`
      finalURL2 = `https://search.google.com/test/amp?url=${currentURL}`
      navigateTo(finalURL1);
      navigateTo(finalURL2);
      break;
    default:
  }
}

function navigateTo(finalURL){
  chrome.tabs.create({
    url: finalURL
  });
}
