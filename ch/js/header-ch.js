var urlDe = location.href.replace('/Mues/ch/', '/Mues/'),
    urlEn = location.href.replace('/Mues/ch/', '/Mues/ch/');
urlDe = urlDe.replace('/mues-tec.ch/', '/mues-tec.de/');
urlEn = urlEn.replace('/mues-tec.ch/', '/mues-tec.com/');

var header = '';
header += '<div class="ctn nav-div">';
header += '<a class="logo" href="index.html"><img src="https://mues-tec.de/en/img/logo1.png"></a>';

header += '<ul class="nav clearfix">';
header += '<li class="nav-li"><a class="nav-li-a" href="meinbad.html">Mein Bad</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="meinkueche.html">Meine Küche</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="meinwohnbereich.html">Mein Wohnbereich</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="ihregaeste.html">Ihre Gäste</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="ihrbuero.html">Ihr Büro</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="kontakt.html">Kontakt</a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://www.mues-tec.ch/shop" target="_blank"><img class="nav-li-a-img" src="https://mues-tec.de/en/img/ico/shop.png"></a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://mues-tec.de/"><img class="nav-li-a-img" src="https://mues-tec.de/en/img/ico/lang-de.png"></a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://mues-tec.ch/"><img class="nav-li-a-img" src="https://mues-tec.de/en/img/ico/lang-ch.png"></a></li>';
header += '</ul>';
header += '</div>';

document.getElementById('header').innerHTML = header;