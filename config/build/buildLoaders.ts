import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BuildOptios} from './types/config';

export function buildLoaders({isDev}: BuildOptios): webpack.RuleSetRule[] {
   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   };

   const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
         {
            loader: 'file-loader',
         },
      ],
   };

   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                  localIdentName: isDev
                     ? '[path][name]--[local]'
                     : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
      ],
   };

   return [
      svgLoader,
      fileLoader,
      typescriptLoader,
      styleLoader,
   ];
}
