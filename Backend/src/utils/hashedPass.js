const bcrypt = require("bcrypt");

const hashedPasssword = async(password) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword
    } catch (error) {
        console.log(error)
    }
}

module.exports = hashedPasssword


