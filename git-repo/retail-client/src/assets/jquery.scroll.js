(function ($) {
    $.fn.scroll = function (options) {
        var position = 0;
        var gridWidth = 425;
        var displayItems = 2;
        var defaults = {};
        var options = $.extend(defaults, options);
        var obj = $(this);
        // obj.html('<div class="left lEnable"></div><div class="right"></div>');
        var $left = $('.left');
        var $right = $('.right');
        var $scroll = $('#' + options.id);

        $right.unbind("click").click(function () {
            if (!$(this).hasClass('rDisable')) {
                position -= gridWidth;
                $scroll.animate({
                    'margin-left': position + 'px',
                    'transition': 'left 0.3s ease-out'
                });
                toggleScroll();
            }
        });
        $left.unbind("click").click(function () {
            if (position < 0) {
                position += gridWidth;
                $scroll.animate({
                    'margin-left': position + 'px',
                    'transition': 'left 0.3s ease-out'
                });
                toggleScroll();
            }
        });
        toggleScroll();
        function toggleScroll() {
            try {
                ((parseInt($scroll.width()) + parseInt(position)) > displayItems * gridWidth) ? $right.removeClass('rDisable').addClass('rEnable') : ($right.addClass('rDisable'),$right.removeClass('rEnable'));
                if (position == 0) $left.removeClass('lEnable').addClass('lDisable'); else $left.removeClass('lDisable').addClass('lEnable');
            } catch (e) {
                objUtilityDoc.parentWindow.LogToFile("jquery.scroll.js", 'toggleScroll() Error :'+e.description);
            }
        }
    };
})(jQuery);

function scrollmenus(size){
    // if (this.options.view == 'list' || _thi  s.length < 3) {
    //     $(_this.selector).css("width", Object.keys(_this.list).length * 425 + 'px');
    // } else
        // $(_this.selector).css("width", Math.round(Object.keys(_this.list).length / 2) * 425 + 'px');
        console.log("size :"+size);
    $('.submenus-div').css("width", size * 425 + 'px');

    $('.navigation').scroll({ 'id': 'submenus-div' });
}
