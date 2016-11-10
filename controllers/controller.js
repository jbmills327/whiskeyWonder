var barrel = require('../model');

function create(req, res) {
    var newBarrel = new barrel(req.body);
    newBarrel.save((err, doc) => {
        if (err) {
            return res.send(err);
        }
        console.log(doc);
        res.send(doc);
    });

};


function get(req, res) {
    if (req.params.id) {
        barrel.findOne({
                _id: req.params.id,
            },
            (err, doc) => {
                if (err) {
                    return res.send(err);
                }
                if (!doc) {
                    return res.send('No bottle with that ID')
                }
                console.log('Doc empty, fuck off!')
            })
    } else {
        barrel.find({}, (err, doc) => {
            if (err) {
                return res.send(err)
            }
            res.send(doc)

        });
    };
};

module.exports = {
    create: create,
    get: get
};
