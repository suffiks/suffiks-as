// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class PersistentVolumeClaimVolumeSource {
  static encode(
    message: PersistentVolumeClaimVolumeSource,
    writer: Writer
  ): void {
    writer.uint32(10);
    writer.string(message.claimName);

    writer.uint32(16);
    writer.bool(message.readOnly);
  }

  static decode(
    reader: Reader,
    length: i32
  ): PersistentVolumeClaimVolumeSource {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PersistentVolumeClaimVolumeSource();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.claimName = reader.string();
          break;

        case 2:
          message.readOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  claimName: string;
  readOnly: bool;

  constructor(claimName: string = "", readOnly: bool = false) {
    this.claimName = claimName;
    this.readOnly = readOnly;
  }
}
