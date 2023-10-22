function tabSelect(selectedTabId) {
    var contentDivs = document.querySelectorAll('.content');

    contentDivs.forEach(function(contentDiv) {
      contentDiv.style.display = 'none';
    });

    var selectedContentDiv = document.getElementById(selectedTabId.replace('tab', 'content'));
    if (selectedContentDiv) {
      selectedContentDiv.style.display = 'block';
    }
  }