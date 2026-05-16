var portalLib = require('/lib/xp/portal');
var assetLib = require('/lib/enonic/asset');
var thymeleaf = require('/lib/thymeleaf');
var httpClientLib = require('/lib/http-client');
var getUrl = require('/lib/util').getUrl;

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

function handleGet(req) {

    var view = resolve('system-info.html');

    var url = getUrl(req);

    var data = getStatus(url);
    data = JSON.parse(data.body);

    var params = {
        assetsUri: assetLib.assetUrl({
            path: ''
        }),
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