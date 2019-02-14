var header = '';
header += '<div class="ctn nav-div">';
    header += '<a class="logo" href="index.html"><img src="../img/logo1.png"></a>';
    
    header += '<ul class="nav clearfix">';
        header += '<li><a href="meinbad.html">My Bathroom</a></li>';
        header += '<li><a href="meinkueche.html">My Kitchen</a></li>';
        header += '<li><a href="meinwohnbereich.html">My Living Area</a></li>';
        header += '<li><a href="ihregaeste.html">Your Guest</a></li>';
        header += '<li><a href="ihrbuero.html">Your Office</a></li>';
        // header += '<li><a href="produkte.html">Product</a></li>';
        header += '<li><a href="kontakt.html">Contact</a></li>';
        header += '<li class="change-lang"><a href="../index.html"><img src="../img/ico/lang-de.png"></a></li>';
    header += '</ul>';
header += '</div>';

document.getElementById('header').innerHTML = header;