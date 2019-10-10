var footer = '';

footer += '<div class="ctn footer-div">';
footer += '<div class="footer-menu">';
footer += '<ul>';
footer += '<li><a href="bad_tv.html">Bad TV</li>';
footer += '<li>SG Series</li>';
footer += '<li>EG Series</li>';
footer += '<li>EP Series</li>';
footer += '<li>DA Series</li>';
footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="spiegel_tv.html">Spiegel TV</li>';
footer += '<li>SP-1080</li>';
footer += '<li>SP-1280</li>';
footer += '<li>SP-1480</li>';

footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="kuechen_tv.html">Küchen TV</li>';
footer += '<li>KG-1850</li>';
footer += '<li>KG-2200</li>';
footer += '<li>KP-1850</li>';
footer += '<li>KP-2200</li>';

footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="kuechen_smart.html">Küchen Smart</li>';
footer += '<li>KS-2151</li>';
footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="smart_spiegel.html">Smart Spiegel</li>';
footer += '<li>SM-2151</li>';
footer += '<li>SM-2361</li>';
footer += '<li>SM-2101</li>';
footer += '<li>SM-4301</li>';
footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="rahmen_tv.html">Rahmen TV</li>';
footer += '<li>RT-3200</li>';
footer += '<li>RT-4300</li>';
footer += '<li>RT-5500</li>';
footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="ueberuns.html">Über Uns</a></li>';
footer += '<li>Referenzen</li>';
footer += '<li>News</li>';
footer += '<li><a target="_blank" href="http://blog.mues-tec.de">Blog</a></li>';
footer += '<li>Qualität</li>';
footer += '</ul>';

footer += '<ul>';
footer += '<li>Händler</li>';
footer += '<li><a target="_blank" href="http://www.mues-tec.de/reseller.html">Partner</a></li>';
footer += '</ul>';

footer += '<ul>';
footer += '<li><a href="download.html">Download</li>';
footer += '<li>Quick Flyer</li>';
footer += '<li>Katalog</li>';
footer += '<li>Datenblätter</li>';
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
footer += '<a id="buy" href="https://www.mues-tec.ch/shop" target="_blank">BUY</a>';

document.getElementById('footer').innerHTML = footer;

$(document).on('click', '.go-top', function (event) {
    $("html, body").animate({
        scrollTop: '0px'
    }, 800);
    $(".foot-bar-bg").fadeIn('slow');
});

$(window).scroll(function (event) {
    $(this).scrollTop() > 1080 ? $(".go-top").show() : $(".go-top").fadeOut('fast');
});