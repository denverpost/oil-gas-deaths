var href = location.href.split('/');
href.pop();
var adPathRoot = href.join('/') + '/';
var body = document.body, html = document.documentElement;
var docHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
var swapped = false;
var adsloaded = [];
/* THIS IS CONFIG DATA SPECIFIC TO SITE */
var showAds = true; //show slide-up leaderboards at bottom
var slideAds = 3; //number of times to slide up a leaderboard
var titleFade = true; //whether to fade the Denver Post logo in the top-bar to show the "DP" and a text title

function revealSocial(type,link,title,image,desc,twvia,twrel) {
    title = typeof title !== 'undefined' ? title : false;
    image = typeof image !== 'undefined' ? image : false;
    desc = typeof desc !== 'undefined' ? desc : false;
    twvia = typeof twvia !== 'undefined' ? twvia.toString().replace('@','') : false;
    twrel = typeof twrel !== 'undefined' ? twrel.toString().replace('@','') : false;
    //type can be twitter, facebook or gplus
    var srcurl = '';
    if (type == 'twitter') {
        srcurl = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent(title).replace('|','%7c') + '&url=' + link + '&via=' + twvia + '&related=' + twrel;
    } else if (type == 'facebook') {
        srcurl = 'http://www.facebook.com/sharer/sharer.php?s=100&p[url]=' + link + '&p[images][0]=' + image + '&p[title]=' + encodeURIComponent(title).replace('|','%7c') + '&p[summary]=' + encodeURIComponent(desc).replace('|','%7c');
    } else if (type == 'gplus') {
        srcurl = 'https://plus.google.com/share?url=' + link;
    }
    console.log(srcurl);
    if (srcurl.length > 1) {
        window.open(srcurl, type, 'left=60,top=60,width=500,height=500,toolbar=1,resizable=1').focus();
    }
    return false;
}

var videoButtonBack;

function eachButton(button,i) {
    $(button[i]).siblings().each(function(){
        button[i].style.backgroundColor = '#fff';
        document.getElementById('lessontitle').style.visibility = 'hidden';
        document.getElementById('lessontitle').innerHTML = '';
    });
    button[i].style.backgroundColor = '#bbb';
    document.getElementById('lessontitle').innerHTML = button[i].getAttribute('data-text');
    document.getElementById('lessontitle').style.visibility = 'visible';
    var buttonDelay = button[i];
    videoButtonBack = setTimeout(function() {
        buttonDelay.style.backgroundColor = '#fff';
        document.getElementById('lessontitle').style.visibility = 'hidden';
        document.getElementById('lessontitle').innerHTML = '';
        if (i < button.length) {
            eachButton(button,i+1);
        } else {
            video.load();
        }
    }, parseInt(button[i].getAttribute('data-length')));
}

function playFragment() {
    var video, sources, nav, buttons;
    video = document.querySelector('video#lessons');
    sources = video.getElementsByTagName('source');
    nav = document.querySelector('#lessonnav');
    buttons = nav.getElementsByTagName('button');
 
    for (var i = buttons.length - 1; i >= 0; i--) {
        buttons[i].addEventListener('click', function() {
            for (var i = sources.length - 1; i >= 0; i--) {
                sources[i].setAttribute(
                    'src', (sources[i].getAttribute('data-original')
                    .concat('#t=' + this.getAttribute('data-start'))));
            };
            video.load();
            video.play();
            $(this).siblings().each(function(){
                this.style.backgroundColor = '#fff';
                document.getElementById('lessontitle').style.visibility = 'hidden';
                document.getElementById('lessontitle').innerHTML = '';
            });
            this.style.backgroundColor = '#bbb';
            document.getElementById('lessontitle').innerHTML = this.getAttribute('data-text');
            document.getElementById('lessontitle').style.visibility = 'visible';
            var buttonDelay = this;
            setTimeout(function() {
                buttonDelay.style.backgroundColor = '#fff';
                document.getElementById('lessontitle').style.visibility = 'hidden';
                document.getElementById('lessontitle').innerHTML = '';
            }, parseInt(this.getAttribute('data-length')));
            if ( $('#lessonplaypause').hasClass('lessonplay') ) {
                $('#lessonplaypause').addClass('lessonpause').removeClass('lessonplay');
            }
        });
    };

    $('#lessonplaypause').on('click',function(){
        if ( $(this).hasClass('lessonplay') ) {
            $(this).addClass('lessonpause').removeClass('lessonplay');
            for (var i = sources.length - 1; i >= 0; i--) {
                sources[i].setAttribute(
                    'src', (sources[i].getAttribute('data-original')
                    .concat('#t=' + this.getAttribute('data-start'))));
            };
            video.load();
            video.play();
            eachButton(buttons,0);
        } else {
            $(this).addClass('lessonplay').removeClass('lessonpause');
            video.load();
            clearTimeout(videoButtonBack);
            $(buttons).each(function(){
                this.style.backgroundColor = '#fff';
                document.getElementById('lessontitle').style.visibility = 'hidden';
                document.getElementById('lessontitle').innerHTML = '';
            });
        }
    });
}
playFragment();

