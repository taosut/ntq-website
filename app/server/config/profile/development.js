'use strict';

exports._ = '/config/profile/development';
exports._factory = function() {
	return {
		port: 4000,
		db: 'mongodb://localhost/ntq-website',
		staticAsset: '//ntq.local/o'
	};
};
