
$(document).ready(function() {
    $('input[type=checkbox], select').styler();
    //Menu
    $('header .mobile_header .__right .sendwich.o').click(function() {
        $('header .mobile_header .mobile__menu').addClass('active');
        $('body').css('overflow','hidden');
    })
    $('header .mobile_header .__right .sendwich.c').click(function() {
        $('header .mobile_header .mobile__menu').removeClass('active');
        $('body').css('overflow','');
    })
    // tabs on header line
    $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.container').find('div.tabs_item').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.useful_links_block .all__news').click(function() {
        $('.useful_links_block .services__space').toggleClass('active');
    })
    $('.cams_list_block .tabs .tabs_item .all__news').click(function() {
        $('.cams_list_block .tabs .tabs_item .camera__space').toggleClass('active');
    })

    // magnific_popap

    $('.header .logo').magnificPopup({
        type: 'inline',
        modal: true,
        alignTop : true,
    });
    $(document).on('click', '.gov_modal_block .close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.camera_block .__left .camera__space .__item').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // tabs on main
    $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs_item').removeClass('active').eq($(this).index()).addClass('active');
    });

    // INPUT EFFECTS
    $('.form label').on('focusin',function () {
        $(this).addClass("active");

    }).on( "focusout",function(){
        $(this).removeClass("active");
        if($(this).children('input').val()){
            $(this).addClass("active");
        }
    })
    $('.form label').keyup(function () {
        if($(this).children('input').val() == ''){
            $(this).removeClass("active");
        } else{
            $(this).addClass("active");
        }
        if($(this).children('input').val()){
            $(this).addClass("active");
        }
    })
    //upload
    if ($(".js-upload").length) {
        $(".js-upload").dropzone({
            url: "../../assets/php/index.php",
            clickable: ".js-upload-btn",
            previewsContainer: ".download_file",
            previewTemplate: "<div class='__item'><p class='names' data-dz-name></p><p class='cancel' data-dz-remove>Cкасувати</p></div>"
        });
    }

});