var buildButtonBack;

function eachBuildButton(button,i) {
    $(button[i]).siblings().each(function(){
        button[i].style.backgroundColor = '#fff';
        document.getElementById('builddate').style.visibility = 'hidden';
        document.getElementById('builddate').innerHTML = '';
    });
    button[i].style.backgroundColor = '#bbb';
    document.getElementById('builddate').innerHTML = button[i].getAttribute('data-text');
    document.getElementById('builddate').style.visibility = 'visible';
    var buttonDelay = button[i];
    document.getElementById('buildimg').src = './img/build/' + button[i].getAttribute('data-img') + '.jpg';
    buildButtonBack = setTimeout(function() {
        buttonDelay.style.backgroundColor = '#fff';
        document.getElementById('builddate').style.visibility = 'hidden';
        document.getElementById('builddate').innerHTML = '';
        if (i < button.length - 1) {
            eachBuildButton(button,i+1);
        } else {
            $('#buildplaypause').addClass('buildplay').removeClass('buildpause');
            clearTimeout(buildButtonBack);
            document.getElementById('builddate').src = './img/build/build-title.jpg';
            document.getElementById('builddate').innerHTML = '';
        }
    }, 2000);
}

function playBuilder() {
    var image, nav, buttons, origin;
    image = document.querySelector('#buildimg');
    origin = image.src;
    nav = document.querySelector('#buildnav');
    buttons = nav.getElementsByTagName('button');
 
    for (var i = buttons.length - 1; i >= 0; i--) {
        buttons[i].addEventListener('click', function() {
            image.src = './img/build/' + this.getAttribute('data-img') + '.jpg';
            $(this).siblings().each(function(){
                this.style.backgroundColor = '#fff';
                document.getElementById('builddate').style.visibility = 'hidden';
                document.getElementById('builddate').innerHTML = '';
            });
            this.style.backgroundColor = '#bbb';
            document.getElementById('builddate').innerHTML = this.getAttribute('data-text');
            document.getElementById('builddate').style.visibility = 'visible';
            var buttonDelay = this;
            setTimeout(function() {
                buttonDelay.style.backgroundColor = '#fff';
                image.src = './img/build/' + this.getAttribute('data-img') + '.jpg';
                document.getElementById('builddate').style.visibility = 'hidden';
                document.getElementById('builddate').innerHTML = '';
            }, 2000);
        });
    };

    $('#buildplaypause').on('click',function(){
        if ( $(this).hasClass('buildplay') ) {
            $(this).addClass('buildpause').removeClass('buildplay');
            image.src = './img/build/' + this.getAttribute('data-img') + '.jpg';
            eachBuildButton(buttons,0);
        } else {
            $(this).addClass('buildplay').removeClass('buildpause');
            clearTimeout(buildButtonBack);
            $(buttons).each(function(){
                this.style.backgroundColor = '#fff';
                document.getElementById('builddate').style.visibility = 'hidden';
                document.getElementById('builddate').innerHTML = '';
                document.getElementById('buildimg').src = './img/build/build-title.jpg';
                document.getElementById('builddate').innerHTML = '';
            });
        }
    });
}
playBuilder();

