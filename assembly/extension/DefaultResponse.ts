// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class DefaultResponse {
  static encode(message: DefaultResponse, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.spec);
  }

  static decode(reader: Reader, length: i32): DefaultResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DefaultResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spec = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  spec: Uint8Array;

  constructor(spec: Uint8Array = new Uint8Array(0)) {
    this.spec = spec;
  }
}
