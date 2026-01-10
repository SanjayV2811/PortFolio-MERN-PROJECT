const uploadToCloudinary = require("../utils/uploadToCloudinary");

export const createProjectController = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const uploadResult = await uploadToCloudinary(req.file.buffer);
      imageUrl = uploadResult.secure_url;
    }

    const project = await createProject({
      ...req.body,
      projectImage: imageUrl
    });

    res.status(201).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
