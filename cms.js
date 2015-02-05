var fs = require("fs");

var CMS = {};

CMS.version = "1337.0";

CMS.getPage = function(id) {
   fs.readFile("page/" + id, "utf8", function (err, data) {
      if(err) {
         return "404 - Page not found";
      }
      return data;
   });
};

module.exports = CMS
