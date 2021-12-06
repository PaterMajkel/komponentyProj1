export function isNumeric(num) {
    if(typeof num == "number" || typeof num == "string") {
        if(!isNaN(num)) {
            return true;
        }
    }
    return false;
}

export function isValidString(str) {
    if(typeof str == "string") return true;
    return false;
}

export function validateEmail(mail) {
    if(mail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return true;
    return false;
}

export function isValidImgUrl(str) {
    let url;

    try {
        url = new URL(str);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

export function isValidDate(x) {
    return (typeof x.getMonth === 'function');
}