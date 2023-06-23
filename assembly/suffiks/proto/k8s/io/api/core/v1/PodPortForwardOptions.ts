// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class PodPortForwardOptions {
  static encode(message: PodPortForwardOptions, writer: Writer): void {
    const ports = message.ports;
    if (ports.length !== 0) {
      for (let i: i32 = 0; i < ports.length; ++i) {
        writer.uint32(8);
        writer.int32(ports[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): PodPortForwardOptions {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PodPortForwardOptions();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ports.push(reader.int32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ports: Array<i32>;

  constructor(ports: Array<i32> = []) {
    this.ports = ports;
  }
}