pragma solidity >=0.4.21 <0.6.0;

import "./verifier.sol";
import "./ERC721Mintable.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
// contract MyVerifier is Verifier {
//     function verifyTx(
//             uint[2] memory a,
//             uint[2][2] memory b,
//             uint[2] memory c,
//             uint[2] memory input
//     ) public returns (bool r) {
//         super.verifyTx(a, b, c, input);
//     }
// }

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is TokenyHouses, Verifier {
    struct Solution {
        address to;
        uint[2] a;
        uint[2][2] b;
        uint[2] c;
        uint[2] input;
    }

    Solution[] solutions;
    mapping(bytes32 => bool) uniqueSolutions;

    event SolutionAdded(address to, uint[2] a, uint[2][2] b, uint[2] c, uint[2] input);
    event TestEvent(string a, string b);

    function doesSolutionExist(bytes32 key) public view returns (bool) {
        return uniqueSolutions[key];
    }

    function createKey(address to, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(to, a, b, c, input));
    }

    function addSolution(address to, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        Solution memory newSolution;
        newSolution.to = to;
        newSolution.a = a;
        newSolution.b = b;
        newSolution.c = c;
        newSolution.input = input;
        bytes32 newSolutionKey = createKey(newSolution.to, newSolution.a, newSolution.b, newSolution.c, newSolution.input);
        require(doesSolutionExist(newSolutionKey) == false, "Solution already exists");
        require(super.verifyTx(a, b, c, input), "Solution could not be verified");
        solutions.push(newSolution);
        uniqueSolutions[newSolutionKey] = true;
        emit SolutionAdded(newSolution.to, newSolution.a, newSolution.b, newSolution.c, newSolution.input);
    }

    function mintNFT(address to, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        addSolution(to, a, b, c, input);
        super.mint(to, tokenId);
    }
}


// TODO define a solutions struct that can hold an index & an address


// TODO define an array of the above struct


// TODO define a mapping to store unique solutions submitted



// TODO Create an event to emit when a solution is added



// TODO Create a function to add the solutions to the array and emit the event



// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly


























