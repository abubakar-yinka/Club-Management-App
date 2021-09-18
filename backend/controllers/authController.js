const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/app')

exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        // const secreteKey = require('crypto').randomBytes(64).toString('hex'); 

        //Find the User with the corr. email
        const user = await User.findOne({
            where: {
                email: email
            }
        })

        //Check if User is found
        if (!user) return res.status(404).json({message: `User not found!`})
        
        //Check if password matches
        if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({message: `Incorrect Pasword!`})
        
        //generate auth token
        const userWithToken = generateToken(user.get({ raw: true }))
        
        return res.send(userWithToken)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    // return res.send([email, password])
}

exports.register = async (req, res) => {

    try {
        //Create a new user
        const user = await User.create(req.body)

        //generate auth token
        const userWithToken = generateToken(user.get({ raw: true }))
        return res.send(userWithToken)

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const generateToken = (user) => {
    delete user.password

    const token = jwt.sign(user, config.appKey, { expiresIn: 86400 })

    return {
        ...user,
        ...{ token }
    }
}