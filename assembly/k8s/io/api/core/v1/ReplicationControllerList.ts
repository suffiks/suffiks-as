// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ListMeta } from "../../../apimachinery/pkg/apis/meta/v1/ListMeta";
import { ReplicationController } from "./ReplicationController";

export class ReplicationControllerList {
  static encode(message: ReplicationControllerList, writer: Writer): void {
    const metadata = message.metadata;
    if (metadata !== null) {
      writer.uint32(10);
      writer.fork();
      ListMeta.encode(metadata, writer);
      writer.ldelim();
    }

    const items = message.items;
    for (let i: i32 = 0; i < items.length; ++i) {
      writer.uint32(18);
      writer.fork();
      ReplicationController.encode(items[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ReplicationControllerList {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ReplicationControllerList();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = ListMeta.decode(reader, reader.uint32());
          break;

        case 2:
          message.items.push(
            ReplicationController.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  metadata: ListMeta | null;
  items: Array<ReplicationController>;

  constructor(
    metadata: ListMeta | null = null,
    items: Array<ReplicationController> = []
  ) {
    this.metadata = metadata;
    this.items = items;
  }
}
