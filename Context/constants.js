import crowdFunding from "./CrowdFunding.json";

//Crowd Funding Marketplace
export const CrowdFundingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const CrowdFundingABI = crowdFunding.abi;

const networks = {
    localhost: {
        chainid: `0x${Number(1337).toString(16)}`,
        chainName: "localhost",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
        },
        rpcUrls: ["http://127.0.0.1:8545/"],
        blockExplorerUrls: ["https://etherscan.io"],
    },
};