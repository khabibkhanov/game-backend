'use strict';

/**
 * news-genre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-genre.news-genre');
