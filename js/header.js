var header = '';
header += '<div class="ctn nav-div">';
    header += '<a class="logo" href="index.html"><img src="img/logo1.png"></a>';
    
    header += '<ul class="nav clearfix">';
        header += '<li><a href="meinbad.html">Mein Bad</a></li>';
        header += '<li><a href="meinkueche.html">Meine Küche</a></li>';
        header += '<li><a href="meinwohnbereich.html">Mein Wohnbereich</a></li>';
        header += '<li><a href="ihregaeste.html">Ihre Gäste</a></li>';
        header += '<li><a href="ihrbuero.html">Ihr Büro</a></li>';
        <!--header += '<li><a href="produkte.html">Produkte</a></li>';-->
        header += '<li><a href="kontakt.html">Kontakt</a></li>'
    header += '</ul>';

    header += '<div class="change-lang">';
        header += '<a href="English/index.html"><img src="img/ico/lang-uk.png"></a>';
    header += '</div>';
header += '</div>';

document.getElementById('header').innerHTML = header;