// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class Capabilities {
  static encode(message: Capabilities, writer: Writer): void {
    const add = message.add;
    if (add.length !== 0) {
      for (let i: i32 = 0; i < add.length; ++i) {
        writer.uint32(10);
        writer.string(add[i]);
      }
    }

    const drop = message.drop;
    if (drop.length !== 0) {
      for (let i: i32 = 0; i < drop.length; ++i) {
        writer.uint32(18);
        writer.string(drop[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): Capabilities {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Capabilities();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.add.push(reader.string());
          break;

        case 2:
          message.drop.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  add: Array<string>;
  drop: Array<string>;

  constructor(add: Array<string> = [], drop: Array<string> = []) {
    this.add = add;
    this.drop = drop;
  }
}
