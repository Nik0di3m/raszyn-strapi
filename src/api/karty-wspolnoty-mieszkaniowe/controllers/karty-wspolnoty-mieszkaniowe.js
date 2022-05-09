"use strict";

/**
 *  karty-wspolnoty-mieszkaniowe controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::karty-wspolnoty-mieszkaniowe.karty-wspolnoty-mieszkaniowe",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service(
          "api::karty-wspolnoty-mieszkaniowe.karty-wspolnoty-mieszkaniowe"
        )
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
