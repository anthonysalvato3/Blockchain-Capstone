// Used template from https://github.com/ProjectOpenSea/opensea-creatures/blob/master/scripts/mint.js

const HDWalletProvider = require("truffle-hdwallet-provider")
const fs = require('fs')
const web3 = require('web3')
const MNEMONIC = fs.readFileSync(".secret").toString().trim();
const INFURA_KEY = "558db693cc5947a19511e2d7925b67b9"
const NFT_CONTRACT_ADDRESS = "0xb69C92A8e6457E5255b774808cFeC7eC0d1084A4"
const OWNER_ADDRESS = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
const TO_ADDRESS = "0x96289609CB9f4A08d664E7462CfE9c345335c670"
const OTHER_ADDRESS = "0xf17f52151EbEF6C7334FAD080c5704D77216b732";
const NETWORK = "rinkeby"
const proofs = [{
  "proof": {
      "a": ["0x26a7f8463ca4f3877e692e1d242d08964950d04733d26455249459098b440ecc", "0x1beb6c4bbc8619e27c4619c739b15d25b6b5cabe45f7f6b9fc6b68a0ddbb5a8f"],
      "b": [["0x229b7b98e44caf891e77edd8e56911fda0e943040985e58e16263ac4c7a4d359", "0x231e37aca3bf1215417f45690ae93757c7cba74c816170383f245b088944bbc6"], ["0x17ebf0be34c5890e6ed64c4836dba811d117cbd77bfd3e7d30d03fccf6955ce5", "0x287b472b4b95d087fd81bcb70b0a87bd8ac5fa0f8cdce0eed72b1cfa699e9f14"]],
      "c": ["0x210a8a00ebc3ae34e3ef4aadd32724e2d384a8acb23d37d0fe0926dbfe3a1746", "0x05c5bc387378ad0e15c72d6e094e574cf62867a2f6465c250cfa284fa06cc9fa"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 1
},

{
  "proof": {
      "a": ["0x03e584e137aa2b926e3da3b38a1590fd5c2879396b21ffe3db65677d9b728909", "0x215eebe60d418ab4b465bc162419b3b4a63d6c4b72e770a38943844b3c9701ca"],
      "b": [["0x1c1151da91c70016a9184dba27c8ef80d9514f1b886af0b33436f885679534f4", "0x10e6add0a353d4244405f5fa4c54d64ee4e6d50631ea17762cfadcd1ece74920"], ["0x121320555202a7f88b22bff7951bd6ae55b1369b370caa71568ab422e4f773b6", "0x16db928dae10a2b050ea3a9c5e65cad1f834393bbb766bb58eaddbdadd061402"]],
      "c": ["0x24c0a6d6da8f6f6a7aa559b55d8cb91d91c1dc6107c4d29cd147e32ffff5d460", "0x02dddb0825a3acec8d9ca08b82d68a42760acdbe8e79f94126106e81ba03f4f7"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000001", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 2
},

{
  "proof": {
      "a": ["0x11ceea6848d6f4bb17fbe01e2f37a7f50aa5ea4da8aa6e4e364c3202dbb35deb", "0x04991e94bc0ae3718a464aecd3c351cadb9c779d8acf9601ac87245b7a5cec76"],
      "b": [["0x18b754e9665ee861740aa1ccb4def4ed4eb945d0f26be1dced2656004ea59111", "0x099a674ea974d7421b96a617635ac38939775ce47916487edaf5d384ddd401bf"], ["0x22450d6b21830786c87e94131fbaaf9f6eaa93e6d526a827b42b706bee7654ff", "0x022b35cca41f73cee44819184e9c0054e1553f3a31310e53581d90e526c93073"]],
      "c": ["0x07405e6618cd88e94e44ceeade27f44d9dc362cf8f4de882b0d8905906d3daea", "0x1c8e8f412dfab3243f232fa9da9b1705bf99b05952819160d69c64ede0794fab"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000004", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 3
},

{
  "proof": {
      "a": ["0x1ba0df5159c4c75da8a30d34e28b0a2242b9634aed77c9b41b979e6081ed5033", "0x04a81e18c8c57362b000213bce6d533055ba4f830dc76abf9c5bf37907ffbdd0"],
      "b": [["0x272c1132c59a11b904df2e3921eaf7b40ce948a1a24e9b36dd6e2e04cc3e9560", "0x1535e1e6c5cb4d685ef68595487910d68d8813765f422b977b53e32f8c53fc94"], ["0x26e8a26d9bd754c038c42bb9b5b32b91a0c1463aba53b03eb8e224f1230f853a", "0x2c080f65faca972f26229da56b338fc12d62261f8626ec42659bc1090e7a983d"]],
      "c": ["0x08c833d09a989255fa84bd16e9b4374fbf2c59f92f8b67298771b72c03e56f7f", "0x2f85944aef8c9f217463077e0d8f85fdf5546b3b570820ade0cf9c95a3feb440"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000009", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 4
},

{
  "proof": {
      "a": ["0x1d5f2cc6c3e464ee9c5e190b6fff14aad3002a4ba2e3637a0ecdb1ae15b72e9e", "0x01012087fbe1e8e708e34fd11d58f9378d5e074d72e135fdd7e0e204720a20d0"],
      "b": [["0x056b1bef4cd1a69a4fd0f32f724c7c6403e5db427ca96234269119267e3945d6", "0x0c3eba894c4be4f14e087dfea24ab73e8b3a1020f9e441207716a34d416256de"], ["0x0dee185e3c5d2f77b220f582b0a69cbca5a16e8770a43e005dbb3015b7b8c853", "0x1e7dbb1369a236e709e640a010db9d15c799efd7b67c804d57f229e44ccad4b1"]],
      "c": ["0x102eccc0225e2fa0de10b79b169c002041a64a06ab4bd9485a6750c4e65bc604", "0x28d653441db0d2efd52ce63fad1f4065cea1094db7bd71c05f910aa4421b86f0"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000010", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 5
},

{
  "proof": {
      "a": ["0x00f59df5b373e6c051f37af1acad37efb8cb0b95f79a6317f762f013211c4642", "0x2a55fdc40078c8ef9c619c2a402f3c0339fc4d0c99055df4dfdfc7622d228180"],
      "b": [["0x20d4c55809a1c61dbdf8a8c212b15a13052101e7327e7f16f4e27e06d7aee3da", "0x124858cade6070d41c8a304537c6f048e9ab3166224818b4a9e775c07f445a83"], ["0x2a3f2c09bceb8dfe4aab96e92f7b0a5c29f2d1767f1ff16dcb985818d5e9bd06", "0x165dcf6b4665605f78f7c8c56869d710bcec2f35dbbc4d10442317ee3fa862e7"]],
      "c": ["0x13fe29dd22aa68dec30ef3cf7ca20c691f820965da2eb0e5fcf21e780ef1a2f8", "0x159c59229a338f8db0c72ff58ff5ff67f26a895e75b5b5b71513776f56f07c95"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000019", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 6
},

{
  "proof": {
      "a": ["0x128e71ca8caf6cacbfc6ad0432c216a1bb9e1477eb357cf2ae1dac26045dd38b", "0x2df7265ce88f2bce932a952f8108d7908ab698317bb4cc9e4514adb3f7f8463f"],
      "b": [["0x0be2711f6984844a352ff96fb9bf83bc04b4d48b3d00573781691128c2a51ca8", "0x132c525a6da94af3c5741df905c7b790fc6435124089ed45a297550150f8eafc"], ["0x2f262d9b5c131dd6eed418ffab966b2d02c8f6efc81072e1b1b3350475c8b1df", "0x0e22156bfa4b2e87e02d5cc51a5b86fce50090ce84deee15d72953975ff3e74b"]],
      "c": ["0x11ec975d8cc5084d7086af20c698efec67581c358890da4b9efdf5590bd56497", "0x1580876c00bc2ee39da0596522ed64797d3940edbd6312d2d1be0488db809019"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000024", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 7
},

{
  "proof": {
      "a": ["0x04a2a6e21be60480803c475ef9495b4f38bc269fcba8f36dd0beb1db96f83771", "0x05b27473d37984466a4ca71c7f0138110fb8a6760afe20a2b2c2502ad986913f"],
      "b": [["0x03606a1ba1351204c5177655271fa757198fa3b29faddd553d07a0bd02e4a273", "0x072178ce7e17e09098c3580c4deb7b7ead45cd41203b48ef890dcf7d24542466"], ["0x249cf527d7ac60d447c74faf505e5014366d7bfb10e85257d6b85d7837f10035", "0x231ce26de8685fb436bac26bc9efd6b24dbd583d7494234ccedbd53cb3fe3dc6"]],
      "c": ["0x021105b1e6d5bdb4ec4d7057a50f2b1493fbf1543e6c024834da24594bc9012c", "0x0fa924b1d6cd00ad0de58d217cacf9838d71c8de0e92815ee0b32b423a8822ff"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000031", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 8
},

{
  "proof": {
      "a": ["0x19551c6f45a11c1ddb849322613fd4ac8ee16e75eed4462405e8408a89e84645", "0x2e56ad17e4b4c4ef29c08df779e52cb28f3a68d413fc675d9762046fe4f5455b"],
      "b": [["0x290d72ee5bc309b988ae4ca5e725e397a264e25aed1a7ba441d8178433e290ef", "0x1a6a38c58d04bdc839b4f08f6a1a6b83488d4e5fb2a87175da000b745d1578a1"], ["0x095462df33eb01868fb509573bc6a2c93b4f437cceb2ded2688621cb2bde51e0", "0x2cecf375af9cbe9d4fd8bc3d4bc3a9a6b566605a2b0021211e598bd0be91d089"]],
      "c": ["0x22e5b809995da6f968160f2b65232dc1be74695f0e0fb070ded3da78e31a5fde", "0x10ec0dca40b90d19096fbdd3c05e90adf60b64fd87af6a485d4c214b76426b76"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000040", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 9
},

{
  "proof": {
      "a": ["0x15eb1362ee372176aa2d271bc17276942a2a4b67e81b16ae416bf3eaac1b7e31", "0x2a9e81b6464e0f51fee6ca3f0acc2b6365110148ce7f918109979cbed7a4ac8a"],
      "b": [["0x0f5fe2479f04f8967c53a707684008c1076a2893248ae9576ecc7e1b95ab4826", "0x1c88e796e92438091c96207ab2f11d5113afcf1c76e482c4fe74a9103ffb767b"], ["0x04580dee551692ec698c73d9cca1de364f451578322dc121bec78bf664441043", "0x137a13a20de25ceeb4079f8b4f5552e101879e54bed8910e9be9a4904dec50a8"]],
      "c": ["0x287ebe5474c6855fb1d7e5e64cad9200b685b4a0d4a387adcaa1937190dbb16c", "0x29edac58c832d5e22ca092f36fb67f842c15b96a081c9813cf7a335326fec23f"]
  },
  "inputs": ["0x0000000000000000000000000000000000000000000000000000000000000051", "0x0000000000000000000000000000000000000000000000000000000000000001"],
  "tokenId": 10
}]

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !TO_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const NFT_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "getApproved",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_myid",
        "type": "bytes32"
      },
      {
        "name": "_result",
        "type": "string"
      }
    ],
    "name": "__callback",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_myid",
        "type": "bytes32"
      },
      {
        "name": "_result",
        "type": "string"
      },
      {
        "name": "_proof",
        "type": "bytes"
      }
    ],
    "name": "__callback",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "tokenByIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "from",
        "type": "address"
      },
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "baseTokenURI",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      },
      {
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`, 0, 10)
    const web3Instance = new web3(
        provider
    )
    // console.log("ACCOUNTS: " + await web3Instance.eth.getAccounts());

    if (NFT_CONTRACT_ADDRESS) {
        const nftContract = new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS);
        const gasPrice = web3.utils.toHex(web3Instance.utils.toWei("20", "gwei"));
        for (var i = 0; i < 10; i++) {
            const result = await nftContract.methods.mint(TO_ADDRESS, i+1).send({ from: OWNER_ADDRESS });
            console.log(result.transactionHash);
        }
        // proofs.forEach( async function(proof) {
        //   let result = await nftContract.methods.mintNFT(TO_ADDRESS, proof.tokenId, proof.proof.a, proof.proof.b, proof.proof.c, proof.inputs).send({from: OWNER_ADDRESS});
        //   console.log(result.transactionHash);
        // });
        // const result = await nftContract.methods.mint(OTHER_ADDRESS, 11).send({ from: OWNER_ADDRESS });
        // const gasEstimate = await nftContract.methods.transferFrom(OTHER_ADDRESS, OWNER_ADDRESS, 11).estimateGas({from: OTHER_ADDRESS});
        // console.log(gasEstimate);
        // console.log(result2);
    }
}

main()