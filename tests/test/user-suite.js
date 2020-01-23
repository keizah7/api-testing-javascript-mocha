require('mocha');
let settings = require('../modules/runtime/settings');
let env = require('../modules/runtime/environments');
let user = require('../modules/apis/user');
let utils = require('../modules/runtime/utils');
let chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('INTEGRATION API TESTS', function () {
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
        it('Should be able to update user profile', async function () {
            let response = await user.putRequest();

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('first_name');
            expect(JSON.stringify(response.body)).to.contain(data.user.first_name);
        });

        it('Should be able to get user profile', async function () {
            let response = await user.getRequest();

            expect(response.statusCode).to.equal(200);
            expect(response.body).to.have.property('first_name');
            expect(response.body.first_name).to.equal(data.user.first_name);
        });

        /** validation */
        it('Should be not able to update user profile when firstname is invalid', async function () {
            data.user.first_name = 'a1';

            let response = await user.putRequest();

            expect(response.statusCode).to.equal(400);
            expect(response.body.code).to.equal('INVALID_FIRST_NAME');
        });

        it('Should be not able to update user profile when lastname is invalid', async function () {
            data.user.first_name = 'Arturas';
            data.user.last_name = 'a1';

            let response = await user.putRequest();

            expect(response.statusCode).to.equal(400);
            expect(response.body.code).to.equal('INVALID_LAST_NAME');
        });

        it('Should be not able to update user profile when country code is invalid', async function () {
            data.user.last_name = 'Qwerty';
            data.user.country_code_iso = 'zz';

            let response = await user.putRequest();

            expect(response.statusCode).to.equal(400);
            expect(response.body.code).to.equal('VALIDATION_ERROR');
            expect(response.body.message).to.equal("not valid country code ISO");
        });

        it('Should be not able to update user profile when language code is invalid', async function () {
            data.user.country_code_iso = 'LT';
            data.user.language_code = 'zz';

            let response = await user.putRequest();

            expect(response.statusCode).to.equal(400);
            expect(response.body.code).to.equal('VALIDATION_ERROR');
            expect(response.body.message).to.equal("invalid language code");
        });
        //
        // it('Should be able to call post request', async function () {
        //   // Given
        //   data.pm.first_name = utils.randomString(1, 'QWERTYUIOPLKJHGFDSAZXCVBNM') + utils.randomString(14, 'qwertyuioplkjhgfdsazxcvbnm');
        //   // When
        //   let response = await pm.postRequest();
        //   // Then
        //   expect(response.statusCode).to.equal(200);
        //   expect(response.body.data).to.have.property('first_name');
        //   expect(response.body.data.date_stamp).to.equal(utils.getDateStamp());
        //   expect(JSON.stringify(response.body)).to.contain(data.pm.first_name);
        // });
        //
        //
        // it('Should be able to call patch request', async function () {
        //   // Given
        //   data.pm.first_name = utils.randomString(1, 'QWERTYUIOPLKJHGFDSAZXCVBNM') + utils.randomString(14, 'qwertyuioplkjhgfdsazxcvbnm');
        //   // When
        //   let response = await pm.patchRequest();
        //   // Then
        //   expect(response.statusCode).to.equal(200);
        //   expect(response.body.data).to.have.property('first_name');
        //   expect(response.body.data.date_stamp).to.equal(utils.getDateStamp());
        //   expect(JSON.stringify(response.body)).to.contain(data.pm.first_name);
        // });
        //
        // it('Should be able to call delete request', async function () {
        //   // Given
        //   data.pm.id = utils.randomString(5, '123456789');
        //   // When
        //   let response = await pm.deleteRequest();
        //   // Then
        //   expect(response.statusCode).to.equal(200);
        //   expect(response.body.data).to.not.have.property('first_name');
        //   expect(JSON.stringify(response.body)).to.not.contain(data.pm.first_name);
        // });
    });
});
