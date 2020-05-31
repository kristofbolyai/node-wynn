"use strict";

/**
 * index.js
 * ==============
 * The main object for the module.
 */

module.exports = {
  // v2
  getPlayer: require("./methods/v2/getPlayer.js"),
  getIngredient: require("./methods/v2/getIngredient.js"),
  getRecipe: require("./methods/v2/getRecipe.js"),
  // Legacy
  getTerritories: require("./methods/legacy/getTerritories.js"),
  getOnline: require("./methods/legacy/getOnline.js"),
  getGuild: require("./methods/legacy/getGuild.js"),
  getItem: require("./methods/legacy/getItem.js"),
};
