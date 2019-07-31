/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable no-undef */
// eslint-disable-next-line strict
const path = require(`path`);
const fs = require(`fs`);
const {
  CleanWebpackPlugin
} = require(`clean-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const TerserPlugin = require(`terser-webpack-plugin`);
const ImageminWebpWebpackPlugin = require(`imagemin-webp-webpack-plugin`);
const ImageminPlugin = require(`imagemin-webpack-plugin`).default;

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split(`.`);
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
      minify: {
        collapseWhitespace: true
      }
    });
  });
}

const htmlPlugins = generateHtmlPlugins(`./src/html/views`);

const config = {
  entry: [
    `./src/js/index.js`,
    `./src/sass/style.scss`
  ],
  output: {
    filename: `./js/bundle.js`
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        extractComments: true
      })
    ]
  },

  module: {
    rules: [{ // js
      test: /\.js$/,
      exclude: `/node-modules/`,
      include: path.resolve(__dirname, `src/js`),
      use: {
        loader: `babel-loader`,
        options: {
          presets: [`@babel/preset-env`]
        }
      }
    }, { // sass|scss
      test: /\.(scss|sass)$/,
      include: path.resolve(__dirname, `src/sass`),
      use: [
        MiniCssExtractPlugin.loader,
        { // css-loader
          loader: `css-loader`,
          options: {
            sourceMap: true,
            url: false
          }
        },
        { // postcss-loader
          loader: `postcss-loader`,
          options: {
            ident: `postcss`,
            sourceMap: true,
            plugins: () => [
              require(`autoprefixer`),
              require(`css-mqpacker`),
              require(`cssnano`)({
                preset: [
                  `default`, {
                    discardComments: {
                      removeAll: true,
                    }
                  }
                ]
              })
            ]
          }
        },
        `csscomb-loader`,
        { // sass-loader
          loader: `sass-loader`,
          options: {
            sourceMap: true
          }
        }
      ]
    }, { // css
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        { // css-loader
          loader: `css-loader`,
          options: {
            sourceMap: true,
            url: false
          }
        },
        { // postcss-loader
          loader: `postcss-loader`,
          options: {
            ident: `postcss`,
            sourceMap: true,
            plugins: () => [
              require(`autoprefixer`),
              require(`css-mqpacker`),
              require(`cssnano`)({
                preset: [
                  `default`, {
                    discardComments: {
                      removeAll: true,
                    }
                  }
                ]
              })
            ]
          }
        },
        `csscomb-loader`
      ]
    }, { // html
      test: /\.html$/,
      include: path.resolve(__dirname, `src/html/includes`),
      use: [`raw-loader`]
    }]
  },

  devServer: {
    overlay: true
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `./css/style.bundle.css`
    }),
    new CopyWebpackPlugin([{
        from: `./src/fonts`,
        to: `./fonts`
      },
      {
        from: `./src/img`,
        to: `./img`
      },
      {
        from: `./src/favicon`,
        to: `./`
      }
    ]),
    new ImageminWebpWebpackPlugin({
      config: [{
        test: /\.(jpe?g|png)/,
        options: {
          quality: 90
        },
        detailedLogs: false,
        strict: true
      }],
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== `production`, // Disable during development
      test: /\.(jpe?g|png|gif|svg)$/i,
      jpegtran: {
        progressive: true
      }
    })
  ].concat(htmlPlugins)
};

module.exports = (env, options) => {
  let development = options.mode === `development` ? true : false;

  config.devtool = development ? `env-sourcemap` : false;
  if (!development) {
    config.plugins.push(new CleanWebpackPlugin());
  }

  return config;
}
