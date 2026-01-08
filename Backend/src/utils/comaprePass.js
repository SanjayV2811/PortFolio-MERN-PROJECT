const bcrypt = require("bcrypt");

const comparePassword = async (password,user) =>{
    try {
        const isMatch = await bcrypt.compare(password, user.password);
        return isMatch;
    } catch (error) {
        console.log(error)
    }
}

module.exports = comparePassword