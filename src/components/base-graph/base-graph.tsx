import {JSONLoader, D3ForceLayout, NODE_TYPE} from '../../lib/graph-layers';
import { GraphGL } from '../../lib/react-graph-layer';

const BaseGraph = (props: any) => {
    const graph = JSONLoader({
        json: props.data,
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
            graph={graph as any}
            layout={new D3ForceLayout() as any}
            nodeStyle={[
                {
                    type: NODE_TYPE.PATH_ROUNDED_RECTANGLE,
                    width: 70,
                    height: 50,
                    cornerRadius: 10,
                    fill: 'cyan',
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
