import { getAllProjects, getProjectById, createProject, updateProject, deleteProject, setFavorite, removeFavorite, getFavoriteProjects } from "../services/project.service.js";

export const getProjectsController = async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectByIdController = async (req, res) => {
  try {
    const project = await getProjectById(req.params.id);
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProjectController = async (req, res) => {
  try {
    const {
      title,
      domain,
      description,
      link,
      icon,
      category
    } = req.body;

    const projectData = {
      title,
      domain,
      description,
      link,
      icon,
      category
    };

    // if image uploaded
    if (req.file) {
      projectData.projectImage = req.file.buffer;
      projectData.projectImageName = req.file.originalname;
    }

    const project = await createProject(projectData);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



export const updateProjectController = async (req, res) => {
  try {
    const {
      title,
      domain,
      description,
      link,
      icon,
      category
    } = req.body;

    const projectData = {
      title,
      domain,
      description,
      link,
      icon,
      category
    };

    // if new image uploaded
    if (req.file) {
      projectData.projectImage = req.file.buffer;
      projectData.projectImageName = req.file.originalname;
    }

    const project = await updateProject(req.params.id, projectData);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({
      success: true,
      message: "Project updated successfully",
      data: project
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};



export const deleteProjectController = async (req, res) => {
  try {
    const project = await deleteProject(req.params.id);
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const setFavoriteController = async (req, res) => {
  try {
    const project = await setFavorite(req.params.id);
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const removeFavoriteController = async (req, res) => {
  try {
    const project = await removeFavorite(req.params.id);
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFavoriteProjectsController = async (req, res) => {
  try {
    const projects = await getFavoriteProjects();
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectImageController = async (req, res) => {
  const project = await getProjectById(req.params.id);
  res.set("Content-Type", "image/jpeg");
  res.send(project.projectImage);
};
