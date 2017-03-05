var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var httpClientLib = require('/lib/xp/http-client');
var timestamp = Date.now();

function getStatus(service) {
    var url = portalLib.url({path: 'status/' + service, type: 'absolute'});
    var response = httpClientLib.request({
        url: url,
        method: 'get',
        connectionTimeout: 5000,
        readTimeout: 5000,
        contentType: 'application/json'
    });

    return response;
}


function handleGet(req) {

    var view = resolve('system-info.html');
    var icon = portalLib.assetUrl({path: '/img/system-info.svg'});

    var data = getStatus('server');
    data = JSON.parse(data.body);

    var params = {
        adminUrl: portalLib.url({path: "/admin"}),
        assetsUri: portalLib.url({path: "/admin/assets/" + timestamp}),
        appId: 'system-info',
        appName: 'System info',
        appIcon: icon,
        data: data,
        serviceUrl: portalLib.serviceUrl({service: 'status'})

    }
    return {
        body: thymeleaf.render(view, params)
    }
}

exports.get = handleGet;