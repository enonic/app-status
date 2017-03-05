var portalLib = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');
var httpClientLib = require('/lib/xp/http-client');
var moment = require('/assets/momentjs/2.16.0/min/moment-with-locales.min.js');

function getUptime(ms) {

    var s = Math.floor(ms / 1000);

    var day = 86400;
    var hour = 3600;
    var minute = 60;

    var numDays = Math.floor(s / day);
    var numHours = Math.floor((s % day) / hour);
    var numMinutes = Math.floor(((s % day) % hour) / minute);
    var numSeconds = ((s % day) % hour) % minute;

    return numDays + 'd ' + numHours + 'h ' + numMinutes + 'm ' + numSeconds + 's';
}

function jvmInfo(jvminfo) {
    if (!jvminfo) {
        return;
    }
    jvminfo.fStartTime = moment(jvminfo.startTime).format('MMMM Do YYYY, h:mm a');
    jvminfo.fUpTime = getUptime(jvminfo.upTime);
    return jvminfo;
}

function getStatus(service, notJson) {
    var url = portalLib.url({path: 'status/' + service, type: 'absolute'});
    var response;

    try {
        response = httpClientLib.request({
            url: url,
            method: 'get',
            connectionTimeout: 5000,
            readTimeout: 5000,
            contentType: 'application/json'
        });

        if (!notJson) {
            return JSON.parse(response.body);
        }
        return response.body;

    } catch (e) {
        log.info('Failed to get status for ' + service);
    }
}


function handlePost(req) {
    var param = req.params && req.params.service ? req.params.service: 'server';

    var view = resolve('status.html');

    var data = {};
    var response;
    if (param == 'jvm') {
        data.info = getStatus('jvm.info');
        data.info = jvmInfo(data.info);
        data.os = getStatus('jvm.os');
        data.gc = getStatus('jvm.gc');
        data.memory = getStatus('jvm.memory');
        data.threads = getStatus('jvm.threads');
    } else if (param == 'metrics') {
        data = JSON.stringify(getStatus(param), null, 4);
    } else if (param == 'dump') {
        data.deadlocks = getStatus('dump.deadlocks', true);
        data.threads = getStatus('dump.threads', true);
    } else {
        data = getStatus(param);
    }

    var params = {
        param: param,
        data: data
    }

    return {
        body: thymeleaf.render(view, params)
    }
}

exports.post = handlePost;