function graphicOverlay() {
    nav = document.querySelector('#graphics');
    buttons = nav.getElementsByTagName('button');
 
    for (var i = buttons.length - 1; i >= 0; i--) {
        buttons[i].addEventListener('click', function() {
            document.getElementById('graphic-legend').style.opacity = '0';
            $(this).siblings('button').each(function(){
                this.style.backgroundColor = 'rgba(255,255,255,0.7)';
            });
            this.style.backgroundColor = 'rgba(220,0,0,0.7)';
            el = document.getElementById("graphic-over");
            elChild = document.getElementById('over-' + this.getAttribute('data-pop'));
            el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
            el.style.opacity = (el.style.opacity == "1") ? "0" : "1";
            elChild.style.visibility = (elChild.style.visibility == "visible") ? "hidden" : "visible";
            elChild.style.opacity = (elChild.style.opacity == "1") ? "0" : "1";
            el.addEventListener('click', function() {
                el = document.getElementById("graphic-over");
                el.style.visibility = "hidden";
                el.style.opacity = "0";
                elChildren = el.childNodes;
                for(var i=0;i<elChildren.length;i++){
                    if (elChildren[i].className == "over-hide") {
                        elChildren[i].style.visibility = "hidden";
                        elChildren[i].style.opacity = "0";
                    }
                }
                nav = document.querySelector('#graphics');
                buttons = nav.getElementsByTagName('button');
                for (var i = buttons.length - 1; i >= 0; i--) {
                    buttons[i].style.backgroundColor = 'rgba(255,255,255,0.7)';
                }
                this.removeEventListener('click');
            })
        });
    };   
}
graphicOverlay()

$(document).foundation('reveal', {
    animation: 'fade',
    animationspeed: 200
});

function revealCredits() {
    $('#credits').foundation('reveal', 'open');
}

function checkHash() {
    if (window.location.hash) {
        var hash = window.location.hash;
        if ($(hash).hasClass('hide')) {
            toggleSidebar(hash,hash + 'link');
        } else {
            scrollDownTo(hash);
        }
    }
}

function scrollDownTo(whereToScroll, scrollOffset) {
    scrollOffset = typeof scrollOffset !== 'undefined' ? scrollOffset : 60;
    if ($(whereToScroll).length) {
        $('html,body').animate({
            scrollTop: ($(whereToScroll).offset().top - scrollOffset)
        }, 300);
    } else {
        var new_url = window.location.href.split('#')[0];
        window.history.replaceState('', document.title, new_url);
    }
}

function toggleSidebar(toShow,toHide) {
    $(toShow).removeClass('hide');
    $(toHide).addClass('hide');
    scrollDownTo(toShow);
}

function playerCreator(embedId, playerId, divId) {
    divId = typeof divId !== 'undefined' ? divId : false;
    if (divId) {
        $(divId).animate({backgroundColor:'rgba(0,70,70,0.3)',paddingLeft:'.5em',paddingRight:'.5em'}, 350).delay(2000).animate({backgroundColor:'transparent',paddingLeft:'0',paddingRight:'0'},1000);
    }
    OO.Player.create(embedId, playerId, {'autoplay':true});
}

function playerScroller(embedId, playerId, divId) {
    scrollDownTo(('#' + embedId),100);
    playerCreator(embedId, playerId, divId);
}
function getNodePosition(node) {
    var eTop = $(node).offset().top;
    return Math.abs(eTop - $(window).scrollTop());
}
function isVisible(element) {
    var vidTop = $(element).offset().top;
    var vidBot = $(element).offset().top + $(element).height();
    var fromTop = $(window).scrollTop() + $(element).height() / 2;
    if ( fromTop > vidTop && fromTop < vidBot ) {
        return true;
    } else {
        return false;
    }
}

function isElementInViewport(el) {
    el = el.toString().replace('#','');
    if (document.getElementById(el) != null) {
        var rect = document.getElementById(el).getBoundingClientRect();
        var half = window.innerHeight / 2;
        var whole = window.innerHeight;
        return ( (rect.top > 0 && rect.top < half) || (rect.bottom < whole && rect.bottom > half) || (rect.top < 0 && rect.bottom > whole) );
    } else {
        return;
    }
}

$('.top-top').click(function(evt) {
    $('.toggle-topbar').click();
});

