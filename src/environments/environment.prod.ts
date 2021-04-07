declare const require: any;
const pkg = require('../../package.json');

export const environment = {
  production: true,
  version: pkg.version,
};
