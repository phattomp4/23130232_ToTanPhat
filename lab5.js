function openTab(tabId) {
    // Hide all tab content
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.tab-link');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show current tab and add active class
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}