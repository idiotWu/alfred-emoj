'use strict';
const alfy = require('alfy');
const db = require('./emoji.json');

const map = {};
const keywordMatched = [];
const maxMatchedAmount = 5;

db.forEach(item => {
	const key = item.key = item.aliases[0];

	map[item.emoji] = item;

	if (keywordMatched.length < maxMatchedAmount
			&& key.indexOf(alfy.input) === 0
	) {
		keywordMatched.push(item.emoji);
	}
});

alfy.fetch('emoji.getdango.com/api/emoji', {
	query: {
		q: alfy.input
	}
}).then(data => {
	let all = '';

	keywordMatched.forEach((name) => {
		data.results.some((item, idx) => {
			if (item.text === name) {
				data.results.splice(idx, 1);
				return true;
			}
		});

		data.results.unshift({ text: name });
	});

	const items = data.results
		.map(x => {
			const emoji = x.text;
			const info = map[emoji] || {};

			all += emoji;

			return {
				title: `${emoji} ${info.key || ''}`,
				subtitle: info.description,
				arg: emoji,
				icon: {
					path: ' ' // Hide icon
				}
			};
		});

	items.push({
		title: all,
		arg: all,
		icon: {
			path: ' '
		}
	});

	alfy.output(items);
});
