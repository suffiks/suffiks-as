// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class RootPaths {
  static encode(message: RootPaths, writer: Writer): void {
    const paths = message.paths;
    if (paths.length !== 0) {
      for (let i: i32 = 0; i < paths.length; ++i) {
        writer.uint32(10);
        writer.string(paths[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): RootPaths {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RootPaths();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  paths: Array<string>;

  constructor(paths: Array<string> = []) {
    this.paths = paths;
  }
}
