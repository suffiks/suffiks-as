// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class GRPCAction {
  static encode(message: GRPCAction, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.port);

    writer.uint32(18);
    writer.string(message.service);
  }

  static decode(reader: Reader, length: i32): GRPCAction {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new GRPCAction();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = reader.int32();
          break;

        case 2:
          message.service = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  port: i32;
  service: string;

  constructor(port: i32 = 0, service: string = "") {
    this.port = port;
    this.service = service;
  }
}
