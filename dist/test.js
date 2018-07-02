'use strict';

var cmlog = require('./index');

cmlog.debug('export something');
cmlog.warn('Something is going to happen soon');
cmlog.success('Build succeeed in 10 seconds');
cmlog.info('Some extra info is here');
cmlog.error(new Error('Foo'));
