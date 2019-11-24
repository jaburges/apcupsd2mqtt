module.exports = require('yargs')
    .env('APCUPSD2MQTT')
    .usage('Usage: $0 [options]')
    .describe('mqtt-url', 'mqtt broker url.')
    .describe('mqtt-user', 'mqtt broker username')
    .describe('mqtt-pass', 'mqtt broker password')
    .describe('name', 'topic prefix')
    .describe('ups-name', 'UPS Name. Is overwritten if apcupsd supplies a name')
    .describe('interval', 'Interval in seconds to poll apcaccess')
    .describe('publish-changes-only', 'Don\'t publish unchanged values')
    .boolean('publish-changes-only')
    .describe('verbosity', 'possible values: "error", "warn", "info", "debug"')
    .alias({
        h: 'help',
        i: 'interval',
        m: 'mqtt-url',
        s: 'mqtt-user',
        p: 'mqtt-pass',
        n: 'name',
        u: 'ups-name',
        v: 'verbosity'
    })
    .default({
        interval: 10,
        mqttUrl: 'mqtt://127.0.0.1',
        mqttUser: 'ups',
        mqttPass: '',
        name: 'ups',
        upsName: 'ups',
        verbosity: 'info'
    })
    .version()
    .help('help')
    .argv;
