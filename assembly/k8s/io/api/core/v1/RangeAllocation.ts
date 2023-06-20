// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ObjectMeta } from "../../../apimachinery/pkg/apis/meta/v1/ObjectMeta";

export class RangeAllocation {
  static encode(message: RangeAllocation, writer: Writer): void {
    const metadata = message.metadata;
    if (metadata !== null) {
      writer.uint32(10);
      writer.fork();
      ObjectMeta.encode(metadata, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.range);

    writer.uint32(26);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): RangeAllocation {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new RangeAllocation();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = ObjectMeta.decode(reader, reader.uint32());
          break;

        case 2:
          message.range = reader.string();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  metadata: ObjectMeta | null;
  range: string;
  data: Uint8Array;

  constructor(
    metadata: ObjectMeta | null = null,
    range: string = "",
    data: Uint8Array = new Uint8Array(0)
  ) {
    this.metadata = metadata;
    this.range = range;
    this.data = data;
  }
}
