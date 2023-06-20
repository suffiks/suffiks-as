.PHONY: build
gen-proto:
	protoc \
		-I proto/thirdparty \
		-I proto/ \
		./proto/extension.proto \
		--plugin=protoc-gen-as=./node_modules/.bin/as-proto-gen \
		--as_out=./assembly
