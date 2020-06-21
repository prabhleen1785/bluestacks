const fs = require("fs");

module.exports = {
    handleRegister(req, res) {
        var words = fs.readFileSync('../src/data.json');
        var data = JSON.parse(words);
            try {
                    var p = 3;
                    var obj = req.body;
                    while(p--){
                        if(data[p].id == obj.id){
                            data[p] = obj;
                        }
                    }
                    const json = JSON.stringify(data);
                    fs.writeFile("../src/data.json", json, "utf8", (err) => {
                            if (err) throw err;
                            res.status(200).json(json);
                        }); // write it back

                } catch (e) {
                    console.log("error in register:", e);
                    res.status(422).json({ message: "some error in storing data" });
                }
    },
};
