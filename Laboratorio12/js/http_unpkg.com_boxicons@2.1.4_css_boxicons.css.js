@font-face
{
    font-family: 'boxicons';
    font-weight: normal;
    font-style: normal;

    src: url('../fonts/boxicons.eot');
    src: url('../fonts/boxicons.eot') format('embedded-opentype'),
    url('../fonts/boxicons.woff2') format('woff2'),
    url('../fonts/boxicons.woff') format('woff'),
    url('../fonts/boxicons.ttf') format('truetype'),
    url('../fonts/boxicons.svg?#boxicons') format('svg');
}
.bx
{
    font-family: 'boxicons' !important;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
    display: inline-block;

    text-transform: none;

    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.bx-ul
{
    margin-left: 2em;
    padding-left: 0;

    list-style: none;
}
.bx-ul > li
{
    position: relative;
}
.bx-ul .bx
{
    font-size: inherit;
    line-height: inherit;

    position: absolute;
    left: -2em;

    width: 2em;

    text-align: center;
}
@-webkit-keyframes spin
{
    0%
    {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100%
    {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
    }
}
@keyframes spin
{
    0%
    {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100%
    {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
    }
}
@-webkit-keyframes burst
{
    0%
    {
        -webkit-transform: scale(1);
                transform: scale(1);

        opacity: 1;
    }
    90%
    {
        -webkit-transform: scale(1.5);
                transform: scale(1.5);

        opacity: 0;
    }
}
@keyframes burst
{
    0%
    {
        -webkit-transform: scale(1);
                transform: scale(1);

        opacity: 1;
    }
    90%
    {
        -webkit-transform: scale(1.5);
                transform: scale(1.5);

        opacity: 0;
    }
}
@-webkit-keyframes flashing
{
    0%
    {
        opacity: 1;
    }
    45%
    {
        opacity: 0;
    }
    90%
    {
        opacity: 1;
    }
}
@keyframes flashing
{
    0%
    {
        opacity: 1;
    }
    45%
    {
        opacity: 0;
    }
    90%
    {
        opacity: 1;
    }
}
@-webkit-keyframes fade-left
{
    0%
    {
        -webkit-transform: translateX(0);
                transform: translateX(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateX(-20px);
                transform: translateX(-20px);

        opacity: 0;
    }
}
@keyframes fade-left
{
    0%
    {
        -webkit-transform: translateX(0);
                transform: translateX(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateX(-20px);
                transform: translateX(-20px);

        opacity: 0;
    }
}
@-webkit-keyframes fade-right
{
    0%
    {
        -webkit-transform: translateX(0);
                transform: translateX(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateX(20px);
                transform: translateX(20px);

        opacity: 0;
    }
}
@keyframes fade-right
{
    0%
    {
        -webkit-transform: translateX(0);
                transform: translateX(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateX(20px);
                transform: translateX(20px);

        opacity: 0;
    }
}
@-webkit-keyframes fade-up
{
    0%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateY(-20px);
                transform: translateY(-20px);

        opacity: 0;
    }
}
@keyframes fade-up
{
    0%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateY(-20px);
                transform: translateY(-20px);

        opacity: 0;
    }
}
@-webkit-keyframes fade-down
{
    0%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateY(20px);
                transform: translateY(20px);

        opacity: 0;
    }
}
@keyframes fade-down
{
    0%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);

        opacity: 1;
    }
    75%
    {
        -webkit-transform: translateY(20px);
                transform: translateY(20px);

        opacity: 0;
    }
}
@-webkit-keyframes tada
{
    from
    {
        -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
    }

    10%,
    20%
    {
        -webkit-transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);
                transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);
    }

    30%,
    50%,
    70%,
    90%
    {
        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);
                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);
    }

    40%,
    60%,
    80%
    {
        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -10deg);
                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, -10deg);
    }

    to
    {
        -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
    }
}

@keyframes tada
{
    from
    {
        -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
    }

    10%,
    20%
    {
        -webkit-transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);
                transform: scale3d(.95, .95, .95) rotate3d(0, 0, 1, -10deg);
    }

    30%,
    50%,
    70%,
    90%
    {
        -webkit-transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);
                transform: scale3d(1, 1, 1) rotate3d(0, 0, 1, 10deg);
    }

    40%,
    60%,
    80%
    {
        -webkit-transform: rotate3d(0, 0, 1, -10deg);
                transform: rotate3d(0, 0, 1, -10deg);
    }

    to
    {
        -webkit-transform: scale3d(1, 1, 1);
                transform: scale3d(1, 1, 1);
    }
}
.bx-spin
{
    -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
}
.bx-spin-hover:hover
{
    -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
}

.bx-tada
{
    -webkit-animation: tada 1.5s ease infinite;
            animation: tada 1.5s ease infinite;
}
.bx-tada-hover:hover
{
    -webkit-animation: tada 1.5s ease infinite;
            animation: tada 1.5s ease infinite;
}

.bx-flashing
{
    -webkit-animation: flashing 1.5s infinite linear;
            animation: flashing 1.5s infinite linear;
}
.bx-flashing-hover:hover
{
    -webkit-animation: flashing 1.5s infinite linear;
            animation: flashing 1.5s infinite linear;
}

