let utils = require('./utils');

(function () {
  // define global data and default values - subject to change during runtime
  let data = {
    global: {
      Authorization: ''
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
    }
  };
  exports.getDefaultEmptyValue = function () {
    return null;
  };
  exports.getAll = function () {
    return data;
  };
})();
