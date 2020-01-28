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
    let postedPostId;

    this.timeout(options.apiCallTimeout);

    before('Use config from server', function () {
        settings.setEnvironment('dev');
        return env.loadAndSetConfig();
    });

    after("Data cleanup.", function () {
    });

    describe('Deals tests', function () {
        it('Should be able to get deals', async function () {
            let response = await deal.getUserDeals();

            expect(response.statusCode).to.equal(200);
        });

        it('Should be able to post deal', async function () {
            let response = await deal.postUserDeal();
            postedPostId = response.body.id;

            expect(response.statusCode).to.equal(201);
            expect(response.body).to.have.property('title');
            expect(response.body.title).to.equal(data.deal.title);
        });

        it('Should be able to cancel deal', async function () {
            let response = await deal.cancelUserDeal(postedPostId);

            expect(response.statusCode).to.equal(204);
        });

        it('Should be able to get user private key', async function () {
            let response = await deal.getUserWallet();

            expect(response.statusCode).to.equal(200);
        });
    });
});
