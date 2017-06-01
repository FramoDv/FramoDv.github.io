$(document).ready(function () {
    $('.scrollspy').scrollSpy();
    // int textarea form
    $('#textarea1').val('New Text');
    $('#textarea1').trigger('autoresize');
    //hamburger menu
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#over').toggleClass('open');
    });
    //to close munù when a nav's item was clicked
    $('.item').click(function () {
        $('#over').removeClass('open');
    });

    //to closemenù when close icon was clicked
    $('#close').click(function () {
        $('#over').removeClass('open');
    });
    /*
    to calculate color of hamburger span items
    var scroll_pos = 0;
    var me_h = $("#me").height();
    var about_h = $("#about").height();
    var skill_h = $("#skills").height();
    var tot_h = me_h + about_h + skill_h;
    var menu = $('.icon-menu');
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop(); // prende il numero di pixel scrollati live
        if ( (scroll_pos <= (tot_h - (tot_h - me_h)) ) || scroll_pos <= 200) {
            menu.css('color', '#fafbfb');
            spanbg.css('background-color', '#transparent');
        } else if (scroll_pos <= (tot_h - (tot_h - (me_h + about_h)))) {
            spanbg.css('background-color', '#043b34');
            menu.css('color', '#fafbfb');
        } else if (scroll_pos <= (tot_h - (tot_h - (me_h + about_h + skill_h)))) {
            spanbg.css('background-color', '#fafbfb');
            menu.css('color', '#043b34');
        } else {
            spanbg.css('background-color', '#043b34');
            menu.css('color', '#fafbfb');
        }
    });
    */
    //to delete cards animation on mobile
    var limit = 768;
    var targetclass = $('.not-animated-medium');
    if (window.innerWidth <= limit) {
        targetclass.removeClass('animated');
        targetclass.removeClass('fadeInRight');
        targetclass.removeClass('fadeInLeft');
    }
});
