// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class ContainerStateWaiting {
  static encode(message: ContainerStateWaiting, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.reason);

    writer.uint32(18);
    writer.string(message.message);
  }

  static decode(reader: Reader, length: i32): ContainerStateWaiting {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ContainerStateWaiting();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = reader.string();
          break;

        case 2:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  reason: string;
  message: string;

  constructor(reason: string = "", message: string = "") {
    this.reason = reason;
    this.message = message;
  }
}