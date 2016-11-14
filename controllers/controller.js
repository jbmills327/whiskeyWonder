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
    console.log("Checking id ", req.query.id);
    if (req.query.id) {
        barrel.findOne({
                _id: req.query.id,
            },
            (err, doc) => {
                if (err) {
                    return res.send(err);
                }
                if (!doc) {
                    console.log('Doc empty, fuck off!', doc);
                    return res.send('No bottle with that ID');
                }
                console.log("Doc found ", doc);
                res.send(doc);
            })
    } else {
        barrel.find({}, (err, doc) => {
            if (err) {
                return res.send(err);
            }
            res.send(doc);

        });
    };
};

function edit(req, res) {

    var aryansvar = {
        'name': req.body.name,
        'description': req.body.description,
        'price': Number(req.body.price)
    };
    // var newBarrel = new barrel(aryansvar);
    console.log("Edit Input haha", req.body);
    barrel.findOneAndUpdate({
        '_id': req.body._id

    }, aryansvar, {
        new: true
    }, (err, doc) => {
        if (err) {
            return res.send(err);
        }
        console.log(doc);
        res.send(doc);
    });

};

module.exports = {
    create: create,
    get: get,
    edit: edit
};
