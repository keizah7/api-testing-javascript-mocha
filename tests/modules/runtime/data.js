let utils = require('./utils');

(function () {
    // define global data and default values - subject to change during runtime
    let data = {
        global: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODIzOTA1OTIsImlhdCI6MTU3OTcxMjE5MiwibmJmIjoxNTc5NzEyMTkyLCJpZCI6NjQ3OSwiY2lkIjo2NjM0NCwiZGV2X2lkIjoic3RyaW5nIn0.hpCM40Ila6Jj4HLqw5oFiTWQnjqva44dMV2y77xv8U8',
            mth: 'bW9uZXRoYQ==',
        },
        pm: {
            id: null,
            email: utils.randomEmail(),
            first_name: null,
            last_name: null,
            address: null,
            date_stamp: utils.getDateStamp(),
            time_stamp: utils.getTimeStamp(),
            string: utils.randomString(256, 'ĄČĘĖĮŠŲŪŽąčęėįšųūžzxcvbnmlkjhgfdsaqwertyuiop`1234567890-=~!@#$%^&*()_+[]\;\',./<>?:{}|\"'),
        },
        user: {
            address: utils.randomString(30, '     ĄČĘĖĮŠŲŪŽąčęėįšųūžzxcvbnmlkjhgfdsaqwertyuiop1234567890'),
            country_code_iso: utils.getCountryCode(),
            email: utils.randomEmail(),
            fb_id: Math.floor((Math.random() * 9) + 1),
            first_name: utils.randomString(10, 'ĄČĘĖĮŠŲŪŽąčęėįšųūžzxcvbnmlkjhgfdsaqwertyuiop'),
            language_code: utils.getCountryCode().toLowerCase(),
            last_name: utils.randomString(10, 'ĄČĘĖĮŠŲŪŽąčęėįšųūžzxcvbnmlkjhgfdsaqwertyuiop'),
        },
        deal: {
            condition: "used",
            description: "string",
            expired_at: "2020-03-24T17:42:42Z",
            from: "2019-12-02T17:42:42Z",
            is_defected: true,
            note_to_seller: "string",
            order_id: 0,
            to: "2019-12-02T17:42:42Z",
            warranty_until: "2020-12-05T17:42:42Z",
            currency: "EUR",
            title: "string",
            total: 0.01,
            buyer_id: "9e600906-c972-4ff8-b7d8-780d1a344573",
            deal_type: "goods",
            seller_id: "3e4e9c59-0b7c-45d2-8c50-edb2291303bc"
        }
    };
    exports.getDefaultEmptyValue = function () {
        return null;
    };
    exports.getAll = function () {
        return data;
    };
})();
