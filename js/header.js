var header = '';
header += '<div class="ctn nav-div">';
    header += '<a class="logo" href="index.html"><img src="img/logo1.png"></a>';
    
    header += '<ul class="nav clearfix">';
        header += '<li><a href="meinbad.html">Mein Bad</a></li>';
        header += '<li><a href="meinkueche.html">Meine Küche</a></li>';
        header += '<li><a href="meinwohnbereich.html">Mein Wohnbereich</a></li>';
        header += '<li><a href="ihregaeste.html">Ihre Gäste</a></li>';
        header += '<li><a href="ihrbuero.html">Ihr Büro</a></li>';
        header += '<li><a href="https://www.mues-tec.de/shop/de/" target="_blank">Kaufen</a></li>';
        header += '<li><a href="kontakt.html">Kontakt</a></li>';
        header += '<li class="change-lang"><a href="English/index.html"><img src="img/ico/lang-uk.png"></a></li>';
    header += '</ul>';
header += '</div>';

document.getElementById('header').innerHTML = header;