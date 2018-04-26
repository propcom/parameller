const DevConfig = require("./.webpack/DevConfig");
const ProductionConfig = require("./.webpack/ProductionConfig");
const config =
    process.env.NODE_ENV === "production"
        ? new ProductionConfig()
        : new DevConfig();

// Config Builder
module.exports = config.package("parameller").build();
