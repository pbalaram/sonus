import * as assert from 'assert';
import { describe, it } from 'mocha';

import * as Sonus from '../sonus';

describe('Sonus', () => {
    describe('#trigger()', () => {
        it('should throw when not started', () => {
            const hotwords = ['sonus'];
            const language = "en-US";
            const sonus = Sonus.init({ hotwords, language }, {});

            assert.throws(() => sonus.trigger(1, 'sonus'));
        });
    });
});
