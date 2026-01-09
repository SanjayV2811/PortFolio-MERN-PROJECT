const Owner = require("../models/admin.model");

module.exports = {
    createOwner: async (ownerData) => {
        const owner = new Owner(ownerData);
        return await owner.save();
    },
    getOwner: async (ownerId) => {
        return await Owner.findById(ownerId);
    },
    updateOwner: async (ownerId, ownerData) => {
        return await Owner.findByIdAndUpdate(ownerId, ownerData, { new: true });
    },
    deleteOwner: async (ownerId) => {
        return await Owner.findByIdAndDelete(ownerId);
    }
};