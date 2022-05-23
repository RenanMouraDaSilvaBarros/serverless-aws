const map = require('bluebird/js/release/map');
const yup = require('yup')

class UserValidation {

    static userFilds({ nome, endereco, cidade, email }) {

        let userSchema = yup.object().shape({
            nome: yup.string().required(),
            endereco: yup.string().required(),
            email: yup.string().email().required(),
            cidade: yup.string()
        });

        userSchema.validate({ nome, endereco, cidade, email })
    }

}

module.exports = UserValidation