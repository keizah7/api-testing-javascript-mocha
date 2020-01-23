let utils = require('../runtime/utils');
let settings = require('../runtime/settings');
let chai = require('chai'), chaiHttp = require('chai-http');
let expect = settings.expect;
chai.use(chaiHttp);


(function () {
    let env = settings.environment;
    let data = settings.runtimeData;

    /**
     * get request example.
     */
    exports.getRequest = async function () {
        return await chai.request(env.urlApi)
            .get('/mth/v1/users/profile')
            .set('content-type', 'application/json')
            .set('Authorization', data.global.Authorization)
            .send();
    };

    /**
     * put request example.
     */
    exports.putRequest = async function () {
        return await chai.request(env.urlApi)
            .put('/mth/v1/users/profile')
            .set('Content-Type', 'application/json')
            .set('Authorization', data.global.Authorization)
            .send(
                {
                    address: data.user.address,
                    country_code_iso: data.user.country_code_iso,
                    email: data.user.email,
                    fb_id: "" + data.user.fb_id,
                    first_name: data.user.first_name,
                    language_code: data.user.language_code,
                    last_name: data.user.last_name,
                }
            );
    };
    /**
     * post request example.
     */
//   exports.postRequest = async function () {
//     return await chai.request(env.urlApi)
//       .post('/post')
//       .set('Content-Type', 'application/json')
//       .set('Authorization', data.global.Authorization)
//       .send(
//         {
//           first_name: data.pm.first_name,
//           email: data.pm.email,
//           string: data.pm.string,
//           date_stamp: data.pm.date_stamp,
//           time_stamp: data.pm.time_stamp
//         }
//       );
//   };
//

//
//   /**
//   * patch request example.
//   */
//   exports.patchRequest = async function () {
//     return await chai.request(env.urlApi)
//       .patch('/patch')
//       .set('Content-Type', 'application/json')
//       .set('Authorization', data.global.Authorization)
//       .send(
//         {
//           first_name: data.pm.first_name,
//           email: data.pm.email,
//           string: data.pm.string,
//           date_stamp: data.pm.date_stamp,
//           time_stamp: data.pm.time_stamp
//         }
//       );
//   };
//
//   /**
//   * delete request example.
//   */
//  exports.deleteRequest = async function () {
//   return await chai.request(env.urlApi)
//     .delete('/delete')
//     .set('Content-Type', 'application/json')
//     .set('Authorization', data.global.Authorization)
//     .send(
//       {
//         id: data.pm.id,
//       }
//     );
// };

})();
