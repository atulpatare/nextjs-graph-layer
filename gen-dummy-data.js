import {randomGraphGenerator} from "./src/utils/random-graph-gen.js";
import fs from "fs";

const graphData = randomGraphGenerator(5000, 10000, 'My awesome graph');
fs.writeFile("./src/assets/dummy-data.json", JSON.stringify(graphData), (err) => {
  if(err) {
    console.log(err);
  }
});

