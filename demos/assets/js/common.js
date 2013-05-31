(function(demos, $) {

    var $xhrOutput = $('.xhr-output');

    function loadPage(e) {
        e.preventDefault();
        $.ajax('pages/xhr-test.html')
            .done(function(data) {
                $xhrOutput.append(data);
            })
            .fail(function() {
                $xhrOutput.html('Error - does the page exist');
            });
    }

    function initEventHandlers() {
        $('.xhr-test').on('click', loadPage);
    }

    (function init() {
        initEventHandlers();
    }());

})(demos = window.demos || {}, jQuery);

