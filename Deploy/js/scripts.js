var $grapeForm = $(".grape-fruit-form");
var $grapeTrigger1 = $("#grapefruit-order-button-1");
var $grapeTrigger3 = $("#grapefruit-order-button-3");
var $grapeCloser = $(".grape-fruit-form .form-close-button");
var $grapeFormVisible = false;


var $limeForm = $(".lime-fruit-form");
var $limeTrigger1 = $("#lime-order-button-1");
var $limeTrigger3 = $("#lime-order-button-3");

var $limeCloser = $(".lime-fruit-form .form-close-button");
var $limeFormVisible = false;

var $cucumberForm = $(".cucumber-fruit-form");
var $cucumberTrigger1 = $("#cucumber-order-button-1");
var $cucumberTrigger3 = $("#cucumber-order-button-3");

var $cucumberCloser = $(".cucumber-fruit-form .form-close-button");
var $cucumberFormVisible = false;

var $varietyForm = $(".variety-fruit-form");
var $varietyTrigger1 = $("#variety-order-button-1");
var $varietyCloser = $(".variety-fruit-form .form-close-button");
var $varietyFormVisible = false;




function grapefruitReveal() {
    if ($grapeFormVisible === false) {
        $grapeForm.toggleClass("form-reveal");
        $grapeFormVisible = true;

    } else {
        $grapeForm.toggleClass("form-reveal");
        $grapeFormVisible = false;
    }
}

function limeReveal() {
    if ($limeFormVisible === false) {
        $limeForm.toggleClass("form-reveal");
        $limeFormVisible = true;

    } else {
        $limeForm.toggleClass("form-reveal");
        $limeFormVisible = false;
    }
}

function cucumberReveal() {
    if ($cucumberFormVisible === false) {
        $cucumberForm.toggleClass("form-reveal");
        $cucumberFormVisible = true;

    } else {
        $cucumberForm.toggleClass("form-reveal");
        $cucumberFormVisible = false;
    }
}

function varietyReveal() {
    if ($varietyFormVisible === false) {
        $varietyForm.toggleClass("form-reveal");

        $varietyFormVisible = true;
    } else {
        $varietyForm.toggleClass("form-reveal");
        $varietyFormVisible = false;
    }
}


$grapeTrigger1.on('click', grapefruitReveal);
$grapeTrigger3.on('click', grapefruitReveal);
$grapeCloser.on('click', grapefruitReveal);

$limeTrigger1.on('click', limeReveal);
$limeTrigger3.on('click', limeReveal);
$limeCloser.on('click', limeReveal);

$cucumberTrigger1.on('click', cucumberReveal);
$cucumberTrigger3.on('click', cucumberReveal);
$cucumberCloser.on('click', cucumberReveal);

$varietyTrigger1.on('click', varietyReveal);
$varietyCloser.on('click', varietyReveal);



$(document).ready(function() {
    $('#fruit-button').slick({
        accessibility: false,
        fade: true,
        arrows: false,
        dot: false,
        draggable: false
    });
    //
    $('.intro-text').slick({
        accessibility: false,
        fade: true,
        arrows: false,
        dot: false,
        draggable: false,
        asNavFor: $('.soda-mobile, #fruit-button'),
        prevArrow: $('.navigation-arrow-left'),
        nextArrow: $('.navigation-arrow-right')
    });

    $('.soda-mobile').slick({
        prevArrow: $('.navigation-arrow-left'),
        nextArrow: $('.navigation-arrow-right'),
        fade: true,
        asNavFor: $('#fruit-button, .intro-text'),
        dots: true,
        appendDots: $('.intro-dot')
    });
});
