'use strict';

/**
 *  module controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::module.module');



// const collectionType = 'module'
// // const { createCoreController } = require('@strapi/strapi').factories;
// const schema = require(`../content-types/${collectionType}/schema.json`);
// const createPopulatedController = require("../../../helpers/populate");
// module.exports = createPopulatedController(`api::${collectionType}.${collectionType}`, schema);