.bx-burst
{
    -webkit-animation: burst 1.5s infinite linear;
            animation: burst 1.5s infinite linear;
}
.bx-burst-hover:hover
{
    -webkit-animation: burst 1.5s infinite linear;
            animation: burst 1.5s infinite linear;
}
.bx-fade-up
{
    -webkit-animation: fade-up 1.5s infinite linear;
            animation: fade-up 1.5s infinite linear;
}
.bx-fade-up-hover:hover
{
    -webkit-animation: fade-up 1.5s infinite linear;
            animation: fade-up 1.5s infinite linear;
}
.bx-fade-down
{
    -webkit-animation: fade-down 1.5s infinite linear;
            animation: fade-down 1.5s infinite linear;
}
.bx-fade-down-hover:hover
{
    -webkit-animation: fade-down 1.5s infinite linear;
            animation: fade-down 1.5s infinite linear;
}
.bx-fade-left
{
    -webkit-animation: fade-left 1.5s infinite linear;
            animation: fade-left 1.5s infinite linear;
}
.bx-fade-left-hover:hover
{
    -webkit-animation: fade-left 1.5s infinite linear;
            animation: fade-left 1.5s infinite linear;
}
.bx-fade-right
{
    -webkit-animation: fade-right 1.5s infinite linear;
            animation: fade-right 1.5s infinite linear;
}
.bx-fade-right-hover:hover
{
    -webkit-animation: fade-right 1.5s infinite linear;
            animation: fade-right 1.5s infinite linear;
}
.bx-xs
{
    font-size: 1rem!important;
}
.bx-sm
{
    font-size: 1.55rem!important;
}
.bx-md
{
    font-size: 2.25rem!important;
}
.bx-lg
{
    font-size: 3.0rem!important;
}
.bx-fw
{
    font-size: 1.2857142857em;
    line-height: .8em;

    width: 1.2857142857em;
    height: .8em;
    margin-top: -.2em!important;

    vertical-align: middle;
}
.bx-pull-left
{
    float: left;

    margin-right: .3em!important;
}
.bx-pull-right
{
    float: right;

    margin-left: .3em!important;
}
.bx-rotate-90
{
    transform: rotate(90deg);

    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)';
}
.bx-rotate-180
{
    transform: rotate(180deg);

    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2)';
}
.bx-rotate-270
{
    transform: rotate(270deg);

    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)';
}
.bx-flip-horizontal
{
    transform: scaleX(-1);

    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)';
}
.bx-flip-vertical
{
    transform: scaleY(-1);

    -ms-filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)';
}
.bx-border
{
    padding: .25em;

    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
.bx-border-circle
{
    padding: .25em;

    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}

  .bxs-balloon:before {
    content: "\eb60";
  }
  .bxs-castle:before {
    content: "\eb79";
  }
  .bxs-coffee-bean:before {
    content: "\eb92";
  }
  .bxs-objects-horizontal-center:before {
    content: "\ebab";
  }
  .bxs-objects-horizontal-left:before {
    content: "\ebc4";
  }
  .bxs-objects-horizontal-right:before {
    content: "\ebdd";
  }
  .bxs-objects-vertical-bottom:before {
    content: "\ebf6";
  }
  .bxs-objects-vertical-center:before {
    content: "\ef40";
  }
  .bxs-objects-vertical-top:before {
    content: "\ef41";
  }
  .bxs-pear:before {
    content: "\ef42";
  }
  .bxs-shield-minus:before {
    content: "\ef43";
  }
  .bxs-shield-plus:before {
    content: "\ef44";
  }
  .bxs-shower:before {
    content: "\ef45";
  }
  .bxs-sushi:before {
    content: "\ef46";
  }
  .bxs-universal-access:before {
    content: "\ef47";
  }
  .bx-child:before {
    content: "\ef48";
  }
  .bx-horizontal-left:before {
    content: "\ef49";
  }
  .bx-horizontal-right:before {
    content: "\ef4a";
  }
  .bx-objects-horizontal-center:before {
    content: "\ef4b";
  }
  .bx-objects-horizontal-left:before {
    content: "\ef4c";
  }
  .bx-objects-horizontal-right:before {
    content: "\ef4d";
  }
  .bx-objects-vertical-bottom:before {
    content: "\ef4e";
  }
  .bx-objects-vertical-center:before {
    content: "\ef4f";
  }
  .bx-objects-vertical-top:before {
    content: "\ef50";
  }
  .bx-rfid:before {
    content: "\ef51";
  }
  .bx-shield-minus:before {
    content: "\ef52";
  }
  .bx-shield-plus:before {
    content: "\ef53";
  }
  .bx-shower:before {
    content: "\ef54";
  }
  .bx-sushi:before {
    content: "\ef55";
  }
  .bx-universal-access:before {
    content: "\ef56";
  }
  .bx-vertical-bottom:before {
    content: "\ef57";
  }
  .bx-vertical-top:before {
    content: "\ef58";
  }
  .bxl-graphql:before {
    content: "\ef59";
  }
  .bxl-typescript:before {
    content: "\ef5a";
  }
  .bxs-color:before {
    content: "\ef39";
  }
  .bx-reflect-horizontal:before {
    content: "\ef3a";
  }
  .bx-reflect-vertical:before {
    content: "\ef3b";
  }
  .bx-color:before {
    content: "\ef3c";
  }
  .bxl-mongodb:before {
    content: "\ef3d";
  }
  .bxl-postgresql:before {
    content: "\ef3e";
  }
  .bxl-deezer:before {
    content: "\ef3f";
  }
  .bxs-hard-hat:before {
    content: "\ef2a";
  }
  .bxs-home-alt-2:before {
    content: "\ef2b";
  }
  .bxs-cheese:before {
    content: "\ef2c";
  }
  .bx-home-alt-2:before {
    content: "\ef2d";
  }
  .bx-hard-hat:before {
    content: "\ef2e";
  }
  .bx-cheese:before {
    content: "\ef2f";
  }
  .bx-cart-add:before {
    content: "\ef30";
  }
  .bx-cart-download:before {
    content: "\ef31";
  }
  .bx-no-signal:before {
    content: "\ef32";
  }
  .bx-signal-1:before {
    content: "\ef33";
  }
  .bx-signal-2:before {
    content: "\ef34";
  }
  .bx-signal-3:before {
    content: "\ef35";
  }
  .bx-signal-4:before {
    content: "\ef36";
  }
  .bx-signal-5:before {
    content: "\ef37";
  }
  .bxl-xing:before {
    content: "\ef38";
  }
  .bxl-meta:before {
    content: "\ef27";
  }
  .bx-lemon:before {
    content: "\ef28";
  }
  .bxs-lemon:before {
    content: "\ef29";
  }
  .bx-cricket-ball:before {
    content: "\ef0c";
  }
  .bx-baguette:before {
    content: "\ef0d";
  }
  .bx-bowl-hot:before {
    content: "\ef0e";
  }
  .bx-bowl-rice:before {
    content: "\ef0f";
  }
  .bx-cable-car:before {
    content: "\ef10";
  }
  .bx-candles:before {
    content: "\ef11";
  }
  .bx-circle-half:before {
    content: "\ef12";
  }
  .bx-circle-quarter:before {
    content: "\ef13";
  }
  .bx-circle-three-quarter:before {
    content: "\ef14";
  }
  .bx-cross:before {
    content: "\ef15";
  }
  .bx-fork:before {
    content: "\ef16";
  }
  .bx-knife:before {
    content: "\ef17";
  }
  .bx-money-withdraw:before {
    content: "\ef18";
  }
  .bx-popsicle:before {
    content: "\ef19";
  }
  .bx-scatter-chart:before {
    content: "\ef1a";
  }
  .bxs-baguette:before {
    content: "\ef1b";
  }
  .bxs-bowl-hot:before {
    content: "\ef1c";
  }
  .bxs-bowl-rice:before {
    content: "\ef1d";
  }
  .bxs-cable-car:before {
    content: "\ef1e";
  }
  .bxs-circle-half:before {
    content: "\ef1f";
  }
  .bxs-circle-quarter:before {
    content: "\ef20";
  }
  .bxs-circle-three-quarter:before {
    content: "\ef21";
  }
  .bxs-cricket-ball:before {
    content: "\ef22";
  }
  .bxs-invader:before {
    content: "\ef23";
  }
  .bx-male-female:before {
    content: "\ef24";
  }
  .bxs-popsicle:before {
    content: "\ef25";
  }
  .bxs-tree-alt:before {
    content: "\ef26";
  }
  .bxl-venmo:before {
    content: "\e900";
  }
  .bxl-upwork:before {
    content: "\e901";
  }
  .bxl-netlify:before {
    content: "\e902";
  }
  .bxl-java:before {
    content: "\e903";
  }
  .bxl-heroku:before {
    content: "\e904";
  }
  .bxl-go-lang:before {
    content: "\e905";
  }
  .bxl-gmail:before {
    content: "\e906";
  }
  .bxl-flask:before {
    content: "\e907";
  }
  .bxl-99designs:before {
    content: "\e908";
  }
  .bxl-500px:before {
    content: "\e909";
  }
  .bxl-adobe:before {
    content: "\e90a";
  }
  .bxl-airbnb:before {
    content: "\e90b";
  }
  .bxl-algolia:before {
    content: "\e90c";
  }
  .bxl-amazon:before {
    content: "\e90d";
  }
  .bxl-android:before {
    content: "\e90e";
  }
  .bxl-angular:before {
    content: "\e90f";
  }
  .bxl-apple:before {
    content: "\e910";
  }
  .bxl-audible:before {
    content: "\e911";
  }
  .bxl-aws:before {
    content: "\e912";
  }
  .bxl-baidu:before {
    content: "\e913";
  }
  .bxl-behance:before {
    content: "\e914";
  }
  .bxl-bing:before {
    content: "\e915";
  }
  .bxl-bitcoin:before {
    content: "\e916";
  }
  .bxl-blender:before {
    content: "\e917";
  }
  .bxl-blogger:before {
    content: "\e918";
  }
  .bxl-bootstrap:before {
    content: "\e919";
  }
  .bxl-chrome:before {
    content: "\e91a";
  }
  .bxl-codepen:before {
    content: "\e91b";
  }
  .bxl-c-plus-plus:before {
    content: "\e91c";
  }
  .bxl-creative-commons:before {
    content: "\e91d";
  }
  .bxl-css3:before {
    content: "\e91e";
  }
  .bxl-dailymotion:before {
    content: "\e91f";
  }
  .bxl-deviantart:before {
    content: "\e920";
  }
  .bxl-dev-to:before {
    content: "\e921";
  }
  .bxl-digg:before {
    content: "\e922";
  }
  .bxl-digitalocean:before {
    content: "\e923";
  }
  .bxl-discord:before {
    content: "\e924";
  }
  .bxl-discord-alt:before {
    content: "\e925";
  }
  .bxl-discourse:before {
    content: "\e926";
  }
  .bxl-django:before {
    content: "\e927";
  }
  .bxl-docker:before {
    content: "\e928";
  }
  .bxl-dribbble:before {
    content: "\e929";
  }
  .bxl-dropbox:before {
    content: "\e92a";
  }
  .bxl-drupal:before {
    content: "\e92b";
  }
  .bxl-ebay:before {
    content: "\e92c";
  }
  .bxl-edge:before {
    content: "\e92d";
  }
  .bxl-etsy:before {
    content: "\e92e";
  }
  .bxl-facebook:before {
    content: "\e92f";
  }
  .bxl-facebook-circle:before {
    content: "\e930";
  }
  .bxl-facebook-square:before {
    content: "\e931";
  }
  .bxl-figma:before {
    content: "\e932";
  }
  .bxl-firebase:before {
    content: "\e933";
  }
  .bxl-firefox:before {
    content: "\e934";
  }
  .bxl-flickr:before {
    content: "\e935";
  }
  .bxl-flickr-square:before {
    content: "\e936";
  }
  .bxl-flutter:before {
    content: "\e937";
  }
  .bxl-foursquare:before {
    content: "\e938";
  }
  .bxl-git:before {
    content: "\e939";
  }
  .bxl-github:before {
    content: "\e93a";
  }
  .bxl-gitlab:before {
    content: "\e93b";
  }
  .bxl-google:before {
    content: "\e93c";
  }
  .bxl-google-cloud:before {
    content: "\e93d";
  }
  .bxl-google-plus:before {
    content: "\e93e";
  }
  .bxl-google-plus-circle:before {
    content: "\e93f";
  }
  .bxl-html5:before {
    content: "\e940";
  }
  .bxl-imdb:before {
    content: "\e941";
  }
  .bxl-instagram:before {
    content: "\e942";
  }
  .bxl-instagram-alt:before {
    content: "\e943";
  }
  .bxl-internet-explorer:before {
    content: "\e944";
  }
  .bxl-invision:before {
    content: "\e945";
  }
  .bxl-javascript:before {
    content: "\e946";
  }
  .bxl-joomla:before {
    content: "\e947";
  }
  .bxl-jquery:before {
    content: "\e948";
  }
  .bxl-jsfiddle:before {
    content: "\e949";
  }
  .bxl-kickstarter:before {
    content: "\e94a";
  }
  .bxl-kubernetes:before {
    content: "\e94b";
  }
  .bxl-less:before {
    content: "\e94c";
  }
  .bxl-linkedin:before {
    content: "\e94d";
  }
  .bxl-linkedin-square:before {
    content: "\e94e";
  }
  .bxl-magento:before {
    content: "\e94f";
  }
  .bxl-mailchimp:before {
    content: "\e950";
  }
  .bxl-markdown:before {
    content: "\e951";
  }
  .bxl-mastercard:before {
    content: "\e952";
  }
  .bxl-mastodon:before {
    content: "\e953";
  }
  .bxl-medium:before {
    content: "\e954";
  }
  .bxl-medium-old:before {
    content: "\e955";
  }
  .bxl-medium-square:before {
    content: "\e956";
  }
  .bxl-messenger:before {
    content: "\e957";
  }
  .bxl-microsoft:before {
    content: "\e958";
  }
  .bxl-microsoft-teams:before {
    content: "\e959";
  }
  .bxl-nodejs:before {
    content: "\e95a";
  }
  .bxl-ok-ru:before {
    content: "\e95b";
  }
  .bxl-opera:before {
    content: "\e95c";
  }
  .bxl-patreon:before {
    content: "\e95d";
  }
  .bxl-paypal:before {
    content: "\e95e";
  }
  .bxl-periscope:before {
    content: "\e95f";
  }
  .bxl-php:before {
    content: "\e960";
  }
  .bxl-pinterest:before {
    content: "\e961";
  }
  .bxl-pinterest-alt:before {
    content: "\e962";
  }
  .bxl-play-store:before {
    content: "\e963";
  }
  .bxl-pocket:before {
    content: "\e964";
  }
  .bxl-product-hunt:before {
    content: "\e965";
  }
  .bxl-python:before {
    content: "\e966";
  }
  .bxl-quora:before {
    content: "\e967";
  }
  .bxl-react:before {
    content: "\e968";
  }
  .bxl-redbubble:before {
    content: "\e969";
  }
  .bxl-reddit:before {
    content: "\e96a";
  }
  .bxl-redux:before {
    content: "\e96b";
  }
  .bxl-sass:before {
    content: "\e96c";
  }
  .bxl-shopify:before {
    content: "\e96d";
  }
  .bxl-sketch:before {
    content: "\e96e";
  }
  .bxl-skype:before {
    content: "\e96f";
  }
  .bxl-slack:before {
    content: "\e970";
  }
  .bxl-slack-old:before {
    content: "\e971";
  }
  .bxl-snapchat:before {
    content: "\e972";
  }
  .bxl-soundcloud:before {
    content: "\e973";
  }
  .bxl-spotify:before {
    content: "\e974";
  }
  .bxl-spring-boot:before {
    content: "\e975";
  }
  .bxl-squarespace:before {
    content: "\e976";
  }
  .bxl-stack-overflow:before {
    content: "\e977";
  }
  .bxl-steam:before {
    content: "\e978";
  }
  .bxl-stripe:before {
    content: "\e979";
  }
  .bxl-tailwind-css:before {
    content: "\e97a";
  }
  .bxl-telegram:before {
    content: "\e97b";
  }
  .bxl-tiktok:before {
    content: "\e97c";
  }
  .bxl-trello:before {
    content: "\e97d";
  }
  .bxl-trip-advisor:before {
    content: "\e97e";
  }
  .bxl-tumblr:before {
    content: "\e97f";
  }
  .bxl-tux:before {
    content: "\e980";
  }
  .bxl-twitch:before {
    content: "\e981";
  }
  .bxl-twitter:before {
    content: "\e982";
  }
  .bxl-unity:before {
    content: "\e983";
  }
  .bxl-unsplash:before {
    content: "\e984";
  }
  .bxl-vimeo:before {
    content: "\e985";
  }
  .bxl-visa:before {
    content: "\e986";
  }
  .bxl-visual-studio:before {
    content: "\e987";
  }
  .bxl-vk:before {
    content: "\e988";
  }
  .bxl-vuejs:before {
    content: "\e989";
  }
  .bxl-whatsapp:before {
    content: "\e98a";
  }
  .bxl-whatsapp-square:before {
    content: "\e98b";
  }
  .bxl-wikipedia:before {
    content: "\e98c";
  }
  .bxl-windows:before {
    content: "\e98d";
  }
  .bxl-wix:before {
    content: "\e98e";
  }
  .bxl-wordpress:before {
    content: "\e98f";
  }
  .bxl-yahoo:before {
    content: "\e990";
  }
  .bxl-yelp:before {
    content: "\e991";
  }
  .bxl-youtube:before {
    content: "\e992";
  }
  .bxl-zoom:before {
    content: "\e993";
  }
  .bx-collapse-alt:before {
    content: "\e994";
  }
  .bx-collapse-horizontal:before {
    content: "\e995";
  }
  .bx-collapse-vertical:before {
    content: "\e996";
  }
  .bx-expand-horizontal:before {
    content: "\e997";
  }
  .bx-expand-vertical:before {
    content: "\e998";
  }
  .bx-injection:before {
    content: "\e999";
  }
  .bx-leaf:before {
    content: "\e99a";
  }
  .bx-math:before {
    content: "\e99b";
  }
  .bx-party:before {
    content: "\e99c";
  }
  .bx-abacus:before {
    content: "\e99d";
  }
  .bx-accessibility:before {
    content: "\e99e";
  }
  .bx-add-to-queue:before {
    content: "\e99f";
  }
  .bx-adjust:before {
    content: "\e9a0";
  }
  .bx-alarm:before {
    content: "\e9a1";
  }
  .bx-alarm-add:before {
    content: "\e9a2";
  }
  .bx-alarm-exclamation:before {
    content: "\e9a3";
  }
  .bx-alarm-off:before {
    content: "\e9a4";
  }
  .bx-alarm-snooze:before {
    content: "\e9a5";
  }
  .bx-album:before {
    content: "\e9a6";
  }
  .bx-align-justify:before {
    content: "\e9a7";
  }
  .bx-align-left:before {
    content: "\e9a8";
  }
  .bx-align-middle:before {
    content: "\e9a9";
  }
  .bx-align-right:before {
    content: "\e9aa";
  }
  .bx-analyse:before {
    content: "\e9ab";
  }
  .bx-anchor:before {
    content: "\e9ac";
  }
  .bx-angry:before {
    content: "\e9ad";
  }
  .bx-aperture:before {
    content: "\e9ae";
  }
  .bx-arch:before {
    content: "\e9af";
  }
  .bx-archive:before {
    content: "\e9b0";
  }
  .bx-archive-in:before {
    content: "\e9b1";
  }
  .bx-archive-out:before {
    content: "\e9b2";
  }
  .bx-area:before {
    content: "\e9b3";
  }
  .bx-arrow-back:before {
    content: "\e9b4";
  }
  .bx-arrow-from-bottom:before {
    content: "\e9b5";
  }
  .bx-arrow-from-left:before {
    content: "\e9b6";
  }
  .bx-arrow-from-right:before {
    content: "\e9b7";
  }
  .bx-arrow-from-top:before {
    content: "\e9b8";
  }
  .bx-arrow-to-bottom:before {
    content: "\e9b9";
  }
  .bx-arrow-to-left:before {
    content: "\e9ba";
  }
  .bx-arrow-to-right:before {
    content: "\e9bb";
  }
  .bx-arrow-to-top:before {
    content: "\e9bc";
  }
  .bx-at:before {
    content: "\e9bd";
  }
  .bx-atom:before {
    content: "\e9be";
  }
  .bx-award:before {
    content: "\e9bf";
  }
  .bx-badge:before {
    content: "\e9c0";
  }
  .bx-badge-check:before {
    content: "\e9c1";
  }
  .bx-ball:before {
    content: "\e9c2";
  }
  .bx-band-aid:before {
    content: "\e9c3";
  }
  .bx-bar-chart:before {
    content: "\e9c4";
  }
  .bx-bar-chart-alt:before {
    content: "\e9c5";
  }
  .bx-bar-chart-alt-2:before {
    content: "\e9c6";
  }
  .bx-bar-chart-square:before {
    content: "\e9c7";
  }
  .bx-barcode:before {
    content: "\e9c8";
  }
  .bx-barcode-reader:before {
    content: "\e9c9";
  }
  .bx-baseball:before {
    content: "\e9ca";
  }
  .bx-basket:before {
    content: "\e9cb";
  }
  .bx-basketball:before {
    content: "\e9cc";
  }
  .bx-bath:before {
    content: "\e9cd";
  }
  .bx-battery:before {
    content: "\e9ce";
  }
  .bx-bed:before {
    content: "\e9cf";
  }
  .bx-been-here:before {
    content: "\e9d0";
  }
  .bx-beer:before {
    content: "\e9d1";
  }
  .bx-bell:before {
    content: "\e9d2";
  }
  .bx-bell-minus:before {
    content: "\e9d3";
  }
  .bx-bell-off:before {
    content: "\e9d4";
  }
  .bx-bell-plus:before {
    content: "\e9d5";
  }
  .bx-bible:before {
    content: "\e9d6";
  }
  .bx-bitcoin:before {
    content: "\e9d7";
  }
  .bx-blanket:before {
    content: "\e9d8";
  }
  .bx-block:before {
    content: "\e9d9";
  }
  .bx-bluetooth:before {
    content: "\e9da";
  }
  .bx-body:before {
    content: "\e9db";
  }
  .bx-bold:before {
    content: "\e9dc";
  }
  .bx-bolt-circle:before {
    content: "\e9dd";
  }
  .bx-bomb:before {
    content: "\e9de";
  }
  .bx-bone:before {
    content: "\e9df";
  }
  .bx-bong:before {
    content: "\e9e0";
  }
  .bx-book:before {
    content: "\e9e1";
  }
  .bx-book-add:before {
    content: "\e9e2";
  }
  .bx-book-alt:before {
    content: "\e9e3";
  }
  .bx-book-bookmark:before {
    content: "\e9e4";
  }
  .bx-book-content:before {
    content: "\e9e5";
  }
  .bx-book-heart:before {
    content: "\e9e6";
  }
  .bx-bookmark:before {
    content: "\e9e7";
  }
  .bx-bookmark-alt:before {
    content: "\e9e8";
  }
  .bx-bookmark-alt-minus:before {
    content: "\e9e9";
  }
  .bx-bookmark-alt-plus:before {
    content: "\e9ea";
  }
  .bx-bookmark-heart:before {
    content: "\e9eb";
  }
  .bx-bookmark-minus:before {
    content: "\e9ec";
  }
  .bx-bookmark-plus:before {
    content: "\e9ed";
  }
  .bx-bookmarks:before {
    content: "\e9ee";
  }
  .bx-book-open:before {
    content: "\e9ef";
  }
  .bx-book-reader:before {
    content: "\e9f0";
  }
  .bx-border-all:before {
    content: "\e9f1";
  }
  .bx-border-bottom:before {
    content: "\e9f2";
  }
  .bx-border-inner:before {
    content: "\e9f3";
  }
  .bx-border-left:before {
    content: "\e9f4";
  }
  .bx-border-none:before {
    content: "\e9f5";
  }
  .bx-border-outer:before {
    content: "\e9f6";
  }
  .bx-border-radius:before {
    content: "\e9f7";
  }
  .bx-border-right:before {
    content: "\e9f8";
  }
  .bx-border-top:before {
    content: "\e9f9";
  }
  .bx-bot:before {
    content: "\e9fa";
  }
  .bx-bowling-ball:before {
    content: "\e9fb";
  }
  .bx-box:before {
    content: "\e9fc";
  }
  .bx-bracket:before {
    content: "\e9fd";
  }
  .bx-braille:before {
    content: "\e9fe";
  }
  .bx-brain:before {
    content: "\e9ff";
  }
  .bx-briefcase:before {
    content: "\ea00";
  }
  .bx-briefcase-alt:before {
    content: "\ea01";
  }
  .bx-briefcase-alt-2:before {
    content: "\ea02";
  }
  .bx-brightness:before {
    content: "\ea03";
  }
  .bx-brightness-half:before {
    content: "\ea04";
  }
  .bx-broadcast:before {
    content: "\ea05";
  }
  .bx-brush:before {
    content: "\ea06";
  }
  .bx-brush-alt:before {
    content: "\ea07";
  }
  .bx-bug:before {
    content: "\ea08";
  }
  .bx-bug-alt:before {
    content: "\ea09";
  }
  .bx-building:before {
    content: "\ea0a";
  }
  .bx-building-house:before {
    content: "\ea0b";
  }
  .bx-buildings:before {
    content: "\ea0c";
  }
  .bx-bulb:before {
    content: "\ea0d";
  }
  .bx-bullseye:before {
    content: "\ea0e";
  }
  .bx-buoy:before {
    content: "\ea0f";
  }
  .bx-bus:before {
    content: "\ea10";
  }
  .bx-bus-school:before {
    content: "\ea11";
  }
  .bx-cabinet:before {
    content: "\ea12";
  }
  .bx-cake:before {
    content: "\ea13";
  }
  .bx-calculator:before {
    content: "\ea14";
  }
  .bx-calendar:before {
    content: "\ea15";
  }
  .bx-calendar-alt:before {
    content: "\ea16";
  }
  .bx-calendar-check:before {
    content: "\ea17";
  }
  .bx-calendar-edit:before {
    content: "\ea18";
  }
  .bx-calendar-event:before {
    content: "\ea19";
  }
  .bx-calendar-exclamation:before {
    content: "\ea1a";
  }
  .bx-calendar-heart:before {
    content: "\ea1b";
  }
  .bx-calendar-minus:before {
    content: "\ea1c";
  }
  .bx-calendar-plus:before {
    content: "\ea1d";
  }
  .bx-calendar-star:before {
    content: "\ea1e";
  }
  .bx-calendar-week:before {
    content: "\ea1f";
  }
  .bx-calendar-x:before {
    content: "\ea20";
  }
  .bx-camera:before {
    content: "\ea21";
  }
  .bx-camera-home:before {
    content: "\ea22";
  }
  .bx-camera-movie:before {
    content: "\ea23";
  }
  .bx-camera-off:before {
    content: "\ea24";
  }
  .bx-capsule:before {
    content: "\ea25";
  }
  .bx-captions:before {
    content: "\ea26";
  }
  .bx-car:before {
    content: "\ea27";
  }
  .bx-card:before {
    content: "\ea28";
  }
  .bx-caret-down:before {
    content: "\ea29";
  }
  .bx-caret-down-circle:before {
    content: "\ea2a";
  }
  .bx-caret-down-square:before {
    content: "\ea2b";
  }
  .bx-caret-left:before {
    content: "\ea2c";
  }
  .bx-caret-left-circle:before {
    content: "\ea2d";
  }
  .bx-caret-left-square:before {
    content: "\ea2e";
  }
  .bx-caret-right:before {
    content: "\ea2f";
  }
  .bx-caret-right-circle:before {
    content: "\ea30";
  }
  .bx-caret-right-square:before {
    content: "\ea31";
  }
  .bx-caret-up:before {
    content: "\ea32";
  }
  .bx-caret-up-circle:before {
    content: "\ea33";
  }
  .bx-caret-up-square:before {
    content: "\ea34";
  }
  .bx-carousel:before {
    content: "\ea35";
  }
  .bx-cart:before {
    content: "\ea36";
  }
  .bx-cart-alt:before {
    content: "\ea37";
  }
  .bx-cast:before {
    content: "\ea38";
  }
  .bx-category:before {
    content: "\ea39";
  }
  .bx-category-alt:before {
    content: "\ea3a";
  }
  .bx-cctv:before {
    content: "\ea3b";
  }
  .bx-certification:before {
    content: "\ea3c";
  }
  .bx-chair:before {
    content: "\ea3d";
  }
  .bx-chalkboard:before {
    content: "\ea3e";
  }
  .bx-chart:before {
    content: "\ea3f";
  }
  .bx-chat:before {
    content: "\ea40";
  }
  .bx-check:before {
    content: "\ea41";
  }
  .bx-checkbox:before {
    content: "\ea42";
  }
  .bx-checkbox-checked:before {
    content: "\ea43";
  }
  .bx-checkbox-minus:before {
    content: "\ea44";
  }
  .bx-checkbox-square:before {
    content: "\ea45";
  }
  .bx-check-circle:before {
    content: "\ea46";
  }
  .bx-check-double:before {
    content: "\ea47";
  }
  .bx-check-shield:before {
    content: "\ea48";
  }
  .bx-check-square:before {
    content: "\ea49";
  }
  .bx-chevron-down:before {
    content: "\ea4a";
  }
  .bx-chevron-down-circle:before {
    content: "\ea4b";
  }
  .bx-chevron-down-square:before {
    content: "\ea4c";
  }
  .bx-chevron-left:before {
    content: "\ea4d";
  }
  .bx-chevron-left-circle:before {
    content: "\ea4e";
  }
  .bx-chevron-left-square:before {
    content: "\ea4f";
  }
  .bx-chevron-right:before {
    content: "\ea50";
  }
  .bx-chevron-right-circle:before {
    content: "\ea51";
  }
  .bx-chevron-right-square:before {
    content: "\ea52";
  }
  .bx-chevrons-down:before {
    content: "\ea53";
  }
  .bx-chevrons-left:before {
    content: "\ea54";
  }
  .bx-chevrons-right:before {
    content: "\ea55";
  }
  .bx-chevrons-up:before {
    content: "\ea56";
  }
  .bx-chevron-up:before {
    content: "\ea57";
  }
  .bx-chevron-up-circle:before {
    content: "\ea58";
  }
  .bx-chevron-up-square:before {
    content: "\ea59";
  }
  .bx-chip:before {
    content: "\ea5a";
  }
  .bx-church:before {
    content: "\ea5b";
  }
  .bx-circle:before {
    content: "\ea5c";
  }
  .bx-clinic:before {
    content: "\ea5d";
  }
  .bx-clipboard:before {
    content: "\ea5e";
  }
  .bx-closet:before {
    content: "\ea5f";
  }
  .bx-cloud:before {
    content: "\ea60";
  }
  .bx-cloud-download:before {
    content: "\ea61";
  }
  .bx-cloud-drizzle:before {
    content: "\ea62";
  }
  .bx-cloud-lightning:before {
    content: "\ea63";
  }
  .bx-cloud-light-rain:before {
    content: "\ea64";
  }
  .bx-cloud-rain:before {
    content: "\ea65";
  }
  .bx-cloud-snow:before {
    content: "\ea66";
  }
  .bx-cloud-upload:before {
    content: "\ea67";
  }
  .bx-code:before {
    content: "\ea68";
  }
  .bx-code-alt:before {
    content: "\ea69";
  }
  .bx-code-block:before {
    content: "\ea6a";
  }
  .bx-code-curly:before {
    content: "\ea6b";
  }
  .bx-coffee:before {
    content: "\ea6c";
  }
  .bx-coffee-togo:before {
    content: "\ea6d";
  }
  .bx-cog:before {
    content: "\ea6e";
  }
  .bx-coin:before {
    content: "\ea6f";
  }
  .bx-coin-stack:before {
    content: "\ea70";
  }
  .bx-collapse:before {
    content: "\ea71";
  }
  .bx-collection:before {
    content: "\ea72";
  }
  .bx-color-fill:before {
    content: "\ea73";
  }
  .bx-columns:before {
    content: "\ea74";
  }
  .bx-command:before {
    content: "\ea75";
  }
  .bx-comment:before {
    content: "\ea76";
  }
  .bx-comment-add:before {
    content: "\ea77";
  }
  .bx-comment-check:before {
    content: "\ea78";
  }
  .bx-comment-detail:before {
    content: "\ea79";
  }
  .bx-comment-dots:before {
    content: "\ea7a";
  }
  .bx-comment-edit:before {
    content: "\ea7b";
  }
  .bx-comment-error:before {
    content: "\ea7c";
  }
  .bx-comment-minus:before {
    content: "\ea7d";
  }
  .bx-comment-x:before {
    content: "\ea7e";
  }
  .bx-compass:before {
    content: "\ea7f";
  }
  .bx-confused:before {
    content: "\ea80";
  }
  .bx-conversation:before {
    content: "\ea81";
  }
  .bx-cookie:before {
    content: "\ea82";
  }
  .bx-cool:before {
    content: "\ea83";
  }
  .bx-copy:before {
    content: "\ea84";
  }
  .bx-copy-alt:before {
    content: "\ea85";
  }
  .bx-copyright:before {
    content: "\ea86";
  }
  .bx-credit-card:before {
    content: "\ea87";
  }
  .bx-credit-card-alt:before {
    content: "\ea88";
  }
  .bx-credit-card-front:before {
    content: "\ea89";
  }
  .bx-crop:before {
    content: "\ea8a";
  }
  .bx-crosshair:before {
    content: "\ea8b";
  }
  .bx-crown:before {
    content: "\ea8c";
  }
  .bx-cube:before {
    content: "\ea8d";
  }
  .bx-cube-alt:before {
    content: "\ea8e";
  }
  .bx-cuboid:before {
    content: "\ea8f";
  }
  .bx-current-location:before {
    content: "\ea90";
  }
  .bx-customize:before {
    content: "\ea91";
  }
  .bx-cut:before {
    content: "\ea92";
  }
  .bx-cycling:before {
    content: "\ea93";
  }
  .bx-cylinder:before {
    content: "\ea94";
  }
  .bx-data:before {
    content: "\ea95";
  }
  .bx-desktop:before {
    content: "\ea96";
  }
  .bx-detail:before {
    content: "\ea97";
  }
  .bx-devices:before {
    content: "\ea98";
  }
  .bx-dialpad:before {
    content: "\ea99";
  }
  .bx-dialpad-alt:before {
    content: "\ea9a";
  }
  .bx-diamond:before {
    content: "\ea9b";
  }
  .bx-dice-1:before {
    content: "\ea9c";
  }
  .bx-dice-2:before {
    content: "\ea9d";
  }
  .bx-dice-3:before {
    content: "\ea9e";
  }
  .bx-dice-4:before {
    content: "\ea9f";
  }
  .bx-dice-5:before {
    content: "\eaa0";
  }
  .bx-dice-6:before {
    content: "\eaa1";
  }
  .bx-directions:before {
    content: "\eaa2";
  }
  .bx-disc:before {
    content: "\eaa3";
  }
  .bx-dish:before {
    content: "\eaa4";
  }
  .bx-dislike:before {
    content: "\eaa5";
  }
  .bx-dizzy:before {
    content: "\eaa6";
  }
  .bx-dna:before {
    content: "\eaa7";
  }
  .bx-dock-bottom:before {
    content: "\eaa8";
  }
  .bx-dock-left:before {
    content: "\eaa9";
  }
  .bx-dock-right:before {
    content: "\eaaa";
  }
  .bx-dock-top:before {
    content: "\eaab";
  }
  .bx-dollar:before {
    content: "\eaac";
  }
  .bx-dollar-circle:before {
    content: "\eaad";
  }
  .bx-donate-blood:before {
    content: "\eaae";
  }
  .bx-donate-heart:before {
    content: "\eaaf";
  }
  .bx-door-open:before {
    content: "\eab0";
  }
  .bx-dots-horizontal:before {
    content: "\eab1";
  }
  .bx-dots-horizontal-rounded:before {
    content: "\eab2";
  }
  .bx-dots-vertical:before {
    content: "\eab3";
  }
  .bx-dots-vertical-rounded:before {
    content: "\eab4";
  }
  .bx-doughnut-chart:before {
    content: "\eab5";
  }
  .bx-down-arrow:before {
    content: "\eab6";
  }
  .bx-down-arrow-alt:before {
    content: "\eab7";
  }
  .bx-down-arrow-circle:before {
    content: "\eab8";
  }
  .bx-download:before {
    content: "\eab9";
  }
  .bx-downvote:before {
    content: "\eaba";
  }
  .bx-drink:before {
    content: "\eabb";
  }
  .bx-droplet:before {
    content: "\eabc";
  }
  .bx-dumbbell:before {
    content: "\eabd";
  }
  .bx-duplicate:before {
    content: "\eabe";
  }
  .bx-edit:before {
    content: "\eabf";
  }
  .bx-edit-alt:before {
    content: "\eac0";
  }
  .bx-envelope:before {
    content: "\eac1";
  }
  .bx-envelope-open:before {
    content: "\eac2";
  }
  .bx-equalizer:before {
    content: "\eac3";
  }
  .bx-eraser:before {
    content: "\eac4";
  }
  .bx-error:before {
    content: "\eac5";
  }
  .bx-error-alt:before {
    content: "\eac6";
  }
  .bx-error-circle:before {
    content: "\eac7";
  }
  .bx-euro:before {
    content: "\eac8";
  }
  .bx-exclude:before {
    content: "\eac9";
  }
  .bx-exit:before {
    content: "\eaca";
  }
  .bx-exit-fullscreen:before {
    content: "\eacb";
  }
  .bx-expand:before {
    content: "\eacc";
  }
  .bx-expand-alt:before {
    content: "\eacd";
  }
  .bx-export:before {
    content: "\eace";
  }
  .bx-extension:before {
    content: "\eacf";
  }
  .bx-face:before {
    content: "\ead0";
  }
  .bx-fast-forward:before {
    content: "\ead1";
  }
  .bx-fast-forward-circle:before {
    content: "\ead2";
  }
  .bx-female:before {
    content: "\ead3";
  }
  .bx-female-sign:before {
    content: "\ead4";
  }
  .bx-file:before {
    content: "\ead5";
  }
  .bx-file-blank:before {
    content: "\ead6";
  }
  .bx-file-find:before {
    content: "\ead7";
  }
  .bx-film:before {
    content: "\ead8";
  }
  .bx-filter:before {
    content: "\ead9";
  }
  .bx-filter-alt:before {
    content: "\eada";
  }
  .bx-fingerprint:before {
    content: "\eadb";
  }
  .bx-first-aid:before {
    content: "\eadc";
  }
  .bx-first-page:before {
    content: "\eadd";
  }
  .bx-flag:before {
    content: "\eade";
  }
  .bx-folder:before {
    content: "\eadf";
  }
  .bx-folder-minus:before {
    content: "\eae0";
  }
  .bx-folder-open:before {
    content: "\eae1";
  }
  .bx-folder-plus:before {
    content: "\eae2";
  }
  .bx-font:before {
    content: "\eae3";
  }
  .bx-font-color:before {
    content: "\eae4";
  }
  .bx-font-family:before {
    content: "\eae5";
  }
  .bx-font-size:before {
    content: "\eae6";
  }
  .bx-food-menu:before {
    content: "\eae7";
  }
  .bx-food-tag:before {
    content: "\eae8";
  }
  .bx-football:before {
    content: "\eae9";
  }
  .bx-fridge:before {
    content: "\eaea";
  }
  .bx-fullscreen:before {
    content: "\eaeb";
  }
  .bx-game:before {
    content: "\eaec";
  }
  .bx-gas-pump:before {
    content: "\eaed";
  }
  .bx-ghost:before {
    content: "\eaee";
  }
  .bx-gift:before {
    content: "\eaef";
  }
  .bx-git-branch:before {
    content: "\eaf0";
  }
  .bx-git-commit:before {
    content: "\eaf1";
  }
  .bx-git-compare:before {
    content: "\eaf2";
  }
  .bx-git-merge:before {
    content: "\eaf3";
  }
  .bx-git-pull-request:before {
    content: "\eaf4";
  }
  .bx-git-repo-forked:before {
    content: "\eaf5";
  }
  .bx-glasses:before {
    content: "\eaf6";
  }
  .bx-glasses-alt:before {
    content: "\eaf7";
  }
  .bx-globe:before {
    content: "\eaf8";
  }
  .bx-globe-alt:before {
    content: "\eaf9";
  }
  .bx-grid:before {
    content: "\eafa";
  }
  .bx-grid-alt:before {
    content: "\eafb";
  }
  .bx-grid-horizontal:before {
    content: "\eafc";
  }
  .bx-grid-small:before {
    content: "\eafd";
  }
  .bx-grid-vertical:before {
    content: "\eafe";
  }
  .bx-group:before {
    content: "\eaff";
  }
  .bx-handicap:before {
    content: "\eb00";
  }
  .bx-happy:before {
    content: "\eb01";
  }
  .bx-happy-alt:before {
    content: "\eb02";
  }
  .bx-happy-beaming:before {
    content: "\eb03";
  }
  .bx-happy-heart-eyes:before {
    content: "\eb04";
  }
  .bx-hash:before {
    content: "\eb05";
  }
  .bx-hdd:before {
    content: "\eb06";
  }
  .bx-heading:before {
    content: "\eb07";
  }
  .bx-headphone:before {
    content: "\eb08";
  }
  .bx-health:before {
    content: "\eb09";
  }
  .bx-heart:before {
    content: "\eb0a";
  }
  .bx-heart-circle:before {
    content: "\eb0b";
  }
  .bx-heart-square:before {
    content: "\eb0c";
  }
  .bx-help-circle:before {
    content: "\eb0d";
  }
  .bx-hide:before {
    content: "\eb0e";
  }
  .bx-highlight:before {
    content: "\eb0f";
  }
  .bx-history:before {
    content: "\eb10";
  }
  .bx-hive:before {
    content: "\eb11";
  }
  .bx-home:before {
    content: "\eb12";
  }
  .bx-home-alt:before {
    content: "\eb13";
  }
  .bx-home-circle:before {
    content: "\eb14";
  }
  .bx-home-heart:before {
    content: "\eb15";
  }
  .bx-home-smile:before {
    content: "\eb16";
  }
  .bx-horizontal-center:before {
    content: "\eb17";
  }
  .bx-hotel:before {
    content: "\eb18";
  }
  .bx-hourglass:before {
    content: "\eb19";
  }
  .bx-id-card:before {
    content: "\eb1a";
  }
  .bx-image:before {
    content: "\eb1b";
  }
  .bx-image-add:before {
    content: "\eb1c";
  }
  .bx-image-alt:before {
    content: "\eb1d";
  }
  .bx-images:before {
    content: "\eb1e";
  }
  .bx-import:before {
    content: "\eb1f";
  }
  .bx-infinite:before {
    content: "\eb20";
  }
  .bx-info-circle:before {
    content: "\eb21";
  }
  .bx-info-square:before {
    content: "\eb22";
  }
  .bx-intersect:before {
    content: "\eb23";
  }
  .bx-italic:before {
    content: "\eb24";
  }
  .bx-joystick:before {
    content: "\eb25";
  }
  .bx-joystick-alt:before {
    content: "\eb26";
  }
  .bx-joystick-button:before {
    content: "\eb27";
  }
  .bx-key:before {
    content: "\eb28";
  }
  .bx-label:before {
    content: "\eb29";
  }
  .bx-landscape:before {
    content: "\eb2a";
  }
  .bx-laptop:before {
    content: "\eb2b";
  }
  .bx-last-page:before {
    content: "\eb2c";
  }
  .bx-laugh:before {
    content: "\eb2d";
  }
  .bx-layer:before {
    content: "\eb2e";
  }
  .bx-layer-minus:before {
    content: "\eb2f";
  }
  .bx-layer-plus:before {
    content: "\eb30";
  }
  .bx-layout:before {
    content: "\eb31";
  }
  .bx-left-arrow:before {
    content: "\eb32";
  }
  .bx-left-arrow-alt:before {
    content: "\eb33";
  }
  .bx-left-arrow-circle:before {
    content: "\eb34";
  }
  .bx-left-down-arrow-circle:before {
    content: "\eb35";
  }
  .bx-left-indent:before {
    content: "\eb36";
  }
  .bx-left-top-arrow-circle:before {
    content: "\eb37";
  }
  .bx-library:before {
    content: "\eb38";
  }
  .bx-like:before {
    content: "\eb39";
  }
  .bx-line-chart:before {
    content: "\eb3a";
  }
  .bx-line-chart-down:before {
    content: "\eb3b";
  }
  .bx-link:before {
    content: "\eb3c";
  }
  .bx-link-alt:before {
    content: "\eb3d";
  }
  .bx-link-external:before {
    content: "\eb3e";
  }
  .bx-lira:before {
    content: "\eb3f";
  }
  .bx-list-check:before {
    content: "\eb40";
  }
  .bx-list-minus:before {
    content: "\eb41";
  }
  .bx-list-ol:before {
    content: "\eb42";
  }
  .bx-list-plus:before {
    content: "\eb43";
  }
  .bx-list-ul:before {
    content: "\eb44";
  }
  .bx-loader:before {
    content: "\eb45";
  }
  .bx-loader-alt:before {
    content: "\eb46";
  }
  .bx-loader-circle:before {
    content: "\eb47";
  }
  .bx-location-plus:before {
    content: "\eb48";
  }
  .bx-lock:before {
    content: "\eb49";
  }
  .bx-lock-alt:before {
    content: "\eb4a";
  }
  .bx-lock-open:before {
    content: "\eb4b";
  }
  .bx-lock-open-alt:before {
    content: "\eb4c";
  }
  .bx-log-in:before {
    content: "\eb4d";
  }
  .bx-log-in-circle:before {
    content: "\eb4e";
  }
  .bx-log-out:before {
    content: "\eb4f";
  }
  .bx-log-out-circle:before {
    content: "\eb50";
  }
  .bx-low-vision:before {
    content: "\eb51";
  }
  .bx-magnet:before {
    content: "\eb52";
  }
  .bx-mail-send:before {
    content: "\eb53";
  }
  .bx-male:before {
    content: "\eb54";
  }
  .bx-male-sign:before {
    content: "\eb55";
  }
  .bx-map:before {
    content: "\eb56";
  }
  .bx-map-alt:before {
    content: "\eb57";
  }
  .bx-map-pin:before {
    content: "\eb58";
  }
  .bx-mask:before {
    content: "\eb59";
  }
  .bx-medal:before {
    content: "\eb5a";
  }
  .bx-meh:before {
    content: "\eb5b";
  }
  .bx-meh-alt:before {
    content: "\eb5c";
  }
  .bx-meh-blank:before {
    content: "\eb5d";
  }
  .bx-memory-card:before {
    content: "\eb5e";
  }
  .bx-menu:before {
    content: "\eb5f";
  }
  .bx-menu-alt-left:before {
    content: "\ef5b";
  }
  .bx-menu-alt-right:before {
    content: "\eb61";
  }
  .bx-merge:before {
    content: "\eb62";
  }
  .bx-message:before {
    content: "\eb63";
  }
  .bx-message-add:before {
    content: "\eb64";
  }
  .bx-message-alt:before {
    content: "\eb65";
  }
  .bx-message-alt-add:before {
    content: "\eb66";
  }
  .bx-message-alt-check:before {
    content: "\eb67";
  }
  .bx-message-alt-detail:before {
    content: "\eb68";
  }
  .bx-message-alt-dots:before {
    content: "\eb69";
  }
  .bx-message-alt-edit:before {
    content: "\eb6a";
  }
  .bx-message-alt-error:before {
    content: "\eb6b";
  }
  .bx-message-alt-minus:before {
    content: "\eb6c";
  }
  .bx-message-alt-x:before {
    content: "\eb6d";
  }
  .bx-message-check:before {
    content: "\eb6e";
  }
  .bx-message-detail:before {
    content: "\eb6f";
  }
  .bx-message-dots:before {
    content: "\eb70";
  }
  .bx-message-edit:before {
    content: "\eb71";
  }
  .bx-message-error:before {
    content: "\eb72";
  }
  .bx-message-minus:before {
    content: "\eb73";
  }
  .bx-message-rounded:before {
    content: "\eb74";
  }
  .bx-message-rounded-add:before {
    content: "\eb75";
  }
  .bx-message-rounded-check:before {
    content: "\eb76";
  }
  .bx-message-rounded-detail:before {
    content: "\eb77";
  }
  .bx-message-rounded-dots:before {
    content: "\eb78";
  }
  .bx-message-rounded-edit:before {
    content: "\ef5c";
  }
  .bx-message-rounded-error:before {
    content: "\eb7a";
  }
  .bx-message-rounded-minus:before {
    content: "\eb7b";
  }
  .bx-message-rounded-x:before {
    content: "\eb7c";
  }
  .bx-message-square:before {
    content: "\eb7d";
  }
  .bx-message-square-add:before {
    content: "\eb7e";
  }
  .bx-message-square-check:before {
    content: "\eb7f";
  }
  .bx-message-square-detail:before {
    content: "\eb80";
  }
  .bx-message-square-dots:before {
    content: "\eb81";
  }
  .bx-message-square-edit:before {
    content: "\eb82";
  }
  .bx-message-square-error:before {
    content: "\eb83";
  }
  .bx-message-square-minus:before {
    content: "\eb84";
  }
  .bx-message-square-x:before {
    content: "\eb85";
  }
  .bx-message-x:before {
    content: "\eb86";
  }
  .bx-meteor:before {
    content: "\eb87";
  }
  .bx-microchip:before {
    content: "\eb88";
  }
  .bx-microphone:before {
    content: "\eb89";
  }
  .bx-microphone-off:before {
    content: "\eb8a";
  }
  .bx-minus:before {
    content: "\eb8b";
  }
  .bx-minus-back:before {
    content: "\eb8c";
  }
  .bx-minus-circle:before {
    content: "\eb8d";
  }
  .bx-minus-front:before {
    content: "\eb8e";
  }
  .bx-mobile:before {
    content: "\eb8f";
  }
  .bx-mobile-alt:before {
    content: "\eb90";
  }
  .bx-mobile-landscape:before {
    content: "\eb91";
  }
  .bx-mobile-vibration:before {
    content: "\ef5d";
  }
  .bx-money:before {
    content: "\eb93";
  }
  .bx-moon:before {
    content: "\eb94";
  }
  .bx-mouse:before {
    content: "\eb95";
  }
  .bx-mouse-alt:before {
    content: "\eb96";
  }
  .bx-move:before {
    content: "\eb97";
  }
  .bx-move-horizontal:before {
    content: "\eb98";
  }
  .bx-move-vertical:before {
    content: "\eb99";
  }
  .bx-movie:before {
    content: "\eb9a";
  }
  .bx-movie-play:before {
    content: "\eb9b";
  }
  .bx-music:before {
    content: "\eb9c";
  }
  .bx-navigation:before {
    content: "\eb9d";
  }
  .bx-network-chart:before {
    content: "\eb9e";
  }
  .bx-news:before {
    content: "\eb9f";
  }
  .bx-no-entry:before {
    content: "\eba0";
  }
  .bx-note:before {
    content: "\eba1";
  }
  .bx-notepad:before {
    content: "\eba2";
  }
  .bx-notification:before {
    content: "\eba3";
  }
  .bx-notification-off:before {
    content: "\eba4";
  }
  .bx-outline:before {
    content: "\eba5";
  }
  .bx-package:before {
    content: "\eba6";
  }
  .bx-paint:before {
    content: "\eba7";
  }
  .bx-paint-roll:before {
    content: "\eba8";
  }
  .bx-palette:before {
    content: "\eba9";
  }
  .bx-paperclip:before {
    content: "\ebaa";
  }
  .bx-paper-plane:before {
    content: "\ef61";
  }
  .bx-paragraph:before {
    content: "\ebac";
  }
  .bx-paste:before {
    content: "\ebad";
  }
  .bx-pause:before {
    content: "\ebae";
  }
  .bx-pause-circle:before {
    content: "\ebaf";
  }
  .bx-pen:before {
    content: "\ebb0";
  }
  .bx-pencil:before {
    content: "\ebb1";
  }
  .bx-phone:before {
    content: "\ebb2";
  }
  .bx-phone-call:before {
    content: "\ebb3";
  }
  .bx-phone-incoming:before {
    content: "\ebb4";
  }
  .bx-phone-off:before {
    content: "\ebb5";
  }
  .bx-phone-outgoing:before {
    content: "\ebb6";
  }
  .bx-photo-album:before {
    content: "\ebb7";
  }
  .bx-pie-chart:before {
    content: "\ebb8";
  }
  .bx-pie-chart-alt:before {
    content: "\ebb9";
  }
  .bx-pie-chart-alt-2:before {
    content: "\ebba";
  }
  .bx-pin:before {
    content: "\ebbb";
  }
  .bx-planet:before {
    content: "\ebbc";
  }
  .bx-play:before {
    content: "\ebbd";
  }
  .bx-play-circle:before {
    content: "\ebbe";
  }
  .bx-plug:before {
    content: "\ebbf";
  }
  .bx-plus:before {
    content: "\ebc0";
  }
  .bx-plus-circle:before {
    content: "\ebc1";
  }
  .bx-plus-medical:before {
    content: "\ebc2";
  }
  .bx-podcast:before {
    content: "\ebc3";
  }
  .bx-pointer:before {
    content: "\ef5e";
  }
  .bx-poll:before {
    content: "\ebc5";
  }
  .bx-polygon:before {
    content: "\ebc6";
  }
  .bx-pound:before {
    content: "\ebc7";
  }
  .bx-power-off:before {
    content: "\ebc8";
  }
  .bx-printer:before {
    content: "\ebc9";
  }
  .bx-pulse:before {
    content: "\ebca";
  }
  .bx-purchase-tag:before {
    content: "\ebcb";
  }
  .bx-purchase-tag-alt:before {
    content: "\ebcc";
  }
  .bx-pyramid:before {
    content: "\ebcd";
  }
  .bx-qr:before {
    content: "\ebce";
  }
  .bx-qr-scan:before {
    content: "\ebcf";
  }
  .bx-question-mark:before {
    content: "\ebd0";
  }
  .bx-radar:before {
    content: "\ebd1";
  }
  .bx-radio:before {
    content: "\ebd2";
  }
  .bx-radio-circle:before {
    content: "\ebd3";
  }
  .bx-radio-circle-marked:before {
    content: "\ebd4";
  }
  .bx-receipt:before {
    content: "\ebd5";
  }
  .bx-rectangle:before {
    content: "\ebd6";
  }
  .bx-recycle:before {
    content: "\ebd7";
  }
  .bx-redo:before {
    content: "\ebd8";
  }
  .bx-refresh:before {
    content: "\ebd9";
  }
  .bx-registered:before {
    content: "\ebda";
  }
  .bx-rename:before {
    content: "\ebdb";
  }
  .bx-repeat:before {
    content: "\ebdc";
  }
  .bx-reply:before {
    content: "\ef5f";
  }
  .bx-reply-all:before {
    content: "\ebde";
  }
  .bx-repost:before {
    content: "\ebdf";
  }
  .bx-reset:before {
    content: "\ebe0";
  }
  .bx-restaurant:before {
    content: "\ebe1";
  }
  .bx-revision:before {
    content: "\ebe2";
  }
  .bx-rewind:before {
    content: "\ebe3";
  }
  .bx-rewind-circle:before {
    content: "\ebe4";
  }
  .bx-right-arrow:before {
    content: "\ebe5";
  }
  .bx-right-arrow-alt:before {
    content: "\ebe6";
  }
  .bx-right-arrow-circle:before {
    content: "\ebe7";
  }
  .bx-right-down-arrow-circle:before {
    content: "\ebe8";
  }
  .bx-right-indent:before {
    content: "\ebe9";
  }
  .bx-right-top-arrow-circle:before {
    content: "\ebea";
  }
  .bx-rocket:before {
    content: "\ebeb";
  }
  .bx-rotate-left:before {
    content: "\ebec";
  }
  .bx-rotate-right:before {
    content: "\ebed";
  }
  .bx-rss:before {
    content: "\ebee";
  }
  .bx-ruble:before {
    content: "\ebef";
  }
  .bx-ruler:before {
    content: "\ebf0";
  }
  .bx-run:before {
    content: "\ebf1";
  }
  .bx-rupee:before {
    content: "\ebf2";
  }
  .bx-sad:before {
    content: "\ebf3";
  }
  .bx-save:before {
    content: "\ebf4";
  }
  .bx-scan:before {
    content: "\ebf5";
  }
  .bx-screenshot:before {
    content: "\ef60";
  }
  .bx-search:before {
    content: "\ebf7";
  }
  .bx-search-alt:before {
    content: "\ebf8";
  }
  .bx-search-alt-2:before {
    content: "\ebf9";
  }
  .bx-selection:before {
    content: "\ebfa";
  }
  .bx-select-multiple:before {
    content: "\ebfb";
  }
  .bx-send:before {
    content: "\ebfc";
  }
  .bx-server:before {
    content: "\ebfd";
  }
  .bx-shape-circle:before {
    content: "\ebfe";
  }
  .bx-shape-polygon:before {
    content: "\ebff";
  }
  .bx-shape-square:before {
    content: "\ec00";
  }
  .bx-shape-triangle:before {
    content: "\ec01";
  }
  .bx-share:before {
    content: "\ec02";
  }
  .bx-share-alt:before {
    content: "\ec03";
  }
  .bx-shekel:before {
    content: "\ec04";
  }
  .bx-shield:before {
    content: "\ec05";
  }
  .bx-shield-alt:before {
    content: "\ec06";
  }
  .bx-shield-alt-2:before {
    content: "\ec07";
  }
  .bx-shield-quarter:before {
    content: "\ec08";
  }
  .bx-shield-x:before {
    content: "\ec09";
  }
  .bx-shocked:before {
    content: "\ec0a";
  }
  .bx-shopping-bag:before {
    content: "\ec0b";
  }
  .bx-show:before {
    content: "\ec0c";
  }
  .bx-show-alt:before {
    content: "\ec0d";
  }
  .bx-shuffle:before {
    content: "\ec0e";
  }
  .bx-sidebar:before {
    content: "\ec0f";
  }
  .bx-sitemap:before {
    content: "\ec10";
  }
  .bx-skip-next:before {
    content: "\ec11";
  }
  .bx-skip-next-circle:before {
    content: "\ec12";
  }
  .bx-skip-previous:before {
    content: "\ec13";
  }
  .bx-skip-previous-circle:before {
    content: "\ec14";
  }
  .bx-sleepy:before {
    content: "\ec15";
  }
  .bx-slider:before {
    content: "\ec16";
  }
  .bx-slider-alt:before {
    content: "\ec17";
  }
  .bx-slideshow:before {
    content: "\ec18";
  }
  .bx-smile:before {
    content: "\ec19";
  }
  .bx-sort:before {
    content: "\ec1a";
  }
  .bx-sort-alt-2:before {
    content: "\ec1b";
  }
  .bx-sort-a-z:before {
    content: "\ec1c";
  }
  .bx-sort-down:before {
    content: "\ec1d";
  }
  .bx-sort-up:before {
    content: "\ec1e";
  }
  .bx-sort-z-a:before {
    content: "\ec1f";
  }
  .bx-spa:before {
    content: "\ec20";
  }
  .bx-space-bar:before {
    content: "\ec21";
  }
  .bx-speaker:before {
    content: "\ec22";
  }
  .bx-spray-can:before {
    content: "\ec23";
  }
  .bx-spreadsheet:before {
    content: "\ec24";
  }
  .bx-square:before {
    content: "\ec25";
  }
  .bx-square-rounded:before {
    content: "\ec26";
  }
  .bx-star:before {
    content: "\ec27";
  }
  .bx-station:before {
    content: "\ec28";
  }
  .bx-stats:before {
    content: "\ec29";
  }
  .bx-sticker:before {
    content: "\ec2a";
  }
  .bx-stop:before {
    content: "\ec2b";
  }
  .bx-stop-circle:before {
    content: "\ec2c";
  }
  .bx-stopwatch:before {
    content: "\ec2d";
  }
  .bx-store:before {
    content: "\ec2e";
  }
  .bx-store-alt:before {
    content: "\ec2f";
  }
  .bx-street-view:before {
    content: "\ec30";
  }
  .bx-strikethrough:before {
    content: "\ec31";
  }
  .bx-subdirectory-left:before {
    content: "\ec32";
  }
  .bx-subdirectory-right:before {
    content: "\ec33";
  }
  .bx-sun:before {
    content: "\ec34";
  }
  .bx-support:before {
    content: "\ec35";
  }
  .bx-swim:before {
    content: "\ec36";
  }
  .bx-sync:before {
    content: "\ec37";
  }
  .bx-tab:before {
    content: "\ec38";
  }
  .bx-table:before {
    content: "\ec39";
  }
  .bx-tachometer:before {
    content: "\ec3a";
  }
  .bx-tag:before {
    content: "\ec3b";
  }
  .bx-tag-alt:before {
    content: "\ec3c";
  }
  .bx-target-lock:before {
    content: "\ec3d";
  }
  .bx-task:before {
    content: "\ec3e";
  }
  .bx-task-x:before {
    content: "\ec3f";
  }
  .bx-taxi:before {
    content: "\ec40";
  }
  .bx-tennis-ball:before {
    content: "\ec41";
  }
  .bx-terminal:before {
    content: "\ec42";
  }
  .bx-test-tube:before {
    content: "\ec43";
  }
  .bx-text:before {
    content: "\ec44";
  }
  .bx-time:before {
    content: "\ec45";
  }
  .bx-time-five:before {
    content: "\ec46";
  }
  .bx-timer:before {
    content: "\ec47";
  }
  .bx-tired:before {
    content: "\ec48";
  }
  .bx-toggle-left:before {
    content: "\ec49";
  }
  .bx-toggle-right:before {
    content: "\ec4a";
  }
  .bx-tone:before {
    content: "\ec4b";
  }
  .bx-traffic-cone:before {
    content: "\ec4c";
  }
  .bx-train:before {
    content: "\ec4d";
  }
  .bx-transfer:before {
    content: "\ec4e";
  }
  .bx-transfer-alt:before {
    content: "\ec4f";
  }
  .bx-trash:before {
    content: "\ec50";
  }
  .bx-trash-alt:before {
    content: "\ec51";
  }
  .bx-trending-down:before {
    content: "\ec52";
  }
  .bx-trending-up:before {
    content: "\ec53";
  }
  .bx-trim:before {
    content: "\ec54";
  }
  .bx-trip:before {
    content: "\ec55";
  }
  .bx-trophy:before {
    content: "\ec56";
  }
  .bx-tv:before {
    content: "\ec57";
  }
  .bx-underline:before {
    content: "\ec58";
  }
  .bx-undo:before {
    content: "\ec59";
  }
  .bx-unite:before {
    content: "\ec5a";
  }
  .bx-unlink:before {
    content: "\ec5b";
  }
  .bx-up-arrow:before {
    content: "\ec5c";
  }
  .bx-up-arrow-alt:before {
    content: "\ec5d";
  }
  .bx-up-arrow-circle:before {
    content: "\ec5e";
  }
  .bx-upload:before {
    content: "\ec5f";
  }
  .bx-upside-down:before {
    content: "\ec60";
  }
  .bx-upvote:before {
    content: "\ec61";
  }
  .bx-usb:before {
    content: "\ec62";
  }
  .bx-user:before {
    content: "\ec63";
  }
  .bx-user-check:before {
    content: "\ec64";
  }
  .bx-user-circle:before {
    content: "\ec65";
  }
  .bx-user-minus:before {
    content: "\ec66";
  }
  .bx-user-pin:before {
    content: "\ec67";
  }
  .bx-user-plus:before {
    content: "\ec68";
  }
  .bx-user-voice:before {
    content: "\ec69";
  }
  .bx-user-x:before {
    content: "\ec6a";
  }
  .bx-vector:before {
    content: "\ec6b";
  }
  .bx-vertical-center:before {
    content: "\ec6c";
  }
  .bx-vial:before {
    content: "\ec6d";
  }
  .bx-video:before {
    content: "\ec6e";
  }
  .bx-video-off:before {
    content: "\ec6f";
  }
  .bx-video-plus:before {
    content: "\ec70";
  }
  .bx-video-recording:before {
    content: "\ec71";
  }
  .bx-voicemail:before {
    content: "\ec72";
  }
  .bx-volume:before {
    content: "\ec73";
  }
  .bx-volume-full:before {
    content: "\ec74";
  }
  .bx-volume-low:before {
    content: "\ec75";
  }
  .bx-volume-mute:before {
    content: "\ec76";
  }
  .bx-walk:before {
    content: "\ec77";
  }
  .bx-wallet:before {
    content: "\ec78";
  }
  .bx-wallet-alt:before {
    content: "\ec79";
  }
  .bx-water:before {
    content: "\ec7a";
  }
  .bx-webcam:before {
    content: "\ec7b";
  }
  .bx-wifi:before {
    content: "\ec7c";
  }
  .bx-wifi-0:before {
    content: "\ec7d";
  }
  .bx-wifi-1:before {
    content: "\ec7e";
  }
  .bx-wifi-2:before {
    content: "\ec7f";
  }
  .bx-wifi-off:before {
    content: "\ec80";
  }
  .bx-wind:before {
    content: "\ec81";
  }
  .bx-window:before {
    content: "\ec82";
  }
  .bx-window-alt:before {
    content: "\ec83";
  }
  .bx-window-close:before {
    content: "\ec84";
  }
  .bx-window-open:before {
    content: "\ec85";
  }
  .bx-windows:before {
    content: "\ec86";
  }
  .bx-wine:before {
    content: "\ec87";
  }
  .bx-wink-smile:before {
    content: "\ec88";
  }
  .bx-wink-tongue:before {
    content: "\ec89";
  }
  .bx-won:before {
    content: "\ec8a";
  }
  .bx-world:before {
    content: "\ec8b";
  }
  .bx-wrench:before {
    content: "\ec8c";
  }
  .bx-x:before {
    content: "\ec8d";
  }
  .bx-x-circle:before {
    content: "\ec8e";
  }
  .bx-yen:before {
    content: "\ec8f";
  }
  .bx-zoom-in:before {
    content: "\ec90";
  }
  .bx-zoom-out:before {
    content: "\ec91";
  }
  .bxs-party:before {
    content: "\ec92";
  }
  .bxs-hot:before {
    content: "\ec93";
  }
  .bxs-droplet:before {
    content: "\ec94";
  }
  .bxs-cat:before {
    content: "\ec95";
  }
  .bxs-dog:before {
    content: "\ec96";
  }
  .bxs-injection:before {
    content: "\ec97";
  }
  .bxs-leaf:before {
    content: "\ec98";
  }
  .bxs-add-to-queue:before {
    content: "\ec99";
  }
  .bxs-adjust:before {
    content: "\ec9a";
  }
  .bxs-adjust-alt:before {
    content: "\ec9b";
  }
  .bxs-alarm:before {
    content: "\ec9c";
  }
  .bxs-alarm-add:before {
    content: "\ec9d";
  }
  .bxs-alarm-exclamation:before {
    content: "\ec9e";
  }
  .bxs-alarm-off:before {
    content: "\ec9f";
  }
  .bxs-alarm-snooze:before {
    content: "\eca0";
  }
  .bxs-album:before {
    content: "\eca1";
  }
  .bxs-ambulance:before {
    content: "\eca2";
  }
  .bxs-analyse:before {
    content: "\eca3";
  }
  .bxs-angry:before {
    content: "\eca4";
  }
  .bxs-arch:before {
    content: "\eca5";
  }
  .bxs-archive:before {
    content: "\eca6";
  }
  .bxs-archive-in:before {
    content: "\eca7";
  }
  .bxs-archive-out:before {
    content: "\eca8";
  }
  .bxs-area:before {
    content: "\eca9";
  }
  .bxs-arrow-from-bottom:before {
    content: "\ecaa";
  }
  .bxs-arrow-from-left:before {
    content: "\ecab";
  }
  .bxs-arrow-from-right:before {
    content: "\ecac";
  }
  .bxs-arrow-from-top:before {
    content: "\ecad";
  }
  .bxs-arrow-to-bottom:before {
    content: "\ecae";
  }
  .bxs-arrow-to-left:before {
    content: "\ecaf";
  }
  .bxs-arrow-to-right:before {
    content: "\ecb0";
  }
  .bxs-arrow-to-top:before {
    content: "\ecb1";
  }
  .bxs-award:before {
    content: "\ecb2";
  }
  .bxs-baby-carriage:before {
    content: "\ecb3";
  }
  .bxs-backpack:before {
    content: "\ecb4";
  }
  .bxs-badge:before {
    content: "\ecb5";
  }
  .bxs-badge-check:before {
    content: "\ecb6";
  }
  .bxs-badge-dollar:before {
    content: "\ecb7";
  }
  .bxs-ball:before {
    content: "\ecb8";
  }
  .bxs-band-aid:before {
    content: "\ecb9";
  }
  .bxs-bank:before {
    content: "\ecba";
  }
  .bxs-bar-chart-alt-2:before {
    content: "\ecbb";
  }
  .bxs-bar-chart-square:before {
    content: "\ecbc";
  }
  .bxs-barcode:before {
    content: "\ecbd";
  }
  .bxs-baseball:before {
    content: "\ecbe";
  }
  .bxs-basket:before {
    content: "\ecbf";
  }
  .bxs-basketball:before {
    content: "\ecc0";
  }
  .bxs-bath:before {
    content: "\ecc1";
  }
  .bxs-battery:before {
    content: "\ecc2";
  }
  .bxs-battery-charging:before {
    content: "\ecc3";
  }
  .bxs-battery-full:before {
    content: "\ecc4";
  }
  .bxs-battery-low:before {
    content: "\ecc5";
  }
  .bxs-bed:before {
    content: "\ecc6";
  }
  .bxs-been-here:before {
    content: "\ecc7";
  }
  .bxs-beer:before {
    content: "\ecc8";
  }
  .bxs-bell:before {
    content: "\ecc9";
  }
  .bxs-bell-minus:before {
    content: "\ecca";
  }
  .bxs-bell-off:before {
    content: "\eccb";
  }
  .bxs-bell-plus:before {
    content: "\eccc";
  }
  .bxs-bell-ring:before {
    content: "\eccd";
  }
  .bxs-bible:before {
    content: "\ecce";
  }
  .bxs-binoculars:before {
    content: "\eccf";
  }
  .bxs-blanket:before {
    content: "\ecd0";
  }
  .bxs-bolt:before {
    content: "\ecd1";
  }
  .bxs-bolt-circle:before {
    content: "\ecd2";
  }
  .bxs-bomb:before {
    content: "\ecd3";
  }
  .bxs-bone:before {
    content: "\ecd4";
  }
  .bxs-bong:before {
    content: "\ecd5";
  }
  .bxs-book:before {
    content: "\ecd6";
  }
  .bxs-book-add:before {
    content: "\ecd7";
  }
  .bxs-book-alt:before {
    content: "\ecd8";
  }
  .bxs-book-bookmark:before {
    content: "\ecd9";
  }
  .bxs-book-content:before {
    content: "\ecda";
  }
  .bxs-book-heart:before {
    content: "\ecdb";
  }
  .bxs-bookmark:before {
    content: "\ecdc";
  }
  .bxs-bookmark-alt:before {
    content: "\ecdd";
  }
  .bxs-bookmark-alt-minus:before {
    content: "\ecde";
  }
  .bxs-bookmark-alt-plus:before {
    content: "\ecdf";
  }
  .bxs-bookmark-heart:before {
    content: "\ece0";
  }
  .bxs-bookmark-minus:before {
    content: "\ece1";
  }
  .bxs-bookmark-plus:before {
    content: "\ece2";
  }
  .bxs-bookmarks:before {
    content: "\ece3";
  }
  .bxs-bookmark-star:before {
    content: "\ece4";
  }
  .bxs-book-open:before {
    content: "\ece5";
  }
  .bxs-book-reader:before {
    content: "\ece6";
  }
  .bxs-bot:before {
    content: "\ece7";
  }
  .bxs-bowling-ball:before {
    content: "\ece8";
  }
  .bxs-box:before {
    content: "\ece9";
  }
  .bxs-brain:before {
    content: "\ecea";
  }
  .bxs-briefcase:before {
    content: "\eceb";
  }
  .bxs-briefcase-alt:before {
    content: "\ecec";
  }
  .bxs-briefcase-alt-2:before {
    content: "\eced";
  }
  .bxs-brightness:before {
    content: "\ecee";
  }
  .bxs-brightness-half:before {
    content: "\ecef";
  }
  .bxs-brush:before {
    content: "\ecf0";
  }
  .bxs-brush-alt:before {
    content: "\ecf1";
  }
  .bxs-bug:before {
    content: "\ecf2";
  }
  .bxs-bug-alt:before {
    content: "\ecf3";
  }
  .bxs-building:before {
    content: "\ecf4";
  }
  .bxs-building-house:before {
    content: "\ecf5";
  }
  .bxs-buildings:before {
    content: "\ecf6";
  }
  .bxs-bulb:before {
    content: "\ecf7";
  }
  .bxs-bullseye:before {
    content: "\ecf8";
  }
  .bxs-buoy:before {
    content: "\ecf9";
  }
  .bxs-bus:before {
    content: "\ecfa";
  }
  .bxs-business:before {
    content: "\ecfb";
  }
  .bxs-bus-school:before {
    content: "\ecfc";
  }
  .bxs-cabinet:before {
    content: "\ecfd";
  }
  .bxs-cake:before {
    content: "\ecfe";
  }
  .bxs-calculator:before {
    content: "\ecff";
  }
  .bxs-calendar:before {
    content: "\ed00";
  }
  .bxs-calendar-alt:before {
    content: "\ed01";
  }
  .bxs-calendar-check:before {
    content: "\ed02";
  }
  .bxs-calendar-edit:before {
    content: "\ed03";
  }
  .bxs-calendar-event:before {
    content: "\ed04";
  }
  .bxs-calendar-exclamation:before {
    content: "\ed05";
  }
  .bxs-calendar-heart:before {
    content: "\ed06";
  }
  .bxs-calendar-minus:before {
    content: "\ed07";
  }
  .bxs-calendar-plus:before {
    content: "\ed08";
  }
  .bxs-calendar-star:before {
    content: "\ed09";
  }
  .bxs-calendar-week:before {
    content: "\ed0a";
  }
  .bxs-calendar-x:before {
    content: "\ed0b";
  }
  .bxs-camera:before {
    content: "\ed0c";
  }
  .bxs-camera-home:before {
    content: "\ed0d";
  }
  .bxs-camera-movie:before {
    content: "\ed0e";
  }
  .bxs-camera-off:before {
    content: "\ed0f";
  }
  .bxs-camera-plus:before {
    content: "\ed10";
  }
  .bxs-capsule:before {
    content: "\ed11";
  }
  .bxs-captions:before {
    content: "\ed12";
  }
  .bxs-car:before {
    content: "\ed13";
  }
  .bxs-car-battery:before {
    content: "\ed14";
  }
  .bxs-car-crash:before {
    content: "\ed15";
  }
  .bxs-card:before {
    content: "\ed16";
  }
  .bxs-caret-down-circle:before {
    content: "\ed17";
  }
  .bxs-caret-down-square:before {
    content: "\ed18";
  }
  .bxs-caret-left-circle:before {
    content: "\ed19";
  }
  .bxs-caret-left-square:before {
    content: "\ed1a";
  }
  .bxs-caret-right-circle:before {
    content: "\ed1b";
  }
  .bxs-caret-right-square:before {
    content: "\ed1c";
  }
  .bxs-caret-up-circle:before {
    content: "\ed1d";
  }
  .bxs-caret-up-square:before {
    content: "\ed1e";
  }
  .bxs-car-garage:before {
    content: "\ed1f";
  }
  .bxs-car-mechanic:before {
    content: "\ed20";
  }
  .bxs-carousel:before {
    content: "\ed21";
  }
  .bxs-cart:before {
    content: "\ed22";
  }
  .bxs-cart-add:before {
    content: "\ed23";
  }
  .bxs-cart-alt:before {
    content: "\ed24";
  }
  .bxs-cart-download:before {
    content: "\ed25";
  }
  .bxs-car-wash:before {
    content: "\ed26";
  }
  .bxs-category:before {
    content: "\ed27";
  }
  .bxs-category-alt:before {
    content: "\ed28";
  }
  .bxs-cctv:before {
    content: "\ed29";
  }
  .bxs-certification:before {
    content: "\ed2a";
  }
  .bxs-chalkboard:before {
    content: "\ed2b";
  }
  .bxs-chart:before {
    content: "\ed2c";
  }
  .bxs-chat:before {
    content: "\ed2d";
  }
  .bxs-checkbox:before {
    content: "\ed2e";
  }
  .bxs-checkbox-checked:before {
    content: "\ed2f";
  }
  .bxs-checkbox-minus:before {
    content: "\ed30";
  }
  .bxs-check-circle:before {
    content: "\ed31";
  }
  .bxs-check-shield:before {
    content: "\ed32";
  }
  .bxs-check-square:before {
    content: "\ed33";
  }
  .bxs-chess:before {
    content: "\ed34";
  }
  .bxs-chevron-down:before {
    content: "\ed35";
  }
  .bxs-chevron-down-circle:before {
    content: "\ed36";
  }
  .bxs-chevron-down-square:before {
    content: "\ed37";
  }
  .bxs-chevron-left:before {
    content: "\ed38";
  }
  .bxs-chevron-left-circle:before {
    content: "\ed39";
  }
  .bxs-chevron-left-square:before {
    content: "\ed3a";
  }
  .bxs-chevron-right:before {
    content: "\ed3b";
  }
  .bxs-chevron-right-circle:before {
    content: "\ed3c";
  }
  .bxs-chevron-right-square:before {
    content: "\ed3d";
  }
  .bxs-chevrons-down:before {
    content: "\ed3e";
  }
  .bxs-chevrons-left:before {
    content: "\ed3f";
  }
  .bxs-chevrons-right:before {
    content: "\ed40";
  }
  .bxs-chevrons-up:before {
    content: "\ed41";
  }
  .bxs-chevron-up:before {
    content: "\ed42";
  }
  .bxs-chevron-up-circle:before {
    content: "\ed43";
  }
  .bxs-chevron-up-square:before {
    content: "\ed44";
  }
  .bxs-chip:before {
    content: "\ed45";
  }
  .bxs-church:before {
    content: "\ed46";
  }
  .bxs-circle:before {
    content: "\ed47";
  }
  .bxs-city:before {
    content: "\ed48";
  }
  .bxs-clinic:before {
    content: "\ed49";
  }
  .bxs-cloud:before {
    content: "\ed4a";
  }
  .bxs-cloud-download:before {
    content: "\ed4b";
  }
  .bxs-cloud-lightning:before {
    content: "\ed4c";
  }
  .bxs-cloud-rain:before {
    content: "\ed4d";
  }
  .bxs-cloud-upload:before {
    content: "\ed4e";
  }
  .bxs-coffee:before {
    content: "\ed4f";
  }
  .bxs-coffee-alt:before {
    content: "\ed50";
  }
  .bxs-coffee-togo:before {
    content: "\ed51";
  }
  .bxs-cog:before {
    content: "\ed52";
  }
  .bxs-coin:before {
    content: "\ed53";
  }
  .bxs-coin-stack:before {
    content: "\ed54";
  }
  .bxs-collection:before {
    content: "\ed55";
  }
  .bxs-color-fill:before {
    content: "\ed56";
  }
  .bxs-comment:before {
    content: "\ed57";
  }
  .bxs-comment-add:before {
    content: "\ed58";
  }
  .bxs-comment-check:before {
    content: "\ed59";
  }
  .bxs-comment-detail:before {
    content: "\ed5a";
  }
  .bxs-comment-dots:before {
    content: "\ed5b";
  }
  .bxs-comment-edit:before {
    content: "\ed5c";
  }
  .bxs-comment-error:before {
    content: "\ed5d";
  }
  .bxs-comment-minus:before {
    content: "\ed5e";
  }
  .bxs-comment-x:before {
    content: "\ed5f";
  }
  .bxs-compass:before {
    content: "\ed60";
  }
  .bxs-component:before {
    content: "\ed61";
  }
  .bxs-confused:before {
    content: "\ed62";
  }
  .bxs-contact:before {
    content: "\ed63";
  }
  .bxs-conversation:before {
    content: "\ed64";
  }
  .bxs-cookie:before {
    content: "\ed65";
  }
  .bxs-cool:before {
    content: "\ed66";
  }
  .bxs-copy:before {
    content: "\ed67";
  }
  .bxs-copy-alt:before {
    content: "\ed68";
  }
  .bxs-copyright:before {
    content: "\ed69";
  }
  .bxs-coupon:before {
    content: "\ed6a";
  }
  .bxs-credit-card:before {
    content: "\ed6b";
  }
  .bxs-credit-card-alt:before {
    content: "\ed6c";
  }
  .bxs-credit-card-front:before {
    content: "\ed6d";
  }
  .bxs-crop:before {
    content: "\ed6e";
  }
  .bxs-crown:before {
    content: "\ed6f";
  }
  .bxs-cube:before {
    content: "\ed70";
  }
  .bxs-cube-alt:before {
    content: "\ed71";
  }
  .bxs-cuboid:before {
    content: "\ed72";
  }
  .bxs-customize:before {
    content: "\ed73";
  }
  .bxs-cylinder:before {
    content: "\ed74";
  }
  .bxs-dashboard:before {
    content: "\ed75";
  }
  .bxs-data:before {
    content: "\ed76";
  }
  .bxs-detail:before {
    content: "\ed77";
  }
  .bxs-devices:before {
    content: "\ed78";
  }
  .bxs-diamond:before {
    content: "\ed79";
  }
  .bxs-dice-1:before {
    content: "\ed7a";
  }
  .bxs-dice-2:before {
    content: "\ed7b";
  }
  .bxs-dice-3:before {
    content: "\ed7c";
  }
  .bxs-dice-4:before {
    content: "\ed7d";
  }
  .bxs-dice-5:before {
    content: "\ed7e";
  }
  .bxs-dice-6:before {
    content: "\ed7f";
  }
  .bxs-direction-left:before {
    content: "\ed80";
  }
  .bxs-direction-right:before {
    content: "\ed81";
  }
  .bxs-directions:before {
    content: "\ed82";
  }
  .bxs-disc:before {
    content: "\ed83";
  }
  .bxs-discount:before {
    content: "\ed84";
  }
  .bxs-dish:before {
    content: "\ed85";
  }
  .bxs-dislike:before {
    content: "\ed86";
  }
  .bxs-dizzy:before {
    content: "\ed87";
  }
  .bxs-dock-bottom:before {
    content: "\ed88";
  }
  .bxs-dock-left:before {
    content: "\ed89";
  }
  .bxs-dock-right:before {
    content: "\ed8a";
  }
  .bxs-dock-top:before {
    content: "\ed8b";
  }
  .bxs-dollar-circle:before {
    content: "\ed8c";
  }
  .bxs-donate-blood:before {
    content: "\ed8d";
  }
  .bxs-donate-heart:before {
    content: "\ed8e";
  }
  .bxs-door-open:before {
    content: "\ed8f";
  }
  .bxs-doughnut-chart:before {
    content: "\ed90";
  }
  .bxs-down-arrow:before {
    content: "\ed91";
  }
  .bxs-down-arrow-alt:before {
    content: "\ed92";
  }
  .bxs-down-arrow-circle:before {
    content: "\ed93";
  }
  .bxs-down-arrow-square:before {
    content: "\ed94";
  }
  .bxs-download:before {
    content: "\ed95";
  }
  .bxs-downvote:before {
    content: "\ed96";
  }
  .bxs-drink:before {
    content: "\ed97";
  }
  .bxs-droplet-half:before {
    content: "\ed98";
  }
  .bxs-dryer:before {
    content: "\ed99";
  }
  .bxs-duplicate:before {
    content: "\ed9a";
  }
  .bxs-edit:before {
    content: "\ed9b";
  }
  .bxs-edit-alt:before {
    content: "\ed9c";
  }
  .bxs-edit-location:before {
    content: "\ed9d";
  }
  .bxs-eject:before {
    content: "\ed9e";
  }
  .bxs-envelope:before {
    content: "\ed9f";
  }
  .bxs-envelope-open:before {
    content: "\eda0";
  }
  .bxs-eraser:before {
    content: "\eda1";
  }
  .bxs-error:before {
    content: "\eda2";
  }
  .bxs-error-alt:before {
    content: "\eda3";
  }
  .bxs-error-circle:before {
    content: "\eda4";
  }
  .bxs-ev-station:before {
    content: "\eda5";
  }
  .bxs-exit:before {
    content: "\eda6";
  }
  .bxs-extension:before {
    content: "\eda7";
  }
  .bxs-eyedropper:before {
    content: "\eda8";
  }
  .bxs-face:before {
    content: "\eda9";
  }
  .bxs-face-mask:before {
    content: "\edaa";
  }
  .bxs-factory:before {
    content: "\edab";
  }
  .bxs-fast-forward-circle:before {
    content: "\edac";
  }
  .bxs-file:before {
    content: "\edad";
  }
  .bxs-file-archive:before {
    content: "\edae";
  }
  .bxs-file-blank:before {
    content: "\edaf";
  }
  .bxs-file-css:before {
    content: "\edb0";
  }
  .bxs-file-doc:before {
    content: "\edb1";
  }
  .bxs-file-export:before {
    content: "\edb2";
  }
  .bxs-file-find:before {
    content: "\edb3";
  }
  .bxs-file-gif:before {
    content: "\edb4";
  }
  .bxs-file-html:before {
    content: "\edb5";
  }
  .bxs-file-image:before {
    content: "\edb6";
  }
  .bxs-file-import:before {
    content: "\edb7";
  }
  .bxs-file-jpg:before {
    content: "\edb8";
  }
  .bxs-file-js:before {
    content: "\edb9";
  }
  .bxs-file-json:before {
    content: "\edba";
  }
  .bxs-file-md:before {
    content: "\edbb";
  }
  .bxs-file-pdf:before {
    content: "\edbc";
  }
  .bxs-file-plus:before {
    content: "\edbd";
  }
  .bxs-file-png:before {
    content: "\edbe";
  }
  .bxs-file-txt:before {
    content: "\edbf";
  }
  .bxs-film:before {
    content: "\edc0";
  }
  .bxs-filter-alt:before {
    content: "\edc1";
  }
  .bxs-first-aid:before {
    content: "\edc2";
  }
  .bxs-flag:before {
    content: "\edc3";
  }
  .bxs-flag-alt:before {
    content: "\edc4";
  }
  .bxs-flag-checkered:before {
    content: "\edc5";
  }
  .bxs-flame:before {
    content: "\edc6";
  }
  .bxs-flask:before {
    content: "\edc7";
  }
  .bxs-florist:before {
    content: "\edc8";
  }
  .bxs-folder:before {
    content: "\edc9";
  }
  .bxs-folder-minus:before {
    content: "\edca";
  }
  .bxs-folder-open:before {
    content: "\edcb";
  }
  .bxs-folder-plus:before {
    content: "\edcc";
  }
  .bxs-food-menu:before {
    content: "\edcd";
  }
  .bxs-fridge:before {
    content: "\edce";
  }
  .bxs-game:before {
    content: "\edcf";
  }
  .bxs-gas-pump:before {
    content: "\edd0";
  }
  .bxs-ghost:before {
    content: "\edd1";
  }
  .bxs-gift:before {
    content: "\edd2";
  }
  .bxs-graduation:before {
    content: "\edd3";
  }
  .bxs-grid:before {
    content: "\edd4";
  }
  .bxs-grid-alt:before {
    content: "\edd5";
  }
  .bxs-group:before {
    content: "\edd6";
  }
  .bxs-guitar-amp:before {
    content: "\edd7";
  }
  .bxs-hand:before {
    content: "\edd8";
  }
  .bxs-hand-down:before {
    content: "\edd9";
  }
  .bxs-hand-left:before {
    content: "\edda";
  }
  .bxs-hand-right:before {
    content: "\eddb";
  }
  .bxs-hand-up:before {
    content: "\eddc";
  }
  .bxs-happy:before {
    content: "\eddd";
  }
  .bxs-happy-alt:before {
    content: "\edde";
  }
  .bxs-happy-beaming:before {
    content: "\eddf";
  }
  .bxs-happy-heart-eyes:before {
    content: "\ede0";
  }
  .bxs-hdd:before {
    content: "\ede1";
  }
  .bxs-heart:before {
    content: "\ede2";
  }
  .bxs-heart-circle:before {
    content: "\ede3";
  }
  .bxs-heart-square:before {
    content: "\ede4";
  }
  .bxs-help-circle:before {
    content: "\ede5";
  }
  .bxs-hide:before {
    content: "\ede6";
  }
  .bxs-home:before {
    content: "\ede7";
  }
  .bxs-home-circle:before {
    content: "\ede8";
  }
  .bxs-home-heart:before {
    content: "\ede9";
  }
  .bxs-home-smile:before {
    content: "\edea";
  }
  .bxs-hotel:before {
    content: "\edeb";
  }
  .bxs-hourglass:before {
    content: "\edec";
  }
  .bxs-hourglass-bottom:before {
    content: "\eded";
  }
  .bxs-hourglass-top:before {
    content: "\edee";
  }
  .bxs-id-card:before {
    content: "\edef";
  }
  .bxs-image:before {
    content: "\edf0";
  }
  .bxs-image-add:before {
    content: "\edf1";
  }
  .bxs-image-alt:before {
    content: "\edf2";
  }
  .bxs-inbox:before {
    content: "\edf3";
  }
  .bxs-info-circle:before {
    content: "\edf4";
  }
  .bxs-info-square:before {
    content: "\edf5";
  }
  .bxs-institution:before {
    content: "\edf6";
  }
  .bxs-joystick:before {
    content: "\edf7";
  }
  .bxs-joystick-alt:before {
    content: "\edf8";
  }
  .bxs-joystick-button:before {
    content: "\edf9";
  }
  .bxs-key:before {
    content: "\edfa";
  }
  .bxs-keyboard:before {
    content: "\edfb";
  }
  .bxs-label:before {
    content: "\edfc";
  }
  .bxs-landmark:before {
    content: "\edfd";
  }
  .bxs-landscape:before {
    content: "\edfe";
  }
  .bxs-laugh:before {
    content: "\edff";
  }
  .bxs-layer:before {
    content: "\ee00";
  }
  .bxs-layer-minus:before {
    content: "\ee01";
  }
  .bxs-layer-plus:before {
    content: "\ee02";
  }
  .bxs-layout:before {
    content: "\ee03";
  }
  .bxs-left-arrow:before {
    content: "\ee04";
  }
  .bxs-left-arrow-alt:before {
    content: "\ee05";
  }
  .bxs-left-arrow-circle:before {
    content: "\ee06";
  }
  .bxs-left-arrow-square:before {
    content: "\ee07";
  }
  .bxs-left-down-arrow-circle:before {
    content: "\ee08";
  }
  .bxs-left-top-arrow-circle:before {
    content: "\ee09";
  }
  .bxs-like:before {
    content: "\ee0a";
  }
  .bxs-location-plus:before {
    content: "\ee0b";
  }
  .bxs-lock:before {
    content: "\ee0c";
  }
  .bxs-lock-alt:before {
    content: "\ee0d";
  }
  .bxs-lock-open:before {
    content: "\ee0e";
  }
  .bxs-lock-open-alt:before {
    content: "\ee0f";
  }
  .bxs-log-in:before {
    content: "\ee10";
  }
  .bxs-log-in-circle:before {
    content: "\ee11";
  }
  .bxs-log-out:before {
    content: "\ee12";
  }
  .bxs-log-out-circle:before {
    content: "\ee13";
  }
  .bxs-low-vision:before {
    content: "\ee14";
  }
  .bxs-magic-wand:before {
    content: "\ee15";
  }
  .bxs-magnet:before {
    content: "\ee16";
  }
  .bxs-map:before {
    content: "\ee17";
  }
  .bxs-map-alt:before {
    content: "\ee18";
  }
  .bxs-map-pin:before {
    content: "\ee19";
  }
  .bxs-mask:before {
    content: "\ee1a";
  }
  .bxs-medal:before {
    content: "\ee1b";
  }
  .bxs-megaphone:before {
    content: "\ee1c";
  }
  .bxs-meh:before {
    content: "\ee1d";
  }
  .bxs-meh-alt:before {
    content: "\ee1e";
  }
  .bxs-meh-blank:before {
    content: "\ee1f";
  }
  .bxs-memory-card:before {
    content: "\ee20";
  }
  .bxs-message:before {
    content: "\ee21";
  }
  .bxs-message-add:before {
    content: "\ee22";
  }
  .bxs-message-alt:before {
    content: "\ee23";
  }
  .bxs-message-alt-add:before {
    content: "\ee24";
  }
  .bxs-message-alt-check:before {
    content: "\ee25";
  }
  .bxs-message-alt-detail:before {
    content: "\ee26";
  }
  .bxs-message-alt-dots:before {
    content: "\ee27";
  }
  .bxs-message-alt-edit:before {
    content: "\ee28";
  }
  .bxs-message-alt-error:before {
    content: "\ee29";
  }
  .bxs-message-alt-minus:before {
    content: "\ee2a";
  }
  .bxs-message-alt-x:before {
    content: "\ee2b";
  }
  .bxs-message-check:before {
    content: "\ee2c";
  }
  .bxs-message-detail:before {
    content: "\ee2d";
  }
  .bxs-message-dots:before {
    content: "\ee2e";
  }
  .bxs-message-edit:before {
    content: "\ee2f";
  }
  .bxs-message-error:before {
    content: "\ee30";
  }
  .bxs-message-minus:before {
    content: "\ee31";
  }
  .bxs-message-rounded:before {
    content: "\ee32";
  }
  .bxs-message-rounded-add:before {
    content: "\ee33";
  }
  .bxs-message-rounded-check:before {
    content: "\ee34";
  }
  .bxs-message-rounded-detail:before {
    content: "\ee35";
  }
  .bxs-message-rounded-dots:before {
    content: "\ee36";
  }
  .bxs-message-rounded-edit:before {
    content: "\ee37";
  }
  .bxs-message-rounded-error:before {
    content: "\ee38";
  }
  .bxs-message-rounded-minus:before {
    content: "\ee39";
  }
  .bxs-message-rounded-x:before {
    content: "\ee3a";
  }
  .bxs-message-square:before {
    content: "\ee3b";
  }
  .bxs-message-square-add:before {
    content: "\ee3c";
  }
  .bxs-message-square-check:before {
    content: "\ee3d";
  }
  .bxs-message-square-detail:before {
    content: "\ee3e";
  }
  .bxs-message-square-dots:before {
    content: "\ee3f";
  }
  .bxs-message-square-edit:before {
    content: "\ee40";
  }
  .bxs-message-square-error:before {
    content: "\ee41";
  }
  .bxs-message-square-minus:before {
    content: "\ee42";
  }
  .bxs-message-square-x:before {
    content: "\ee43";
  }
  .bxs-message-x:before {
    content: "\ee44";
  }
  .bxs-meteor:before {
    content: "\ee45";
  }
  .bxs-microchip:before {
    content: "\ee46";
  }
  .bxs-microphone:before {
    content: "\ee47";
  }
  .bxs-microphone-alt:before {
    content: "\ee48";
  }
  .bxs-microphone-off:before {
    content: "\ee49";
  }
  .bxs-minus-circle:before {
    content: "\ee4a";
  }
  .bxs-minus-square:before {
    content: "\ee4b";
  }
  .bxs-mobile:before {
    content: "\ee4c";
  }
  .bxs-mobile-vibration:before {
    content: "\ee4d";
  }
  .bxs-moon:before {
    content: "\ee4e";
  }
  .bxs-mouse:before {
    content: "\ee4f";
  }
  .bxs-mouse-alt:before {
    content: "\ee50";
  }
  .bxs-movie:before {
    content: "\ee51";
  }
  .bxs-movie-play:before {
    content: "\ee52";
  }
  .bxs-music:before {
    content: "\ee53";
  }
  .bxs-navigation:before {
    content: "\ee54";
  }
  .bxs-network-chart:before {
    content: "\ee55";
  }
  .bxs-news:before {
    content: "\ee56";
  }
  .bxs-no-entry:before {
    content: "\ee57";
  }
  .bxs-note:before {
    content: "\ee58";
  }
  .bxs-notepad:before {
    content: "\ee59";
  }
  .bxs-notification:before {
    content: "\ee5a";
  }
  .bxs-notification-off:before {
    content: "\ee5b";
  }
  .bxs-offer:before {
    content: "\ee5c";
  }
  .bxs-package:before {
    content: "\ee5d";
  }
  .bxs-paint:before {
    content: "\ee5e";
  }
  .bxs-paint-roll:before {
    content: "\ee5f";
  }
  .bxs-palette:before {
    content: "\ee60";
  }
  .bxs-paper-plane:before {
    content: "\ee61";
  }
  .bxs-parking:before {
    content: "\ee62";
  }
  .bxs-paste:before {
    content: "\ee63";
  }
  .bxs-pen:before {
    content: "\ee64";
  }
  .bxs-pencil:before {
    content: "\ee65";
  }
  .bxs-phone:before {
    content: "\ee66";
  }
  .bxs-phone-call:before {
    content: "\ee67";
  }
  .bxs-phone-incoming:before {
    content: "\ee68";
  }
  .bxs-phone-off:before {
    content: "\ee69";
  }
  .bxs-phone-outgoing:before {
    content: "\ee6a";
  }
  .bxs-photo-album:before {
    content: "\ee6b";
  }
  .bxs-piano:before {
    content: "\ee6c";
  }
  .bxs-pie-chart:before {
    content: "\ee6d";
  }
  .bxs-pie-chart-alt:before {
    content: "\ee6e";
  }
  .bxs-pie-chart-alt-2:before {
    content: "\ee6f";
  }
  .bxs-pin:before {
    content: "\ee70";
  }
  .bxs-pizza:before {
    content: "\ee71";
  }
  .bxs-plane:before {
    content: "\ee72";
  }
  .bxs-plane-alt:before {
    content: "\ee73";
  }
  .bxs-plane-land:before {
    content: "\ee74";
  }
  .bxs-planet:before {
    content: "\ee75";
  }
  .bxs-plane-take-off:before {
    content: "\ee76";
  }
  .bxs-playlist:before {
    content: "\ee77";
  }
  .bxs-plug:before {
    content: "\ee78";
  }
  .bxs-plus-circle:before {
    content: "\ee79";
  }
  .bxs-plus-square:before {
    content: "\ee7a";
  }
  .bxs-pointer:before {
    content: "\ee7b";
  }
  .bxs-polygon:before {
    content: "\ee7c";
  }
  .bxs-printer:before {
    content: "\ee7d";
  }
  .bxs-purchase-tag:before {
    content: "\ee7e";
  }
  .bxs-purchase-tag-alt:before {
    content: "\ee7f";
  }
  .bxs-pyramid:before {
    content: "\ee80";
  }
  .bxs-quote-alt-left:before {
    content: "\ee81";
  }
  .bxs-quote-alt-right:before {
    content: "\ee82";
  }
  .bxs-quote-left:before {
    content: "\ee83";
  }
  .bxs-quote-right:before {
    content: "\ee84";
  }
  .bxs-quote-single-left:before {
    content: "\ee85";
  }
  .bxs-quote-single-right:before {
    content: "\ee86";
  }
  .bxs-radiation:before {
    content: "\ee87";
  }
  .bxs-radio:before {
    content: "\ee88";
  }
  .bxs-receipt:before {
    content: "\ee89";
  }
  .bxs-rectangle:before {
    content: "\ee8a";
  }
  .bxs-registered:before {
    content: "\ee8b";
  }
  .bxs-rename:before {
    content: "\ee8c";
  }
  .bxs-report:before {
    content: "\ee8d";
  }
  .bxs-rewind-circle:before {
    content: "\ee8e";
  }
  .bxs-right-arrow:before {
    content: "\ee8f";
  }
  .bxs-right-arrow-alt:before {
    content: "\ee90";
  }
  .bxs-right-arrow-circle:before {
    content: "\ee91";
  }
  .bxs-right-arrow-square:before {
    content: "\ee92";
  }
  .bxs-right-down-arrow-circle:before {
    content: "\ee93";
  }
  .bxs-right-top-arrow-circle:before {
    content: "\ee94";
  }
  .bxs-rocket:before {
    content: "\ee95";
  }
  .bxs-ruler:before {
    content: "\ee96";
  }
  .bxs-sad:before {
    content: "\ee97";
  }
  .bxs-save:before {
    content: "\ee98";
  }
  .bxs-school:before {
    content: "\ee99";
  }
  .bxs-search:before {
    content: "\ee9a";
  }
  .bxs-search-alt-2:before {
    content: "\ee9b";
  }
  .bxs-select-multiple:before {
    content: "\ee9c";
  }
  .bxs-send:before {
    content: "\ee9d";
  }
  .bxs-server:before {
    content: "\ee9e";
  }
  .bxs-shapes:before {
    content: "\ee9f";
  }
  .bxs-share:before {
    content: "\eea0";
  }
  .bxs-share-alt:before {
    content: "\eea1";
  }
  .bxs-shield:before {
    content: "\eea2";
  }
  .bxs-shield-alt-2:before {
    content: "\eea3";
  }
  .bxs-shield-x:before {
    content: "\eea4";
  }
  .bxs-ship:before {
    content: "\eea5";
  }
  .bxs-shocked:before {
    content: "\eea6";
  }
  .bxs-shopping-bag:before {
    content: "\eea7";
  }
  .bxs-shopping-bag-alt:before {
    content: "\eea8";
  }
  .bxs-shopping-bags:before {
    content: "\eea9";
  }
  .bxs-show:before {
    content: "\eeaa";
  }
  .bxs-skip-next-circle:before {
    content: "\eeab";
  }
  .bxs-skip-previous-circle:before {
    content: "\eeac";
  }
  .bxs-skull:before {
    content: "\eead";
  }
  .bxs-sleepy:before {
    content: "\eeae";
  }
  .bxs-slideshow:before {
    content: "\eeaf";
  }
  .bxs-smile:before {
    content: "\eeb0";
  }
  .bxs-sort-alt:before {
    content: "\eeb1";
  }
  .bxs-spa:before {
    content: "\eeb2";
  }
  .bxs-speaker:before {
    content: "\eeb3";
  }
  .bxs-spray-can:before {
    content: "\eeb4";
  }
  .bxs-spreadsheet:before {
    content: "\eeb5";
  }
  .bxs-square:before {
    content: "\eeb6";
  }
  .bxs-square-rounded:before {
    content: "\eeb7";
  }
  .bxs-star:before {
    content: "\eeb8";
  }
  .bxs-star-half:before {
    content: "\eeb9";
  }
  .bxs-sticker:before {
    content: "\eeba";
  }
  .bxs-stopwatch:before {
    content: "\eebb";
  }
  .bxs-store:before {
    content: "\eebc";
  }
  .bxs-store-alt:before {
    content: "\eebd";
  }
  .bxs-sun:before {
    content: "\eebe";
  }
  .bxs-tachometer:before {
    content: "\eebf";
  }
  .bxs-tag:before {
    content: "\eec0";
  }
  .bxs-tag-alt:before {
    content: "\eec1";
  }
  .bxs-tag-x:before {
    content: "\eec2";
  }
  .bxs-taxi:before {
    content: "\eec3";
  }
  .bxs-tennis-ball:before {
    content: "\eec4";
  }
  .bxs-terminal:before {
    content: "\eec5";
  }
  .bxs-thermometer:before {
    content: "\eec6";
  }
  .bxs-time:before {
    content: "\eec7";
  }
  .bxs-time-five:before {
    content: "\eec8";
  }
  .bxs-timer:before {
    content: "\eec9";
  }
  .bxs-tired:before {
    content: "\eeca";
  }
  .bxs-toggle-left:before {
    content: "\eecb";
  }
  .bxs-toggle-right:before {
    content: "\eecc";
  }
  .bxs-tone:before {
    content: "\eecd";
  }
  .bxs-torch:before {
    content: "\eece";
  }
  .bxs-to-top:before {
    content: "\eecf";
  }
  .bxs-traffic:before {
    content: "\eed0";
  }
  .bxs-traffic-barrier:before {
    content: "\eed1";
  }
  .bxs-traffic-cone:before {
    content: "\eed2";
  }
  .bxs-train:before {
    content: "\eed3";
  }
  .bxs-trash:before {
    content: "\eed4";
  }
  .bxs-trash-alt:before {
    content: "\eed5";
  }
  .bxs-tree:before {
    content: "\eed6";
  }
  .bxs-trophy:before {
    content: "\eed7";
  }
  .bxs-truck:before {
    content: "\eed8";
  }
  .bxs-t-shirt:before {
    content: "\eed9";
  }
  .bxs-tv:before {
    content: "\eeda";
  }
  .bxs-up-arrow:before {
    content: "\eedb";
  }
  .bxs-up-arrow-alt:before {
    content: "\eedc";
  }
  .bxs-up-arrow-circle:before {
    content: "\eedd";
  }
  .bxs-up-arrow-square:before {
    content: "\eede";
  }
  .bxs-upside-down:before {
    content: "\eedf";
  }
  .bxs-upvote:before {
    content: "\eee0";
  }
  .bxs-user:before {
    content: "\eee1";
  }
  .bxs-user-account:before {
    content: "\eee2";
  }
  .bxs-user-badge:before {
    content: "\eee3";
  }
  .bxs-user-check:before {
    content: "\eee4";
  }
  .bxs-user-circle:before {
    content: "\eee5";
  }
  .bxs-user-detail:before {
    content: "\eee6";
  }
  .bxs-user-minus:before {
    content: "\eee7";
  }
  .bxs-user-pin:before {
    content: "\eee8";
  }
  .bxs-user-plus:before {
    content: "\eee9";
  }
  .bxs-user-rectangle:before {
    content: "\eeea";
  }
  .bxs-user-voice:before {
    content: "\eeeb";
  }
  .bxs-user-x:before {
    content: "\eeec";
  }
  .bxs-vector:before {
    content: "\eeed";
  }
  .bxs-vial:before {
    content: "\eeee";
  }
  .bxs-video:before {
    content: "\eeef";
  }
  .bxs-video-off:before {
    content: "\eef0";
  }
  .bxs-video-plus:before {
    content: "\eef1";
  }
  .bxs-video-recording:before {
    content: "\eef2";
  }
  .bxs-videos:before {
    content: "\eef3";
  }
  .bxs-virus:before {
    content: "\eef4";
  }
  .bxs-virus-block:before {
    content: "\eef5";
  }
  .bxs-volume:before {
    content: "\eef6";
  }
  .bxs-volume-full:before {
    content: "\eef7";
  }
  .bxs-volume-low:before {
    content: "\eef8";
  }
  .bxs-volume-mute:before {
    content: "\eef9";
  }
  .bxs-wallet:before {
    content: "\eefa";
  }
  .bxs-wallet-alt:before {
    content: "\eefb";
  }
  .bxs-washer:before {
    content: "\eefc";
  }
  .bxs-watch:before {
    content: "\eefd";
  }
  .bxs-watch-alt:before {
    content: "\eefe";
  }
  .bxs-webcam:before {
    content: "\eeff";
  }
  .bxs-widget:before {
    content: "\ef00";
  }
  .bxs-window-alt:before {
    content: "\ef01";
  }
  .bxs-wine:before {
    content: "\ef02";
  }
  .bxs-wink-smile:before {
    content: "\ef03";
  }
  .bxs-wink-tongue:before {
    content: "\ef04";
  }
  .bxs-wrench:before {
    content: "\ef05";
  }
  .bxs-x-circle:before {
    content: "\ef06";
  }
  .bxs-x-square:before {
    content: "\ef07";
  }
  .bxs-yin-yang:before {
    content: "\ef08";
  }
  .bxs-zap:before {
    content: "\ef09";
  }
  .bxs-zoom-in:before {
    content: "\ef0a";
  }
  .bxs-zoom-out:before {
    content: "\ef0b";
  }
  