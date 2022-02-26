import loader from '../dist/index.js';
import { webpackContext } from './util';

test('整体框架', () => {
  const source = `
            <template>
                <span class="{{$style.red}}">Author: harttle</span>
            </template>
            <style module>.red { color: red }</style>
            <script>
                export default class CompComponent extends Component {
                    attached() { console.log('attached') }
                }
            </script>
        `;
  const options = { resourcePath: '/index.san' };
  let ctx = webpackContext(options).runLoader(loader, source);
  expect(ctx.code).toContain('import normalize from');
  expect(ctx.code).toContain('import template from');
  expect(ctx.code).toContain('import script from');
  expect(ctx.code).toContain('import style0 from');
  expect(ctx.code).toContain(
    'export default normalize(script, template, $style);'
  );
});
