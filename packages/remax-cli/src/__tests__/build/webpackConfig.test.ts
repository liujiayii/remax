import API from '../../API';
import webpackConfig from '../../build/webpackConfig';
import defaultOptions from '../../defaultOptions';
import getConfig from '../../getConfig';

jest.mock('../../getEntries', () => () => ({
  app: 'app.js',
  pages: [],
}));

describe('webpackConfig', () => {
  it('custom webpack options', () => {
    const remaxOptions = getConfig(false);
    const mode = 'production';
    API.registerAdapterPlugins('alipay', remaxOptions);
    const options = webpackConfig(
      {
        ...defaultOptions,
        configWebpack: config => {
          config.mode(mode);
        },
      },
      'alipay'
    );

    expect(options.mode).toBe(mode);
  });
});
