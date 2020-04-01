exports.getUrl = function (req) {
    var url = app.config.metricsUrl;
    if(!url) {
        url = req.scheme + '://' + req.host + ':' + 2609 + '/';
    }
    log.debug("Using url: " + url);
    return url;
};