"use strict";

/**
 *  konta-wspolnoty-mieszkaniowe controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController(
  "api::konta-wspolnoty-mieszkaniowe.konta-wspolnoty-mieszkaniowe",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service(
          "api::konta-wspolnoty-mieszkaniowe.konta-wspolnoty-mieszkaniowe"
        )
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
