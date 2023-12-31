import isEqual from 'lodash.isequal';
import {EDGE_TYPE} from './constants';

// All the layout classes are extended from this base layout class.
export default class BaseLayout {
  /**
   * Constructor of BaseLayout
   * @param  {Object} options extra configuration options of the layout
   */
  constructor(options) {
    // the name of the layout
    this._name = 'BaseLayout';
    // extra configuration options of the layout
    this._options = {};
    // registered callbacks
    this._callbacks = {
      onLayoutChange: () => {},
      onLayoutDone: () => {},
      onLayoutError: () => {}
    };
  }

  /**
   * Register event callbacks ({onLayoutChange, onLayoutDone, onLayoutError})
   * @param  {Object} callbacks
   *         {Function} callbacks.onLayoutChange:
   *           a callback will be triggered on every layout calculation iteration
   *         {Function} callbacks.onLayoutDone:
   *           a callback will be triggered when the layout calculation is done
   *         {Function} callbacks.onLayoutError:
   *           a callback will be triggered when the layout calculation goes wrong
   */
  registerCallbacks(callbacks) {
    this._callbacks = callbacks;
  }

  /**
   * unregister all event callbacks.
   */
  unregisterCallbacks() {
    this._callbacks = {};
  }

  /**
   * Check the equality of two layouts
   * @param  {Object} layout The layout to be compared.
   * @return {Bool}   True if the layout is the same as itself.
   */
  equals(layout) {
    if (!layout || !(layout instanceof BaseLayout)) {
      return false;
    }
    return this._name === layout._name && isEqual(this._options, layout._options);
  }

  /** virtual functions: will be implemented in the child class */

  // first time to pass the graph data into this layout
  initializeGraph(graph) {}
  // update the existing graph
  updateGraph(grpah) {}
  // start the layout calculation
  start() {}
  // resume the layout calculation
  resume() {}
  // stop the layout calculation
  stop() {}
  // access the position of the node in the layout
  getNodePosition(node) {
    return [0, 0];
  }
  // access the layout information of the edge
  getEdgePosition(edge) {
    return {
      type: EDGE_TYPE.LINE,
      sourcePosition: [0, 0],
      targetPosition: [0, 0],
      controlPoints: []
    };
  }

  /**
   * Pin the node to a designated position, and the node won't move anymore
   * @param  {Object} node Node to be locked
   * @param  {Number} x    x coordinate
   * @param  {Number} y    y coordinate
   */
  lockNodePosition(node, x, y) {}

  /**
   * Unlock the node, the node will be able to move freely.
   * @param  {Object} node Node to be unlocked
   */
  unlockNodePosition(node) {}
}
