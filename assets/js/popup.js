document.addEventListener("DOMContentLoaded", function() {
    const popupButton = document.getElementById("share-btn");

    popupButton.addEventListener("click", function() {
        // Specify the URL and window properties
        const url = "share.html";
        const windowName = "PopupWindow";
        const windowFeatures = "width=600,height=400,resizable=yes";

        // Open the popup window
        window.open(url, windowName, windowFeatures);
    });
});
