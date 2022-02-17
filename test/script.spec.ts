import loader from '../dist/index.js';
import { webpackContext } from './util';

describe('.san 文件的产出', () => {

  test('导入 <script> 部分', () => {
    const source = '<script>console.log(1)</script>';
    const options = { resourcePath: '/foo.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('import script from "/foo.san?san&type=script&');
  });

  test('导入 <script> 部分', () => {
    const source = '<script>console.log(1)</script>';
    const options = { resourcePath: '/foo.san', resourceQuery: '?lang=js&san=&type=script&index=0' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('console.log(1)');
  });

  test('导入 <script lang="ts"> 部分', () => {
    const source = '<script lang="ts">console.log(1)</script>';
    const options = { resourcePath: '/bar.san' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('lang=ts');
    expect(ctx.code).toContain('import script from "/bar.san?san&type=script&');
  });

  test('导入 <script lang="ts"> 部分', () => {
    const source = '<script lang="ts">console.log(1)</script>';
    const options = { resourcePath: '/bar.san', resourceQuery: '?lang=ts&san=&type=script&index=0' };
    let ctx = webpackContext(options).runLoader(loader, source);
    expect(ctx.code).toContain('console.log(1)');
  });
});
