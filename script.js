document.addEventListener("DOMContentLoaded", function () {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    const cookieSettings = document.getElementById("cookieSettings");
    const cookieSettingsModal = document.getElementById("cookieSettingsModal");
    const closeSettings = document.getElementById("closeSettings");
    const savePreferences = document.getElementById("savePreferences");

    const cookieNecessary = document.getElementById("cookieNecessary");
    const cookieAnalytics = document.getElementById("cookieAnalytics");
    const cookieMarketing = document.getElementById("cookieMarketing");

   
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieConsent.style.display = "block";
    }

    acceptCookies.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsent.style.display = "none"; 
    });

    cookieSettings.addEventListener("click", function () {
        cookieSettingsModal.style.display = "flex";
    });

    closeSettings.addEventListener("click", function () {
        cookieSettingsModal.style.display = "none";
    });

    savePreferences.addEventListener("click", function () {
        const preferences = {
            necessary: cookieNecessary.checked,
            analytics: cookieAnalytics.checked,
            marketing: cookieMarketing.checked,
        };
        localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
        cookieSettingsModal.style.display = "none";
        console.log("Preferences saved:", preferences);
    });
});
