function detectBrowser() {
    if(typeof window === "undefined"){
        return
    }
    
    if (
        (navigator.userAgent.indexOf("Opera") ||
            navigator.userAgent.indexOf("OPR")) !== -1
    ) {
        return "Opera";
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        return "Chrome";
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        return "Safari";
    } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return "Firefox";
    } else {
        return "Unknown";
    }
}

export const isSafari = detectBrowser() === "Safari";
export const isChrome = detectBrowser() === "Chrome";
export const isFirefox = detectBrowser() === "Firefox";