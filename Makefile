default: build

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
initialize:
	npm install
build: ## Builds files
	npm run build
test: ## Run a development environment via webpack
	npm run dev
dev: ## Run a development environment via webpack
	npm run dev