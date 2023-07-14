import {randomGraphGenerator} from "../utils/random-graph-gen";
import dynamic from 'next/dynamic';

const BaseGraph = dynamic(() => import("../components/base-graph/base-graph"), {
  ssr: false,
});

export default function Home() {
  const graphData = randomGraphGenerator(500, 1000, "My Graph");
  return (
    <main>
      <div>
        <BaseGraph 
          data={graphData}
        />
      </div>
    </main>
  )
}
