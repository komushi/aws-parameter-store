'use strict';
const AWS = require("aws-sdk");

/**
 * Class representing AWS SSM Parameter Store.
 * @type {ParameterStore}
 */
module.exports = class ParameterStore {

  /**
   * Constructor
   * @param region
   */
  constructor(region) {
    this.region = region;

    AWS.config.update({
      region: region,
    });

  }

  /**
   * Gets SecureString Paramters from AWS SSM. Consuming services are expected to call this method
   * to get Parameters.
   *
   * @param names
   * @returns {Promise} of Parameters from the AWS SSM Parameter Store
   *
   */
  getParameters(names) {

    return new Promise((resolve, reject) => {

      const params = {
        Names: names,
        WithDecryption: true
      };

      const ssm = new AWS.SSM({apiVersion: '2014-11-06'});

      ssm.getParameters(params, (err, data) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(data);
        }
      });
    });
  }

  /**
   * Puts SecureString Paramters to AWS SSM. Consuming services are expected to call this method
   * to put Credentials.
   *
   * @param params
   * @returns {Promises} of null objects from the AWS SSM Service if no issues
   *
   */
  putParameters(params) {

    const ssm = new AWS.SSM({apiVersion: '2014-11-06'});

    const promises = params.map((param) => {
      new Promise((resolve, reject) => { 
        const params = 
          {
            Name: param.Name,
            Type: param.Type,
            Value: param.Value,
            Description: param.Description,
            Overwrite: param.Overwrite 
          };

        ssm.putParameter(params, (err, data) => {
          if (err) {
            reject(err);
          }
          else {
            resolve();
          }
        });
      });
    });

    return Promise.all(promises);
  }

  /**
   * Removes SecureString Paramters from AWS SSM. Consuming services are expected to call this method
   * to remove Parameters.
   *
   * @param names
   * @returns {Promises} of null objects from the AWS SSM Service if no issues
   *
   */
  removeParameters(names) {

    const ssm = new AWS.SSM({apiVersion: '2014-11-06'});

    const params = names.map((name) => {
       return {Name: name};
    });

    const promises = params.map((param) => {
      new Promise((resolve, reject) => { 
        ssm.deleteParameter(param, (err, data) => {
          if (err) {
            reject(err);
          }
          else {
            resolve();
          }
        });
      });
    });

    return Promise.all(promises);

  }
};
