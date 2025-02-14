import { SFCDescriptor } from 'san-sfc-compiler';

import { Options } from '..';
import { attrsToQuery } from '../utils';

export default (
  descriptor: SFCDescriptor,
  scopeId: string,
  options: Options
) => {
  const script = descriptor.script;
  let scriptImport = `var script = {};`;

  if (script) {
    const src = script.src || descriptor.filename;
    const idQuery = `&id=${scopeId}`;
    const attrsQuery = attrsToQuery(script.attrs, 'js');
    const srcQuery = script.src ? `&src` : ``;
    const query = `?san&type=script${idQuery}${srcQuery}${attrsQuery}`;
    const scriptRequest = JSON.stringify(src + query);
    scriptImport =
      `import script from ${scriptRequest};\n` +
      `export * from ${scriptRequest};`;
  }

  return scriptImport;
};
