const htmlDocx = require("html-to-docx");
var pdf = require("html-pdf");
const fs = require("fs");
exports.generate = async (req, res) => {
  const uri = req.body.uri;
  const html = `<h1>Prueba de html a docx</h1><br><h2>Test imagen</h2><img src="${uri}">`;
  const header = "<div>Header<div/>";
  const footer = "<footer>Esto es un footer</footer>";
  var options = { format: "Letter" };
  var doc = await htmlDocx(html);
  //   doc = doc.toString("utf8");
  //   console.log(doc)
  const fileLocation = `${__dirname}\\word.docx`;
  
  fs.writeFileSync(fileLocation, doc);
  await pdf
    .create(html, options)
    .toFile("./test.pdf", function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log("PDF generado");
        console.log(res);
      }
      // { filename: '/app/businesscard.pdf' }
    });
  res.status(200).json({ msg: "Word generado" });
};
