import loader from '../dist/index.js';
import { webpackContext } from './util';

describe('.san 文件的产出', () => {

  test('导入 <template> 部分', () => {
    const source = '<template><span>Author: harttle</span></template>';
    const options = { resourcePath: '/foo.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('import template from "/foo.san?san&type=template');
  });

  test('导入 <template> 部分', () => {
    const source = '<template><span>Author: harttle</span></template>';
    const options = { resourcePath: '/foo.san', resourceQuery: '?san=&type=template' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toEqual('<span>Author: harttle</span>');
  });

  test('导入 <template lang="pug"> 部分', () => {
    const source = '<template lang="pug"><span>Author: harttle</span></template>';
    const options = { resourcePath: '/bar.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('lang=pug');
    expect(ctx.code).toContain('import template from "/bar.san?san&type=template');
  });

  test('导入 <template lang="pug"> 部分', () => {
    const source = '<template lang="pug"><span>Author: harttle</span></template>';
    const options = { resourcePath: '/bar.san', resourceQuery: '?san=&type=template&lang=pug' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toEqual('<span>Author: harttle</span>');
  });
});
