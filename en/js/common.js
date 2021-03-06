var cookieHTML = '';
cookieHTML += '<div class="cookie-pop">';
    cookieHTML += '<p>';
        cookieHTML += 'Diese Webseite verwendet Cookies.<br>';
        cookieHTML += 'Durch die Benutzung dieser Seite stimmen Sie dem zu.<br>';
        cookieHTML += 'Informationen darüber, wie wir Cookies verwenden, erhalten<br>';
        cookieHTML += 'Sie.';
    cookieHTML += '</p>';

    cookieHTML += '<div class="cookie-btn">';
        cookieHTML += '<a class="accept-cookie" href="javascript:;">Akzeptieren</a>';
        cookieHTML += '<a href="datenschutz.html">Mehr Informationen</a>';
    cookieHTML += '</div>';
cookieHTML += '</div>';

var cookieHTML_en = '';
cookieHTML_en += '<div class="cookie-pop">';
    cookieHTML_en += '<p>';
        cookieHTML_en += 'This website use cookies to give you the best,<br>';
        cookieHTML_en += 'most relevant experience.<br>';
        cookieHTML_en += 'Using this website means you are OK with this.<br>';
    cookieHTML_en += '</p>';

    cookieHTML_en += '<div class="cookie-btn">';
        cookieHTML_en += '<a class="accept-cookie" href="javascript:;">OK</a>';
        cookieHTML_en += '<a href="datenschutz.html">More information</a>';
    cookieHTML_en += '</div>';
cookieHTML_en += '</div>';

try {
    document.getElementById('cookie-bg').innerHTML = cookieHTML;
} catch(e) {
    document.getElementById('cookie-bg-en').innerHTML = cookieHTML_en;
}

function pageCookie(pageName) {
    var page = getCookie(pageName);
    if (page) {
        $('.cookie-bg').css('display', 'none');
    } else {
        $('.cookie-bg').css('display', 'flex');
    }

    $(document).on('click', '.accept-cookie', function(event) {
        setCookie(pageName, true);
        $('.cookie-bg').css('display', 'none');
    });
}


// 创建cookie
function setCookie(name, value, expires, path, domain, secure) {
    var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires instanceof Date) {
        cookieText += '; expires=' + expires;
    }
    if (path) {
        cookieText += '; path=' + path;
    }
    if (domain) {
        cookieText += '; domain=' + domain;
    }
    if (secure) {
        cookieText += '; secure';
    }
    document.cookie = cookieText;
}

// 获取cookie
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + '=';
    var cookieStart = document.cookie.indexOf(cookieName);
    var cookieValue = null;
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(';', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }
    return cookieValue;
}

// 删除cookie
function unsetCookie(name) {
    document.cookie = name + "= ; expires=" + new Date(0);
}
