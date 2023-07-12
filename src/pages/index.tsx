import { Inter } from 'next/font/google'
import {randomGraphGenerator} from "../utils/random-graph-gen";
import dynamic from 'next/dynamic';

const BaseGraph = dynamic(() => import("../components/base-graph/base-graph"), {
  ssr: false,
});
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const graphData = randomGraphGenerator(500, 500, 'My awesome graph');
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <BaseGraph 
          data={graphData}
        />
      </div>
    </main>
  )
}
