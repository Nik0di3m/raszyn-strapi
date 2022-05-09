"use strict";

/**
 *  kredyty-klienci-indywidualni controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::kredyty-klienci-indywidualni.kredyty-klienci-indywidualni",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service(
          "api::kredyty-klienci-indywidualni.kredyty-klienci-indywidualni"
        )
        .find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(results[0]);
    },
  })
);
