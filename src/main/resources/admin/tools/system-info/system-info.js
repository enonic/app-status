var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');
var httpClientLib = require('/lib/http-client');
var adminLib = require('/lib/xp/admin');
var timestamp = Date.now();

function getStatus(url) {

    var response = httpClientLib.request({
        url: url + 'server',
        method: 'get',
        connectionTimeout: 5000,
        readTimeout: 5000,
        contentType: 'application/json'
    });

    return response;
}

function getUrl(req) {
    return req.scheme + '://' + req.host + ':' + 2609 + '/';
}

function handleGet(req) {

    var view = resolve('system-info.html');

    var url = getUrl(req);

    var data = getStatus(url);
    data = JSON.parse(data.body);

    var params = {
        adminUrl: portalLib.url({path: "/admin"}),
        assetsUri: portalLib.assetUrl({
            path: ''
        }),
        launcherPath: adminLib.getLauncherPath(),
        launcherUrl: adminLib.getLauncherUrl(),
        appId: 'system-info',
        appName: 'System info',
        data: data,
        serviceUrl: portalLib.serviceUrl({service: 'status'})

    };
    return {
        body: thymeleaf.render(view, params)
    }
}

exports.get = handleGet;