module.exports = {
  name: "math",
  actions: {
    add: (ctx) => ctx.params.a + ctx.params.b,
  },
};
