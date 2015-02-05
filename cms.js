var fs = require("fs");

var CMS = {};

CMS.version = "1337.0";

CMS.getPage = function(id) {
   return fs.readFileSync("page/" + id, "utf8");
};

module.exports = CMS
