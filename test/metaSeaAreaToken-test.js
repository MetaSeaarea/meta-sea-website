const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MetaSeaAreaToken contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const MetaSeaAreaToken = await ethers.getContractFactory("MetaSeaAreaToken");

    const metaSeaAreaToken = await MetaSeaAreaToken.deploy();

    const ownerBalance = await metaSeaAreaToken.balanceOf(owner.address);
    expect(await metaSeaAreaToken.totalSupply()).to.equal(ownerBalance);
  });
});
