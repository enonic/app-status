var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var httpClientLib = require('/lib/xp/http-client');
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
    var port = (req.port.toString().length > 0) ? ':' + req.port : '';
    
    return req.scheme + '://' + req.host + port + '/status/';
}

function handleGet(req) {

    var view = resolve('system-info.html');
    var icon = portalLib.assetUrl({path: '/img/system-info.svg'});

    var url = getUrl(req);
    
    var data = getStatus(url);
    data = JSON.parse(data.body);
    
    var params = {
        adminUrl: portalLib.url({path: "/admin"}),
        assetsUri: portalLib.url({path: "/admin/assets/" + timestamp}),
        appId: 'system-info',
        appName: 'System info',
        appIcon: icon,
        data: data,
        serviceUrl: portalLib.serviceUrl({service: 'status'})

    };
    return {
        body: thymeleaf.render(view, params)
    }
}

exports.get = handleGet;