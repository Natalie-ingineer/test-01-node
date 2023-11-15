const path = require("path");

console.log("Назва файлу", path.basename(__filename));
console.log("Ім'я директорії", path.dirname(__filename));
console.log("Розширення файлу", path.extname(__filename));
console.log("Parse: ", path.parse(__filename).name);
