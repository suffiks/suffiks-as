// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ObjectMeta } from "../../../apimachinery/pkg/apis/meta/v1/ObjectMeta";
import { PodSpec } from "./PodSpec";

export class PodTemplateSpec {
  static encode(message: PodTemplateSpec, writer: Writer): void {
    const metadata = message.metadata;
    if (metadata !== null) {
      writer.uint32(10);
      writer.fork();
      ObjectMeta.encode(metadata, writer);
      writer.ldelim();
    }

    const spec = message.spec;
    if (spec !== null) {
      writer.uint32(18);
      writer.fork();
      PodSpec.encode(spec, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PodTemplateSpec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PodTemplateSpec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = ObjectMeta.decode(reader, reader.uint32());
          break;

        case 2:
          message.spec = PodSpec.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  metadata: ObjectMeta | null;
  spec: PodSpec | null;

  constructor(metadata: ObjectMeta | null = null, spec: PodSpec | null = null) {
    this.metadata = metadata;
    this.spec = spec;
  }
}
