var ERC721MintableComplete = artifacts.require('TokenyHouses');
const truffleAssert = require('truffle-assertions');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1);
            await this.contract.mint(account_two, 2);
        })

        it('should return total supply', async function () {
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 2, "Supply does not match expected");
        })

        it('should get token balance', async function () {
            let accountOneBalance = await this.contract.balanceOf(account_one);
            let accountTwoBalance = await this.contract.balanceOf(account_two);
            assert.equal(accountOneBalance, 1, "Account one balance does not match expected");
            assert.equal(accountTwoBalance, 1, "Account two balance does not match expected");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenOneURI = await this.contract.tokenURI(1);
            let tokenTwoURI = await this.contract.tokenURI(2);
            assert.equal(tokenOneURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Token one URI does not match expected");
            assert.equal(tokenTwoURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "Token two URI does not match expected");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_two, 1);

            let accountOneBalance = await this.contract.balanceOf(account_one);
            let accountTwoBalance = await this.contract.balanceOf(account_two);
            assert.equal(accountOneBalance, 0, "Account one balance does not match expected");
            assert.equal(accountTwoBalance, 2, "Account two balance does not match expected");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            await truffleAssert.reverts(this.contract.mint(account_two, 1, {from: account_two}), "Caller must be contract owner");
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.owner();
            assert.equal(owner, account_one, "Owner does not match expected");
        })

    });
})