const test = require("node:test");
const { format } = require("path");

module.exports = {
    
    default : {
        tags : process.env.npm_config_TAGS || "",
        formatOptions : {
            snippetInterface: "async-await"
        },
        paths : [
            "src/test/features/*.feature"   
        ],
        publishQuiet: true,
        dryRun : false,
        require : 
        [
            "src/test/support/world.ts",
            "src/test/Hooks/hooks.ts",
            "src/test/steps/*.ts"
          
        ],

        format : [
           "html : test-result/cucumber-report.html",
           "json: test-result/cucumber-report.json",
        ],

        requireModule : [
            "ts-node/register"
        ]
    }
}