$('.vid-embed').on("mouseenter", function() {
    $(this).find('.playicon').fadeTo(300, 0);
    $(this).find('.playtext').fadeTo(300, 1);
});
$('.vid-embed').on("mouseleave", function() {
    $(this).find('.playicon').fadeTo(300, 1);
    $(this).find('.playtext').fadeTo(300, 0);
});

function fadeNavBar(reverse) {
    if (reverse) {
        $('#name1').animate({opacity:1},500);
        $('#name2').animate({opacity:0},500);
        $('#name2').css('z-index','0');
        titleFade = true;
    } else {
        $('#name1').animate({opacity:0},500);
        $('#name2').animate({opacity:1},500);
        $('#name2').css('z-index','3');
        titleFade = false;
    }
}

function checkFade() {
    if ( !($(window).scrollTop() < window.innerHeight) && titleFade ) {
        fadeNavBar(false);
    } else if ( ($(window).scrollTop() < window.innerHeight) && !titleFade) {
        fadeNavBar(true);
    }
}

function hideAdManual() {
    $('#adwrapper').fadeOut(300);
    $('#adwrapper a.boxclose').css('display', 'none');
    $('#footer-bar').delay(150).animate({marginBottom:'0'},300);
    $('#adframewrapper').html('');
    swapped = false;
}

$(document).keyup(function(e) {
    if (swapped && e.keyCode == 27) {
        hideAdManual();
    }
    if (  e.keyCode == 27 && document.getElementById("graphic-over").style.visibility == 'visible' ) {
        el = document.getElementById("graphic-over");
        el.style.visibility = "hidden";
        el.style.opacity = "0";
        elChildren = el.childNodes;
        for(var i=0;i<elChildren.length;i++){
            if (elChildren[i].className == "over-hide") {
                console.log(elChildren[i]);
                elChildren[i].style.visibility = "hidden";
                elChildren[i].style.opacity = "0";
            }
        }
        for (var i = buttons.length - 1; i >= 0; i--) {
            buttons[i].style.backgroundColor = 'rgba(255,255,255,0.7)';
        }
        el.removeEventListener('click');
    }
});

$('#timeline').scroll(function(){
    $(this).find('.gridphotograd').animate({opacity:'0'},400,function(){
        $(this).css('display','none');
    });
});

function getAdSize() {
    if ( $(window).width() >= 740 ) {
        var adSizes = ['ad=medium','728','90'];
        return adSizes;
    } else {
        return false;
    }
    /* else if ( $(window).width() >= 300 && $(window).width() < 740 ) {
        var adSizes = ['ad=small','300','50'];
        return adSizes;
    }*/
}

function showAd() {
    var adSize = getAdSize();
    if (adSize) {
        $('#adframewrapper').html('<iframe src="' + adPathRoot + 'ad.html?' + adSize[0] + '" seamless height="' + adSize[2] + '" width="' + adSize[1] + '" frameborder="0"></iframe>');
        $('#adwrapper').fadeIn(400);
        $('a.boxclose').fadeIn(400);
        var adH = $('#adwrapper').height();
        $('#footer-bar').css('margin-bottom',adH);
        swapped = true;
    }
}

function swapAd() {
    if (swapped) {
        hideAdManual();
    }
    if (!swapped) {
        showAd();
    }
}

function getAdTimes(numAds) {
    var adReturns = [];
    var chunkHeight = docHeight / numAds;
    var chunkHalf = chunkHeight / 2;
    for (i=0;i<numAds;i++) {
        adReturns.push( Math.round( chunkHalf + (chunkHeight * i) ) );
    }
    return adReturns;
}

function checkAdPos() {
    if (showAds) {
        var topNow = $(window).scrollTop();
        if (!swapped) {
            var adTimes = getAdTimes(slideAds);
            for (var i = 0; i < adTimes.length; i++) {
                if (!adsloaded[i] && topNow > adTimes[i] && topNow < (typeof adTimes[(i+1)] !== 'undefined' ? adTimes[(i+1)] : docHeight)) {
                    swapAd();
                    adsloaded[i] = true;
                    break;
                }
            }
        }
    }
}

$(document).ready(function() {
    checkHash();
    checkFade();
    checkAdPos();
});

var didScroll = false;
$(window).scroll(function() {
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        checkFade();
        checkAdPos();
    }
},250);