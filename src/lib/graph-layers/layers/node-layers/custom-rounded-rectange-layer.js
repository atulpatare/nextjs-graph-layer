import { CompositeLayer } from '@deck.gl/core';
import { PolygonLayer } from '@deck.gl/layers';

const generateRoundedRectangle = (node, { getWidth, getHeight, getPosition, getCornerRadius }) => {
  const pos = getPosition(node);
  const width = typeof getWidth === 'function' ? getWidth(node) : getWidth;
  const height = typeof getWidth === 'function' ? getHeight(node) : getHeight;
  const cornerRadius = typeof getCornerRadius === 'function' ? getCornerRadius(node) : getCornerRadius;
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const minX = pos[0] - halfWidth;
  const minY = pos[1] - halfHeight;
  const maxX = pos[0] + halfWidth;
  const maxY = pos[1] + halfHeight;
  return [
    [minX + cornerRadius, minY],
    [maxX - cornerRadius, minY],
    [maxX, minY + cornerRadius],
    [maxX, maxY - cornerRadius],
    [maxX - cornerRadius, maxY],
    [minX + cornerRadius, maxY],
    [minX, maxY - cornerRadius],
    [minX, minY + cornerRadius],
  ];
};

export default class CustomRoundedRectangleLayer extends CompositeLayer {
  static layerName = 'RoundedRectangleLayer';

  renderLayers() {
    const { data, getPosition, stylesheet, positionUpdateTrigger = 0 } = this.props;

    const getFillColor = stylesheet.getDeckGLAccessor('getFillColor');
    const getLineWidth = stylesheet.getDeckGLAccessor('getLineWidth');

    return [
      new PolygonLayer(
        this.getSubLayerProps({
          id: '__polygon-layer',
          data,
          getPolygon: (node) =>
            generateRoundedRectangle(node, {
              getPosition,
              getWidth: stylesheet.getDeckGLAccessor('getWidth'),
              getHeight: stylesheet.getDeckGLAccessor('getHeight'),
              getCornerRadius: stylesheet.getDeckGLAccessor('getCornerRadius'),
            }),
          filled: Boolean(getFillColor),
          stroked: Boolean(getLineWidth),
          ...stylesheet.getDeckGLAccessors(),
          updateTriggers: {
            getPolygon: [
              positionUpdateTrigger,
              stylesheet.getDeckGLAccessorUpdateTrigger('getWidth'),
              stylesheet.getDeckGLAccessorUpdateTrigger('getHeight'),
              stylesheet.getDeckGLAccessorUpdateTrigger('getCornerRadius'),
            ],
            ...stylesheet.getDeckGLUpdateTriggers(),
          },
        })
      ),
    ];
  }
}
