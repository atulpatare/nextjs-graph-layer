import {JSONLoader, D3ForceLayout, NODE_TYPE} from '../graph-layers';
import { GraphGL } from '../react-graph-layer';

const BaseGraph = ({ data }) => {
    const graph = JSONLoader({
        json: data,
        nodeParser: (node: any) => ({ id: node.id }),
        edgeParser: (edge: any) => ({
            id: edge.id,
            sourceId: edge.sourceId,
            targetId: edge.targetId,
            directed: true,
        }),
    });
    return (
        <GraphGL
            graph={graph}
            layout={new D3ForceLayout()}
            nodeStyle={[
                {
                    type: NODE_TYPE.CIRCLE,
                    radius: 15,
                    fill: 'cyan',
                    opacity: 1,
                },
            ]}
            edgeStyle={{
                stroke: 'gray',
                strokeWidth: 2,
                decorators: [],
            }}
            enableDragging
        />
    );
}

export default BaseGraph;