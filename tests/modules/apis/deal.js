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

    /**
     * post request example.
     */
    exports.postUserDeal = async function () {
        return await chai.request(env.urlApi)
            .post('/mth/v1/deals')
            .set('Content-Type', 'application/json')
            .set('Authorization', data.global.Authorization)
            .send(
                {
                    "condition": data.deal.condition,
                    "description": data.deal.description,
                    "expired_at": data.deal.expired_at,
                    "from": data.deal.from,
                    "is_defected": data.deal.is_defected,
                    "note_to_seller": data.deal.note_to_seller,
                    "order_id": data.deal.order_id,
                    "to": data.deal.to,
                    "warranty_until": data.deal.warranty_until,
                    "currency": data.deal.currency,
                    "title": data.deal.title,
                    "total": data.deal.total,
                    "buyer_id": data.deal.buyer_id,
                    "deal_type": data.deal.deal_type,
                    "seller_id": data.deal.seller_id,
                }
            );
    };

    exports.cancelUserDeal = async function (id) {
        return await chai.request(env.urlApi)
            .post('/mth/v1/deals/'+id+'/cancel')
            .set('Content-Type', 'application/json')
            .set('Authorization', data.global.Authorization)
            .send(
                {
                    "reason": "string",
                }
            );
    };

    /**
     * post request example.
     */
    exports.getUserWallet = async function (id) {
        return await chai.request(env.urlApi)
            .get('/mth/v1/users/wallet/privatekey')
            .set('Content-Type', 'application/json')
            .set('Authorization', data.global.Authorization)
            .set('mth-passphrase', data.global.mth)
            .send();
    };

})();
