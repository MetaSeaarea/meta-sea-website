const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MetaSeaCoin", function () {
  it("Contract minted tokens should equal to 1000000", async function () {
    const MetaSeaCoin = await ethers.getContractFactory("MetaSeaCoin");
    const metaSeaCoin = await MetaSeaCoin.deploy();
    await metaSeaCoin.deployed();

    const metaSeaCoinMintTx = await metaSeaCoin.mint(metaSeaCoin.address,10000000000000);

    // wait until the transaction is mined
    await metaSeaCoinMintTx.wait();

    expect(await metaSeaCoin.balanceOf(metaSeaCoin.address)).to.equal(10000000000000);
  });
});
