export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};
export const statusFileChange = (status) => {
  return {
    type: "filters/statusFileChange",
    payload: status,
  };
};
export const PriorityChange = (select) => {
  return {
    type: "filters/PriorityChange",
    payload: select,
  };
};
