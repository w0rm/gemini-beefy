var beefy = require('beefy');
var http = require('http');
var url = require('url');

module.exports = function (gemini, opts) {

    var server;
    var rootUrl = url.parse(gemini.config.rootUrl);

    if (typeof opts.bundlerFlags === 'string') {
        opts.bundlerFlags = opts.bundlerFlags.split(/\s+/g);
    }

    if (!opts.cwd) {
        opts.cwd = process.cwd();
    }

    gemini.on('startRunner', function () {
        return new Promise(function (resolve, reject) {
            console.log('Starting beefy.');
            server = http.createServer(beefy(opts, function (err) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
            }));
            server.listen(rootUrl.port, rootUrl.hostname, function (argument) {
                console.log('Started beefy.');
                resolve();
            });
        });
    });

    gemini.on('endRunner', function (runner, data) {
        return new Promise(function (resolve) {
            console.log('Stopping beefy.');
            server.close(function () {
                console.log('Stopped beefy.');
                resolve();
            });
        });
    });

};
