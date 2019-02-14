var footer = '';

footer += '<div class="ctn footer-div">';
    footer += '<div class="footer-menu">';
        footer += '<ul>';
            footer += '<li>Bathroom TV</li>';
            footer += '<li>SG Series</li>';
            footer += '<li>EG Series</li>';
            footer += '<li>EP Series</li>';
            footer += '<li>DA Series</li>';
            <!--footer += '<li><a href="#">Bathroom TV</a></li>';-->
            <!--footer += '<li><a href="#">SG Series</a></li>';-->
            <!--footer += '<li><a href="#">EG Series</a></li>';-->
            <!--footer += '<li><a href="#">EP Series</a></li>';-->
            <!--footer += '<li><a href="#">DA Series</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Mirror TV</li>';
            footer += '<li>SP-1080</li>';
            footer += '<li>SP-1280</li>';
            footer += '<li>SP-1480</li>';
            <!--footer += '<li><a href="#">Mirror TV</a></li>';-->
            <!--footer += '<li><a href="#">SP-1080</a></li>';-->
            <!--footer += '<li><a href="#">SP-1280</a></li>';-->
            <!--footer += '<li><a href="#">SP-1480</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Kitchen TV</li>';
            footer += '<li>KG-1850</li>'
            footer += '<li>KG-2200</li>'
            footer += '<li>KP-1850</li>'
            <!--footer += '<li><a href="#">Kitchen TV</a></li>';-->
            <!--footer += '<li><a href="#">KG-1850</a></li>';-->
            <!--footer += '<li><a href="#">KG-2200</a></li>';-->
            <!--footer += '<li><a href="#">KP-1850</a></li>';-->
            <!--footer += '<li><a href="#">KP-2200</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Kitchen Smart</li>';
            footer += '<li>KS-2150</li>';
            <!--footer += '<li><a href="#">Kitchen Smart</a></li>';-->
            <!--footer += '<li><a href="#">KS-2150</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Smart Mirror</li>';
            footer += '<li>SM-2150</li>';
            footer += '<li>SM-2360</li>';
            footer += '<li>SM-4300</li>';
            footer += '<li>ST-1160</li>';
            <!--footer += '<li><a href="#">Smart Mirror</a></li>';-->
            <!--footer += '<li><a href="#">SM-2150</a></li>';-->
            <!--footer += '<li><a href="#">SM-2360</a></li>';-->
            <!--footer += '<li><a href="#">SM-4300</a></li>';-->
            <!--footer += '<li><a href="#">ST-1160</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Frame TV</li>';
            footer += '<li>R-3200</li>';
            footer += '<li>R-4300</li>';
            footer += '<li>R-5500</li>';
            <!--footer += '<li><a href="#">Frame TV</a></li>';-->
            <!--footer += '<li><a href="#">R-3200</a></li>';-->
            <!--footer += '<li><a href="#">R-4300</a></li>';-->
            <!--footer += '<li><a href="#">R-5500</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li><a href="ueberuns.html">About Us</a></li>';
            footer += '<li>References</li>';
            footer += '<li>News</li>';
            footer += '<li><a target="_blank" href="http://blog.mues-tec.de">Blog</a></li>';
            footer += '<li>Quality</li>';
            <!--footer += '<li><a href="#">References</a></li>';-->
            <!--footer += '<li><a href="#">Blog</a></li>';-->
            <!--footer += '<li><a href="#">News</a></li>';-->
            <!--footer += '<li><a href="#">Quality</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li>Dealer</li>';
            footer += '<li>Reseller</li>';
            <!--footer += '<li><a href="#">Reseller</a></li>';-->
        footer += '</ul>';

        footer += '<ul>';
            footer += '<li><a href="download.html">Download</li>';
            footer += '<li>Quick Flyer</li>';
            footer += '<li>Catalog</li>';
            footer += '<li>Data Sheets</li>';
            <!--footer += '<li><a href="#">Quick Flyer</a></li>';-->
            <!--footer += '<li><a href="#">Catalog</a></li>';-->
            <!--footer += '<li><a href="#">Data Sheets</a></li>';-->
        footer += '</ul>';
     footer += '</div>';

    footer += '<div class="copyright">';
         footer += '<a href="#">Copyright © 2019 Mues-Tec. All rights reserved.</a></li>';

         footer += '<div>';
             footer += '<a href="impressum.html">Legal</a></li>';
             footer += '<a href="datenschutz.html">Privacy Policy</a></li>';
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
