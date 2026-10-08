import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.dirname(fileURLToPath(import.meta.url));
export default {
  outputFileTracingRoot: root,
  async redirects() {
    return [
      {source:'/blog/tirana-airport-arrivals-guide',destination:'/#airport-pickup',permanent:true},
      {source:'/blog/things-to-do-in-sarande',destination:'/blog/tirana-airport-to-sarande-guide',permanent:true}
    ];
  }
};
