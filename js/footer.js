var footer = '';

footer += '<div class="ctn footer-div">';
    footer += '<div class="footer-menu">';
        footer += '<ul>';
            footer += '<li><a href="bad_tv.html">Bad TV</li>';
            footer += '<li>SG Series</li>';
            footer += '<li>EG Series</li>';
            footer += '<li>EP Series</li>';
            footer += '<li>DA Series</li>';
            <!--footer += '<li><a href="#">Bad TV</a></li>';-->
            <!--footer += '<li><a href="#">SG Series</a></li>';-->
            <!--footer += '<li><a href="#">EG Series</a></li>';-->
            <!--footer += '<li><a href="#">EP Series</a></li>';-->
            <!--footer += '<li><a href="#">DA Series</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Spiegel TV</li>';
            footer += '<li>SP-1080</li>';
            footer += '<li>SP-1280</li>';
            footer += '<li>SP-1480</li>';
            <!--footer += '<li><a href="#">Spiegel TV</a></li>';-->
            <!--footer += '<li><a href="#">SP-1080</a></li>';-->
            <!--footer += '<li><a href="#">SP-1280</a></li>';-->
            <!--footer += '<li><a href="#">SP-1480</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Küchen TV</li>';
            footer += '<li>KG-1850</li>';
            footer += '<li>KG-2200</li>';
            footer += '<li>KP-1850</li>';
            footer += '<li>KP-2200</li>';
            <!--ffooter += '<li><a href="#">Küchen TV</a></li>';-->
            <!--ffooter += '<li><a href="#">KG-1850</a></li>';-->
            <!--ffooter += '<li><a href="#">KG-2200</a></li>';-->
            <!--ffooter += '<li><a href="#">KP-1850</a></li>';-->
            <!--ffooter += '<li><a href="#">KP-2200</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Küchen Smart</li>';
            footer += '<li>KS-2150</li>';
            <!--footer += '<li><a href="#">Küchen Smart</a></li>';-->
            <!--footer += '<li><a href="#">KS-2150</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Smart Spiegel</li>';
            footer += '<li>SM-2150</li>';
            footer += '<li>SM-2360</li>';
            footer += '<li>SM-4300</li>';
            footer += '<li>ST-1160</li>';
            <!--footer += '<li><a href="#">Smart Spiegel</a></li>';-->
            <!--footer += '<li><a href="#">SM-2150</a></li>';-->
            <!--footer += '<li><a href="#">SM-2360</a></li>';-->
            <!--footer += '<li><a href="#">SM-4300</a></li>';-->
            <!--footer += '<li><a href="#">ST-1160</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Rahmen TV</li>';
            footer += '<li>RT-3200</li>';
            footer += '<li>RT-4300</li>';
            footer += '<li>RT-5500</li>';
            <!--footer += '<li><a href="#">Rahmen TV</a></li>';-->
            <!--footer += '<li><a href="#">R-3200</a></li>';-->
            <!--footer += '<li><a href="#">R-4300</a></li>';-->
            <!--footer += '<li><a href="#">R-5500</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li><a href="ueberuns.html">Über Uns</a></li>';
            footer += '<li>Referenzen</li>';
            footer += '<li>News</li>';
            footer += '<li><a target="_blank" href="http://blog.mues-tec.de">Blog</a></li>'
            footer += '<li>Qualität</li>';
            <!--footer += '<li><a href="#">Referenzen</a></li>';-->
            <!--footer += '<li><a href="#">Blog / News</a></li>';-->
            <!--footer += '<li><a href="#">Qualität</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Händler</li>';
            footer += '<li><a target="_blank" href="http://www.mues-tec.de/karte.html">Partner</a></li>';
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li><a href="download.html">Download</li>';
            footer += '<li>Quick Flyer</li>';
            footer += '<li>Katalog</li>';
            footer += '<li>Datenblätter</li>';
            <!--footer += '<li><a href="#">Quick Flyer</a></li>';-->
            <!--footer += '<li><a href="#">Katalog</a></li>';-->
            <!--footer += '<li><a href="#">Datenblätter</a></li>';-->
        footer += '</ul>';
     footer += '</div>';

    footer += '<div class="copyright">';
         footer += '<a href="#">Copyright © 2019 Mues-Tec. All rights reserved.</a></li>';
         footer += '<div>';
             footer += '<a href="impressum.html">Impressum</a></li>';
             footer += '<a href="datenschutz.html">Datenschutz</a></li>';
         footer += '</div>';

         footer += '<p>Presented By Mues-Tec</p>';
     footer += '</div>';
 footer += '</div>';

 footer += '<div class="go-top">TOP</div>';

 document.getElementById('footer').innerHTML = footer;

$(document).on('click', '.go-top', function(event) {
    $("html, body").animate({scrollTop: '0px'},800);
    $(".foot-bar-bg").fadeIn('slow');
});

$(window).scroll(function(event) {
    $(this).scrollTop() > 1080 ? $(".go-top").show() : $(".go-top").fadeOut('fast');
});
