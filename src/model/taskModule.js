import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    status: ['pending', 'completed']
  },
  { timestamps: true }
);

const taskModel = model("task", taskSchema);

const createTask = async (dataObj) => {
  console.log("Inside createTask ", dataObj);
	let newTask = new taskModel(dataObj);
	let result = await newTask.save();
  console.log("result", result);
	return result;
};

const getTasks = async (findQuery, filter={}) => {
  console.log("Inside getTasks");
  let result = await taskModel.find(findQuery, {...filter})
  console.log("result", result);
  return result;
}

const updateById = async (findQuery, updateQuery) => {
	let result = await taskModel
		.findOneAndUpdate(findQuery, updateQuery, {
			new: true,
			useFindAndModify: false,
		})
		.lean();
	
	return result;
};


export default {
  createTask,
  getTasks,
  updateById
}