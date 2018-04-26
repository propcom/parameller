const jasmineReporters = require("jasmine-reporters");

jasmine.getEnv().addReporter(
    new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: "reports/jest",
        filePrefix: "report"
    })
);
