import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['left-menu'],
    tagName: 'nav',

    didInsertElement: function () {
        Ember.run.scheduleOnce('afterRender', this, this.initializeScroll);
        Ember.run.scheduleOnce('afterRender', this, this.bindGroupClick);
        Ember.run.scheduleOnce('afterRender', this, this.bindMenuEffects);
    },

    initializeScroll: function() {
        this.$('.scroll-pane').each(function () {
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
        this.$('.left-menu-list-submenu > a').on('click', function () {
            var accessDenied = $('body').hasClass('menu-top') && $(window).width() > 768;

            if (!accessDenied) {
                var that = $(this).parent(), opened = $('.left-menu .left-menu-list-opened');

                if (!that.hasClass('left-menu-list-opened') && !that.parent().closest('.left-menu-list-submenu').length) {
                    opened.removeClass('left-menu-list-opened').find('> ul').slideUp(200);
                }

                that.toggleClass('left-menu-list-opened').find('> ul').slideToggle(200);
            }
        });
    },

    bindMenuEffects: function() {
      var translateSelector = this.$('.left-menu-inner'), startTranslateX = 0;
      translateSelector.addClass('scrolled-to-left');

      this.$(window).on('resize', function () {
          startTranslateX = 0;
          translateSelector.css('transform', 'translate3d(' + 0 + 'px, 0px, 0px)');
      });

      this.$('nav.left-menu').on('mousemove', function (e) {
          if (this.$(window).width() > 751) {
              var menuWidth = this.$('nav.left-menu').width(),
                  windowWidth = this.$(window).width(),
                  boxedOffset = (windowWidth - menuWidth) / 2,
                  innerWidth = (function () {
                      var width = 0;

                      this.$('.left-menu-list-root > *').each(function () {
                          width += $(this).width();
                      });

                      return width;
                  })(),

                  logoWidth = this.$('.logo-container').outerWidth(),
                  deltaWidth = menuWidth - logoWidth - innerWidth,
                  hoverOffset = 100;

              if (deltaWidth < 0) {
                  if (e.clientX < windowWidth - menuWidth - boxedOffset + logoWidth + hoverOffset) {
                      if (startTranslateX < 0 || startTranslateX < deltaWidth) {
                          startTranslateX = startTranslateX - deltaWidth;
                          translateSelector
                              .removeClass('scrolled-to-right')
                              .addClass('scrolled-to-left')
                              .css('transform', 'translate3d(' + startTranslateX + 'px, 0px, 0px)');
                      }
                  }

                  if (e.clientX > menuWidth + boxedOffset - hoverOffset) {
                      if (startTranslateX >= 0 || startTranslateX > deltaWidth) {
                          startTranslateX = deltaWidth;
                          translateSelector
                              .removeClass('scrolled-to-left')
                              .addClass('scrolled-to-right')
                              .css('transform', 'translate3d(' + startTranslateX + 'px, 0px, 0px)');
                      }
                  }
              }
          }
      });
    }
});
