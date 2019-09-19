var urlDe = location.href.replace('/Mues/en/', '/Mues/'),
    urlCh = location.href.replace('/Mues/en/', '/Mues/ch/');
urlDe = urlDe.replace('/mues-tec.com/', '/mues-tec.de/');
urlCh = urlCh.replace('/mues-tec.com/', '/mues-tec.ch/');

var header = '';
header += '<div class="ctn nav-div">';
header += '<a class="logo" href="index.html"><img src="img/logo1.png"></a>';

header += '<ul class="nav clearfix">';
header += '<li class="nav-li"><a class="nav-li-a" href="meinbad.html">My Bathroom</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="meinkueche.html">My Kitchen</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="meinwohnbereich.html">My Living Area</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="ihregaeste.html">Your Guest</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="ihrbuero.html">Your Office</a></li>';
header += '<li class="nav-li"><a class="nav-li-a" href="kontakt.html">Contact</a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="https://www.mues-tec.de/shop/en/" target="_blank"><img class="nav-li-a-img" src="img/ico/shop.png"></a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="' + urlDe + '"><img class="nav-li-a-img" src="img/ico/lang-de.png"></a></li>';
header += '<li class="nav-li"><a class="nav-li-a nav-li-aImg" href="' + urlCh + '"><img class="nav-li-a-img" src="img/ico/lang-ch.png"></a></li>';
header += '</ul>';
header += '</div>';

document.getElementById('header').innerHTML = header;