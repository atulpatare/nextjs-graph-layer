import { JSONLoader, D3ForceLayout, NODE_TYPE, Graph } from '../../lib/graph-layers';
import { GraphGL } from '../../lib/react-graph-layer';

interface Node {
    id: number;
}

interface Edge {
    id: number;
    sourceId: number;
    targetId: number;
}

interface BaseGraphProps {
    data: {
        name: string;
        nodes: Node[],
        edges: Edge[];
    }
}

const BaseGraph = (props: BaseGraphProps) => {
    const graph = JSONLoader({
        json: props.data,
        nodeParser: (node: Node) => ({ id: node.id }),
        edgeParser: (edge: Edge) => ({
            id: edge.id,
            sourceId: edge.sourceId,
            targetId: edge.targetId,
            directed: true,
        }),
    }) || new Graph();
    return (
        <GraphGL
            graph={graph}
            layout={new D3ForceLayout() as any}
            nodeStyle={[{
                type: NODE_TYPE.PATH_ROUNDED_RECTANGLE,
                width: 70,
                height: 50,
                cornerRadius: 10,
                fill: 'cyan',
            }]}
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
