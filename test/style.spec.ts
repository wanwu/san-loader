import loader from '../dist/index.js';
import { webpackContext } from './util';

describe('.san 文件的产出', () => {

  test('导入 <style> 部分', () => {
    const source = '<style>p {color: black}</style>';
    const options = { resourcePath: '/foo.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('lang=css');
  });

  test('导入 <style> 部分', () => {
    const source = '<style>p {color: black}</style>';
    const options = { resourcePath: '/foo.san', resourceQuery: '?lang=css&san=&type=style&index=0' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toEqual('p {color: black}');
  });

  test('导入 <style module>', () => {
    const source = '<style module>p {color: black}</style>';
    const options = { resourcePath: '/bar.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('module=true');
    expect(ctx.code).toContain('import style0 from "/bar.san?san&type=style&index=0');
  });

  test('导入 <style module>', () => {
    const source = '<style module>p {color: black}</style>';
    const options = { resourcePath: '/bar.san', resourceQuery: '?lang=css&san=&type=style&index=0&module=true' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toEqual('p {color: black}');
  });

  test('导入 <style module src="./s.less">', () => {
    const source = '<style module src="./s.less"></style>';
    const options = { resourcePath: '/foo.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('module=true');
    expect(ctx.code).toContain('import style0 from "./s.less?module=true');
  });
});
