# 3D Room Designer

## Local Setup

Run `npm i` or `yarn` to install the dependencies.

Run `npm start dev` or `yarn start dev` to start the development server.

## Production Deployment

The first time you make a deployment, you need to install `gh-pages`

```
# To install it globally
sudo npm install -g gh-pages

# Or to install it locally
npm install gh-pages --save-dev
```

Run `npm run deploy` or `yarn run deploy` to build the project for production and upload it to github automatically.

## Important Notes

All assets including models, textures, images and sounds are stored in the `public` folder. The `src` folder contains the source code for the project.

To use an asset you should import it like this:

```javascript
const roughnessMap = useLoader(
  TextureLoader,
  "textures/WoodPlanks/Wood092_1K-JPG_Roughness.jpg"
);
```

Note that we are not using a slash at the beginning of the path. This is because the assets are stored in the `public` folder and the path is relative to it. If you use a slash at the beginning of the path, the asset will not be found when deployed to github pages.