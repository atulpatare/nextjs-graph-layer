This repo demonstrate the use of `deck.gl graph layers` to display a custom layer of rounded rectangle.

### Custom Layers

- [PathRoundedRectangleLayer](https://github.com/atulpatare/nextjs-graph-layer/blob/main/src/lib/graph-layers/layers/node-layers/path-rounded-rectange-layer.js) 
  - Inherits the `CompositeLayer` to build a polygon with rounded corners using the `PolygonLayer`
  - Makes use of `GraphLayer` from deck.gl community repo
  - References:
    - [deck.gl docs](https://deck.gl/docs)
    - [deck.gl community repo](https://github.com/visgl/deck.gl-community)

### How it looks?

![Screenshot from 2023-07-14 10-30-28](https://github.com/atulpatare/nextjs-graph-layer/assets/91194233/06c0e6ea-017a-44ce-9fab-bea5deb6ca4c)


### Getting Started

- Node version
  
  ```
  node version 18
  ```

- Clone the repo
  
  ```
  git clone git@github.com:atulpatare/nextjs-graph-layer.git
  ```

- Get the dependencies

  ```
  npm install
  ```

- Run
  
  ```
  npm run dev
  ```
