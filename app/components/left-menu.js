import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['left-menu'],
    tagName: 'nav',

    didInsertElement: function () {
        this.initializeScroll();
        this.bindGroupClick();
    },

    initializeScroll: function() {
        $('.scroll-pane').each(function () {
            $(this).jScrollPane({
                autoReinitialise: true,
                autoReinitialiseDelay: 100
            });

            var api = $(this).data('jsp'), throttleTimeout;

            $(window).bind('resize', function () {
                if (!throttleTimeout) {
                    throttleTimeout = setTimeout(function () {
                        api.reinitialise();
                        throttleTimeout = null;
                    }, 50);
                }
            });
        });
    },

    bindGroupClick: function() {
        $('.left-menu-list-submenu > a').on('click', function () {
            var accessDenied = $('body').hasClass('menu-top') && $(window).width() > 768;

            if (!accessDenied) {
                var that = $(this).parent(), opened = $('.left-menu .left-menu-list-opened');

                if (!that.hasClass('left-menu-list-opened') && !that.parent().closest('.left-menu-list-submenu').length)
                    opened.removeClass('left-menu-list-opened').find('> ul').slideUp(200);

                that.toggleClass('left-menu-list-opened').find('> ul').slideToggle(200);
            }
        });
    }
});
