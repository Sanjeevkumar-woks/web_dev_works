import _ from "lodash";

const obj1 = {"a": 1, "b": 2};
const obj2 = {"b": 2, "a": 1};

console.log(_.isEqual(obj1, obj2)); // true