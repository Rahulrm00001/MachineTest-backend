const registerSchema = require('../model/register')

const addRegister = async (req, res) => {

    try {
        const { name, email } = req.body

        if (!req.body) {
            throw new Error('required')
        }

        const register = await registerSchema.create({
            email, name
        })

        res.json(register)

    } catch (error) {
        
      console.log(error);
    }
}

module.exports = addRegister