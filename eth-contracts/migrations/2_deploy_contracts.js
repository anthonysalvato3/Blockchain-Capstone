// migrating the appropriate contracts
var ERC721Mintable = artifacts.require("TokenyHouses");
// var SquareVerifier = artifacts.require("./verifier.sol");
// var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  // deployer.deploy(SquareVerifier);
  // deployer.deploy(SolnSquareVerifier);
  deployer.deploy(ERC721Mintable);
};
