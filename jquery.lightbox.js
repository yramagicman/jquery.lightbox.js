(function ($) {
    'use strict';
    $.fn.lightbox = function (options) {

        var settings = $.extend({
            'height': '95%',
            'width': '95%',
            'topMargin': '1.5%',
            'wrapperBG': 'rgba(0,0,0,0.8)'
        }, options),
            wrapperBG = settings.wrapperBG,
            topMargin = settings.topMargin,
            wrapperStyles = {
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'bottom': '0',
                'right': '0',
                'z-index': 99999999,
                'background': wrapperBG
            },

            iframeStyles = {
                'margin': 'auto',
                'margin-top': topMargin,
                'margin-bottom': topMargin,
                'display': 'block',
                'background': '#fff'
            },

            width = settings.width,
            height = settings.height,
            iframe = document.createElement('iframe'),
            wrapper = document.createElement('div'),
            isOpen = $('#lightbox').length,
            $this = $(this);

        wrapper.id = 'lightbox';
        return this.each(function () {
            $this.click(function (e) {
                e.preventDefault();

                if (!isOpen) {
                    $('body').append(wrapper);
                    $('#lightbox').append(iframe);
                    isOpen = $('#lightbox').length;
                    iframe.src = this.href;
                    $('#lightbox').css(wrapperStyles);
                    $(iframe).css(iframeStyles);
                    $(iframe).width(width);
                    $(iframe).height(height);
                }

                if (isOpen) {
                    $('#lightbox').click(function () {
                        $('#lightbox').remove();
                        isOpen = $('#lightbox').length;
                    });
                    $(document).keyup(function (e) {
                        if (e.keyCode === 27) {
                            $('#lightbox').click();
                            isOpen = $('#lightbox').length;
                        }
                    });
                }
            });
        });

    };
}(jQuery));
