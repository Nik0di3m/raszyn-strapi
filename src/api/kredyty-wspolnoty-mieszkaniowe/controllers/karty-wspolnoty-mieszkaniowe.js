"use strict";

/**
 *  kredyty-wspolnoty-mieszkaniowe controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::kredyty-wspolnoty-mieszkaniowe.kredyty-wspolnoty-mieszkaniowe",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service(
          "api::kredyty-wspolnoty-mieszkaniowe.kredyty-wspolnoty-mieszkaniowe"
        )
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
