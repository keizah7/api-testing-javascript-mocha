let utils = require('../runtime/utils');
let settings = require('../runtime/settings');
let chai = require('chai'), chaiHttp = require('chai-http');
let expect = settings.expect;
chai.use(chaiHttp);


(function () {
    let env = settings.environment;
    let data = settings.runtimeData;

    /**
     * get user deals
     */
    exports.getUserDeals = async function () {
        return await chai.request(env.urlApi)
            .get('/mth/v1/users/deals?deal_type=active')
            .set('content-type', 'application/json')
            .set('Authorization', data.global.Authorization)
            .send();
    };

})();
