const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");
// compile once and reuse compiled filed: 130-132
// extra for couple added extra feature

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");
// 2 output, 1 campaign factory and 1 Campaign
const output = solc.compile(source, 1).contracts;

// check if exist else create dir;
fs.ensureDirSync(buildPath);

// for loop iterate over keys
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.substr(1) + ".json"),
    output[contract]
  );
}
