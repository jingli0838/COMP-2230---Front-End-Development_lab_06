/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */
function showTopBanner() {
    var banner = document.getElementById("top-banner");

    const topBannerFlag = sessionStorage.getItem("lab_06");

    if(!topBannerFlag){
        banner.classList.remove("hide");
        setTimeout(function () {     // Delay to ensure the transition is triggered
        banner.classList.add("show");
        }, 50);
    }     
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {
    const cookieString = document.cookie;
    console.log("Current cookies:", cookieString); // Check all cookies

    if (!cookieString) {
        console.log("Displaying footer banner (no close cookie found).");
        document.getElementById("footer-banner").classList.remove("hide");
    } else {
        console.log("Footer banner cookie found, banner remains hidden");
    }
}
/**
 * Displays the modal by removing the 'hide' class from it.
 * Prevent Automatic Loading
 */
function showModal() {
    const showModalFlag = localStorage.getItem("lab_06");
    console.log("Current localStorage lab_06:", showModalFlag); // Debugging output
    if(!showModalFlag){
        document.getElementById("modal").classList.remove("hide");
    }    
}

/**
 * Hides the modal by adding the 'hide' class to it.
 * Stores a specific flag in the localStorage when the modal is closed
 */
function closeModal() {
    document.getElementById("modal").classList.add("hide");

    localStorage.setItem("lab_06", "modal_closed");
}



/**
 * Hides the top banner by adding the 'hide' class to it.
 * Add sessionStorage Feature
 */
function closeTopBanner() {

    document.getElementById("top-banner").classList.remove("show");

    document.getElementById("top-banner").classList.add("hide");

    sessionStorage.setItem("lab_06", "top_banner_closed");
}

/**
 * Hides the footer banner by adding the 'hide' class to it.
 * Add Cookie Feature
 */
function closeFooterBanner() {
    document.getElementById("footer-banner").classList.add("hide");
   
    document.cookie ='lab_06=footer_banner_closed';
}

// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
    .getElementById("footer-banner")
    .addEventListener("click", closeFooterBanner);

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 5000);

// Show the top banner after a delay of 2 seconds
setTimeout(showTopBanner, 2000);

// Show the modal after a delay of 4 seconds
setTimeout(showModal, 4000);

// Add a Clear Data Feature
function clearData(){
   // clear data in storage
    localStorage.clear();
    sessionStorage.clear();

    // clear data in cookie
    let pairs = document.cookie.split(";");
    
    for(const pair of pairs){
        let [key, value] = pair.split("=")
        document.cookie = key+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }   
}

document.getElementById("clear").addEventListener("click",clearData);




