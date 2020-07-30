var http = require('http');
const { table } = require('console');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h1 align="center">Daftar Nilai Santri</h1>`);
    res.write(`<table align = "center" border = "1" width="250px" height ="200px">\
    <thead>\
        <tr>\
            <th>No</th>\
            <th>Nama</th>\
            <th>Nilai</th>\
            <th>Ket</th>\
            <th>Grade</th>\
            <th>Predikat</th>\
        </tr>\
    </thead>\
    <tbody>
    `);
    let nilai = new Map();
    nilai.set('Jodi',99.99);
    nilai.set('Bedu',99.99);
    nilai.set('Fahrul',79.99);
    nilai.set('David',89.99);
    nilai.set('Deden',20.99);
    nilai.set('Rafi',90.99);
    
    var no = 0
    for(const santri of nilai.entries()){
        let keterangan = (santri[1] >= 60) ? "lulus" : "Gagal";

        let grade = "";
        if(santri[1] > 85 && santri[1] <= 100) grade = "A";
        else if(santri[1] > 75 && santri[1] <= 85) grade = "B";
        else if(santri[1] > 60 && santri[1] <= 75) grade = "C";
        else if(santri[1] > 30 && santri[1] <= 60) grade = "D";
        else if(santri[1] > 0 && santri[1] <= 30) grade = "E";
        else grade = "";

        let predikat = ""
        switch (grade) {
            case "A": predikat = "Memuaskan"; break;
            case "B": predikat = "Baik"; break;
            case "C": predikat = "Cukup"; break;
            case "D": predikat = "Kurang"; break;
            case "E": predikat = "Buruk"; break;
            default: predikat = ""; break;
        }

        switch (grade) {
            case "A": warna = "#90EE90"; break;
            case "B": warna = "#87CEFA"; break;
            case "C": warna = "#3CB371"; break;
            case "D": warna = "#FF1493"; break;
            case "E": warna = "#F08080"; break;
            default: warna = ""; break;
        }
        
            no++

    res.write(`\
        <tr bgcolor="${warna}">\
            <td align="center">${no}</td>\
            <td>${santri[0]}</td>\
            <td>${santri[1]}</td>\
            <td>${keterangan}</td>\
            <td align="center">${grade}</td>\
            <td>${predikat}</td>\
        </tr>\
        `);
}
    res.write(`</tbody>\
</table>`);
    res.end();
}).listen(8000);

console.log("server running on http://localhost:8000");


