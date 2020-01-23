require('mocha');
let settings = require('../modules/runtime/settings');
let env = require('../modules/runtime/environments');
let deal = require('../modules/apis/deal');
let utils = require('../modules/runtime/utils');
let chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Deals API TESTS', function () {
    let data = settings.runtimeData;
    let options = settings.options;
    let expect = settings.expect;
    this.timeout(options.apiCallTimeout);

    before('Use config from server', function () {
        settings.setEnvironment('dev');
        return env.loadAndSetConfig();
    });

    after("Data cleanup.", function () {
    });

    describe('User tests', function () {
        it('Should be able to get deals', async function () {
            let response = await deal.getUserDeals();

            expect(response.statusCode).to.equal(200);
            // expect(response.body).to.have.property('first_name');
            // expect(response.body.first_name).to.equal(data.user.first_name);
        });
    });
});
