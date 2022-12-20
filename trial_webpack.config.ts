import * as path from 'path';
import { env } from 'process';
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: "none", //NODE_ENV === "development" ? "development" : "production",  //TODO: CORRECT AS PER ENVIRONMENT
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'MyProfile.js'
    }
}

export default config;