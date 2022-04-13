"use strict";

/**
 * aktualnosci router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter(
  "api::aktualnosci.aktualnosci",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { Slug } = ctx.params;
      const { query } = ctx;

      const entity = await strapi
        .service("api::aktualnosci.aktualnosci")
        .findOne(Slug, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
