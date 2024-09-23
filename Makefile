install:
	npm ci

braing-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run