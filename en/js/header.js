// var urlEn = location.href.replace('/Mues/', '/Mues/en/'),
//     urlCh = location.href.replace('/Mues/', '/Mues/ch/');
// urlEn = urlEn.replace('/mues-tec.de/', '/mues-tec.com/');
// urlCh = urlCh.replace('/mues-tec.de/', '/mues-tec.ch/');

var url = location.href,
    urlEn = url.replace('/mues-tec.de/', '/mues-tec.com/'),
    urlCh = url.replace('/mues-tec.de/', '/mues-tec.ch/');

var header = '';
header += '<div class="ctn nav-div">';
header += '<a class="logo" href="index.html"><img src="en/img/logo1.png"></a>';

header += '<ul class="nav clearfix">';
header += '<li class="nav-li"><a class="nav-li-a" href="meinbad.html">Mein Bad</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="meinkueche.html">Meine Küche</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="meinwohnbereich.html">Mein Wohnbereich</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="ihregaeste.html">Ihre Gäste</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="ihrbuero.html">Ihr Büro</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="kontakt.html">Kontakt</a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://www.mues-tec.de/shop/de/" target="_blank"><img class="nav-li-a-img" src="en/img/ico/shop.png"></a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://mues-tec.com/"><img class="nav-li-a-img" src="en/img/ico/lang-uk.png"></a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://mues-tec.ch/"><img class="nav-li-a-img" src="en/img/ico/lang-ch.png"></a></li>';
header += '</ul>';
header += '</div>';

document.getElementById('header').innerHTML = header;