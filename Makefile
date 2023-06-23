.PHONY: build
gen-proto:
	protoc \
		-I ../suffiks/extension//proto/thirdparty \
		-I ../suffiks/extension/proto/ \
		../suffiks/extension/proto/extension.proto \
		--plugin=protoc-gen-as=./node_modules/.bin/as-proto-gen \
		--as_out=./assembly/suffiks/proto
