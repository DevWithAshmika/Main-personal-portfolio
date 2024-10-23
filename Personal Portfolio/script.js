function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

document.getElementById("buyCoffee").addEventListener("click", function() {
    window.open("https://www.buymeacoffee.com/kumuduashmika", "_blank");
});

document.getElementById("youtube").addEventListener("click", function() {
    window.open("https://www.youtube.com/@Kumudu_ashmika", "_blank"); // Open in new tab
});

document.getElementById("downloadCV").addEventListener("click", function() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1E8b8UyJaVbov2oy9s1IAPaYRXD4F4Luo'; // Direct download link
    link.download = 'yourfile.pdf'; // Optional: Specify the name for the downloaded file
    document.body.appendChild(link); // Append to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Remove the link after download
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend developer", "backend developer", "web designer", "android developer", "web developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->