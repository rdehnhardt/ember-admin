/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
    var app = new EmberApp(defaults, {
        sassOptions: {
            extension: 'scss'
        }
    });

    // Use `app.import` to add additional libraries.

    // JS
    app.import('bower_components/jquery/jquery.min.js');
    app.import('bower_components/tether/dist/js/tether.min.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
    app.import('bower_components/jquery-mousewheel/jquery.mousewheel.min.js');
    app.import('bower_components/jscrollpane/script/jquery.jscrollpane.min.js');
    app.import('bower_components/spin.js/spin.js');
    app.import('bower_components/ladda/dist/ladda.min.js');
    app.import('bower_components/select2/dist/js/select2.full.min.js');
    app.import('bower_components/html5-form-validation/dist/jquery.validation.min.js');
    app.import('bower_components/jquery-typeahead/dist/jquery.typeahead.min.js');
    app.import('bower_components/jquery-mask-plugin/dist/jquery.mask.min.js');
    app.import('bower_components/autosize/dist/autosize.min.js');
    app.import('bower_components/bootstrap-show-password/bootstrap-show-password.min.js');
    app.import('bower_components/moment/min/moment.min.js');
    app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js');
    app.import('bower_components/fullcalendar/dist/fullcalendar.min.js');
    app.import('bower_components/bootstrap-sweetalert/dist/sweetalert.min.js');
    app.import('bower_components/remarkable-bootstrap-notify/dist/bootstrap-notify.min.js');
    app.import('bower_components/summernote/dist/summernote.min.js');
    app.import('bower_components/owl.carousel/dist/owl.carousel.min.js');
    app.import('bower_components/ionrangeslider/js/ion.rangeSlider.min.js');
    app.import('bower_components/nestable/jquery.nestable.js');
    app.import('bower_components/datatables/media/js/jquery.dataTables.min.js');
    app.import('bower_components/datatables/media/js/dataTables.bootstrap4.min.js');
    app.import('bower_components/datatables-fixedcolumns/js/dataTables.fixedColumns.js');
    app.import('bower_components/datatables-responsive/js/dataTables.responsive.js');
    app.import('bower_components/d3/d3.min.js');
    app.import('bower_components/c3/c3.min.js');
    app.import('bower_components/chartist/dist/chartist.min.js');
    app.import('bower_components/peity/jquery.peity.min.js');
    app.import('bower_components/chartist-plugin-tooltip/dist/chartist-plugin-tooltip.min.js');
    app.import('bower_components/gsap/src/minified/TweenMax.min.js');
    app.import('bower_components/jquery-countTo/jquery.countTo.js');
    app.import('bower_components/nprogress/nprogress.js');
    app.import('bower_components/jquery-steps/build/jquery.steps.min.js');
    app.import('bower_components/bootstrap-select/dist/js/bootstrap-select.min.js');
    app.import('bower_components/dropify/dist/js/dropify.min.js');

    // CSS
    app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
    app.import('bower_components/jscrollpane/style/jquery.jscrollpane.css');
    app.import('bower_components/ladda/dist/ladda-themeless.min.css');
    app.import('bower_components/select2/dist/css/select2.min.css');
    app.import('bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css');
    app.import('bower_components/fullcalendar/dist/fullcalendar.min.css');
    app.import('bower_components/bootstrap-sweetalert/dist/sweetalert.css');
    app.import('bower_components/summernote/dist/summernote.css');
    app.import('bower_components/owl.carousel/dist/assets/owl.carousel.min.css');
    app.import('bower_components/ionrangeslider/css/ion.rangeSlider.css');
    app.import('bower_components/datatables/media/css/dataTables.bootstrap4.min.css');
    app.import('bower_components/c3/c3.min.css');
    app.import('bower_components/chartist/dist/chartist.min.css');
    app.import('bower_components/nprogress/nprogress.css');
    app.import('bower_components/jquery-steps/demo/css/jquery.steps.css');
    app.import('bower_components/bootstrap-select/dist/css/bootstrap-select.min.css');
    app.import('bower_components/dropify/dist/css/dropify.min.css');
    app.import('bower_components/font-awesome/css/font-awesome.css');

    // Fonts
    app.import('bower_components/font-awesome/fonts/FontAwesome.otf');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff');
    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2');
    app.import('vendor/fonts/icomoon-ultimate.eot');
    app.import('vendor/fonts/icomoon-ultimate.svg');
    app.import('vendor/fonts/icomoon-ultimate.ttf');
    app.import('vendor/fonts/icomoon-ultimate.woff');

    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.

    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    return app.toTree();
};
