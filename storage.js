var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./die-dart-d8a94d301e76.json');

var doc = new GoogleSpreadsheet('1vOBLjEKqVDnnTU3pZv1uUTYh_G9T1BxS91Ld5Gb_CgY');
var sheet;

exports.addRow = function(row) {

    doc.useServiceAccountAuth(creds, (err, token) => {

        doc.getInfo(function(err, info) {
            sheet = info.worksheets[0];
            sheet.addRow(row,
                function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
        });

    });

}
