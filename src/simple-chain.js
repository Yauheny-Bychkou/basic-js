const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: "",
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || position > this.array.length || position <= 0) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },

  finishChain() {
    this.result = this.array.join("~~");
    this.array = [];
    return this.result;
  },
};

module.exports = {
  chainMaker,
};
