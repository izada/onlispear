!function(d){"use strict";var i=800,e="https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc",a=d(window);document.documentElement.setAttribute("data-useragent",navigator.userAgent);var t,o,s,n,u,l,c,r,m,f,h;d("html").addClass("cl-preload"),a.on("load",function(){d("#loader").fadeOut("slow",function(){d("#preloader").delay(300).fadeOut("slow")}),d("html").removeClass("cl-preload"),d("html").addClass("cl-loaded")}),h=d(".header-menu-toggle"),a.on("scroll",function(){150<a.scrollTop()?h.addClass("opaque"):h.removeClass("opaque")}),r=d(".header-menu-toggle"),m=d(".header-nav").find(".header-nav__close"),f=d("body"),d("section, footer"),r.on("click",function(e){e.preventDefault(),f.toggleClass("menu-is-open")}),m.on("click",function(e){e.preventDefault(),r.trigger("click")}),f.on("click",function(e){d(e.target).is(".header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span")||f.removeClass("menu-is-open")}),u=[],l=d(".pswp")[0],(c=d(".item-folio")).each(function(e){var a=d(this),t=a.find(".thumb-link"),i=a.find(".item-folio__title"),o=a.find(".item-folio__caption"),s="<h4>"+d.trim(i.html())+"</h4>",n=d.trim(o.html()),l=t.attr("href"),c=t.data("size").split("x"),r={src:l,w:c[0],h:c[1]};0<o.length&&(r.title=d.trim(s+n)),u.push(r)}),c.each(function(a){d(this).on("click",function(e){e.preventDefault(),new PhotoSwipe(l,PhotoSwipeUI_Default,u,{index:a,showHideOpacity:!0}).init()})}),s=d(".s-stats"),n=d(".stats__count"),s.waypoint({handler:function(e){"down"===e&&n.each(function(){var a=d(this);d({Counter:0}).animate({Counter:a.text()},{duration:4e3,easing:"swing",step:function(e){a.text(Math.ceil(e))}})}),this.destroy()},offset:"90%"}),(o=d(".masonry")).imagesLoaded(function(){o.masonry({itemSelector:".masonry__brick",resize:!0})}),o.imagesLoaded().progress(function(){o.masonry("layout")}),d(".testimonials__slider").slick({arrows:!1,dots:!0,infinite:!0,slidesToShow:2,slidesToScroll:1,pauseOnFocus:!1,autoplaySpeed:1500,responsive:[{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1}}]}),d(".smoothscroll").on("click",function(e){var a=this.hash,t=d(a);e.preventDefault(),e.stopPropagation(),d("html, body").stop().animate({scrollTop:t.offset().top},i,"swing").promise().done(function(){d("body").hasClass("menu-is-open")&&d(".header-menu-toggle").trigger("click"),window.location.hash=a})}),d("input, textarea, select").placeholder(),d(".alert-box").on("click",".alert-box__close",function(){d(this).parent().fadeOut(500)}),AOS.init({offset:200,duration:600,easing:"ease-in-sine",delay:300,once:!0,disable:"mobile"}),d("#mc-form").ajaxChimp({language:"es",url:e}),d.ajaxChimp.translations.es={submit:"Submitting...",0:'<i class="fas fa-check"></i> We have sent you a confirmation email',1:'<i class="fas fa-exclamation-circle"></i> You must enter a valid e-mail address.',2:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',3:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',4:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',5:'<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.'},t=d(".cl-go-top"),d(window).on("scroll",function(){500<=d(window).scrollTop()?t.fadeIn(400):t.fadeOut(400)})}(jQuery);

// Cookie Notice
new cookieNoticeJS({

// Localizations of the notice message
'messageLocales': {
	'en': 'We are using Google Analytics'
},

// Localizations of the dismiss button text
'buttonLocales': {
	'en': 'Got it!'
},

// Position for the cookie-notifier (default=bottom)
'cookieNoticePosition': 'bottom',

// Shows the "learn more button (default=false)
'learnMoreLinkEnabled': false,

// The href of the learn more link must be applied if (learnMoreLinkEnabled=true)
'learnMoreLinkHref': 'https://marketingplatform.google.com/about/analytics/terms/us/',

// Text for optional learn more button
'learnMoreLinkText':{
	'en':'Learn more'
},

// The message will be shown again in X days
'expiresIn': 30,

// Specify a custom font family and size in pixels
'fontFamily': 'inherit',
'fontSize': 12,

// Dismiss button background color
'buttonBgColor': '#04cb87',  

// Dismiss button text color
'buttonTextColor': '#fff',

// Notice background color
'noticeBgColor': '#000000',

// Notice text color
'noticeTextColor': '#fff',

// the learnMoreLink color (default='#009fdd')
'linkColor': '#04cb87',

// The target of the learn more link (default='', or '_blank')
'linkTarget': '_blank',

// Print debug output to the console (default=false)
'debug': false
});