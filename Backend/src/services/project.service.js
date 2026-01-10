import Project from "../models/projects.model.js";

export const getAllProjects = async () => {
  return await Project.find().select("-projectImage");
};

export const getProjectById = async (id) => {
  return await Project.findById(id);
};

export const createProject = async (project) => {
  return await Project.create(project);
};

export const updateProject = async (id, project) => {
  return await Project.findByIdAndUpdate(id, project);
};

export const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
};

export const setFavorite = async (id) => {
  return await Project.findByIdAndUpdate(id, { isFavorite: true });
};

export const removeFavorite = async (id) => {
  return await Project.findByIdAndUpdate(id, { isFavorite: false });
};

export const getFavoriteProjects = async () => {
  return await Project.find({ isFavorite: true });
};


