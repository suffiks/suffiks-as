// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class AWSElasticBlockStoreVolumeSource {
  static encode(
    message: AWSElasticBlockStoreVolumeSource,
    writer: Writer
  ): void {
    writer.uint32(10);
    writer.string(message.volumeID);

    writer.uint32(18);
    writer.string(message.fsType);

    writer.uint32(24);
    writer.int32(message.partition);

    writer.uint32(32);
    writer.bool(message.readOnly);
  }

  static decode(reader: Reader, length: i32): AWSElasticBlockStoreVolumeSource {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AWSElasticBlockStoreVolumeSource();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volumeID = reader.string();
          break;

        case 2:
          message.fsType = reader.string();
          break;

        case 3:
          message.partition = reader.int32();
          break;

        case 4:
          message.readOnly = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  volumeID: string;
  fsType: string;
  partition: i32;
  readOnly: bool;

  constructor(
    volumeID: string = "",
    fsType: string = "",
    partition: i32 = 0,
    readOnly: bool = false
  ) {
    this.volumeID = volumeID;
    this.fsType = fsType;
    this.partition = partition;
    this.readOnly = readOnly;
  }
}