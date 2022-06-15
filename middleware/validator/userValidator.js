const { Validator } = require ( 'node-input-validator' );


const userValidator = (req, res, next) =>{
    const v = new Validator(req.body, {
        username: 'required',
        password: 'required',
        passwordConfirm: 'required|same:password',
        mail: 'required|email',
        number: 'required',
        adress: 'required',
        adressSup: '',
        postalCode: 'required',
        city: 'required'
    });
    v.check().then((matched) => {
        if (!matched) {
            //errors
            console.log(v.errors);
            req.flash('errorForm', v.errors);
            return res.redirect('/signup');
        }
        next();
    })
}


module.exports = userValidator;