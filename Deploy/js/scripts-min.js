var $grapeForm=$(".grape-fruit-form"),$grapeTrigger1=$("#grapefruit-order-button-1"),$grapeTrigger3=$("#grapefruit-order-button-3"),$grapeCloser=$(".grape-fruit-form .form-close-button"),$grapeFormVisible=!1,$limeForm=$(".lime-fruit-form"),$limeTrigger1=$("#lime-order-button-1"),$limeTrigger3=$("#lime-order-button-3"),$limeCloser=$(".lime-fruit-form .form-close-button"),$limeFormVisible=!1,$cucumberForm=$(".cucumber-fruit-form"),$cucumberTrigger1=$("#cucumber-order-button-1"),$cucumberTrigger3=$("#cucumber-order-button-3"),$cucumberCloser=$(".cucumber-fruit-form .form-close-button"),$cucumberFormVisible=!1,$varietyForm=$(".variety-fruit-form"),$varietyTrigger1=$("#variety-order-button-1"),$varietyCloser=$(".variety-fruit-form .form-close-button"),$varietyFormVisible=!1;function grapefruitReveal(){!1===$grapeFormVisible?($grapeForm.toggleClass("form-reveal"),$grapeFormVisible=!0):($grapeForm.toggleClass("form-reveal"),$grapeFormVisible=!1)}function limeReveal(){!1===$limeFormVisible?($limeForm.toggleClass("form-reveal"),$limeFormVisible=!0):($limeForm.toggleClass("form-reveal"),$limeFormVisible=!1)}function cucumberReveal(){!1===$cucumberFormVisible?($cucumberForm.toggleClass("form-reveal"),$cucumberFormVisible=!0):($cucumberForm.toggleClass("form-reveal"),$cucumberFormVisible=!1)}function varietyReveal(){!1===$varietyFormVisible?($varietyForm.toggleClass("form-reveal"),$varietyFormVisible=!0):($varietyForm.toggleClass("form-reveal"),$varietyFormVisible=!1)}$grapeTrigger1.on("click",grapefruitReveal),$grapeTrigger3.on("click",grapefruitReveal),$grapeCloser.on("click",grapefruitReveal),$limeTrigger1.on("click",limeReveal),$limeTrigger3.on("click",limeReveal),$limeCloser.on("click",limeReveal),$cucumberTrigger1.on("click",cucumberReveal),$cucumberTrigger3.on("click",cucumberReveal),$cucumberCloser.on("click",cucumberReveal),$varietyTrigger1.on("click",varietyReveal),$varietyCloser.on("click",varietyReveal),$(document).ready(function(){$("#fruit-button").slick({accessibility:!1,fade:!0,arrows:!1,dot:!1,draggable:!1}),$(".intro-text").slick({accessibility:!1,fade:!0,arrows:!1,dot:!1,draggable:!1,asNavFor:$(".soda-mobile, #fruit-button"),prevArrow:$(".navigation-arrow-left"),nextArrow:$(".navigation-arrow-right")}),$(".soda-mobile").slick({prevArrow:$(".navigation-arrow-left"),nextArrow:$(".navigation-arrow-right"),fade:!0,asNavFor:$("#fruit-button, .intro-text"),dots:!0,appendDots:$(".intro-dot")})});