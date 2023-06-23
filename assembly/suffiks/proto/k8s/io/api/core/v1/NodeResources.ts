// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { Quantity } from "../../../apimachinery/pkg/api/resource/Quantity";

export class NodeResources {
  static encode(message: NodeResources, writer: Writer): void {
    const capacity = message.capacity;
    if (capacity !== null) {
      const capacityKeys = capacity.keys();
      for (let i: i32 = 0; i < capacityKeys.length; ++i) {
        const capacityKey = capacityKeys[i];
        writer.uint32(10);
        writer.fork();
        writer.uint32(10);
        writer.string(capacityKey);
        writer.uint32(18);
        writer.fork();
        Quantity.encode(capacity.get(capacityKey), writer);
        writer.ldelim();
        writer.ldelim();
      }
    }
  }

  static decode(reader: Reader, length: i32): NodeResources {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new NodeResources();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          let capacityKey: string = "";
          let capacityValue: Quantity | null = null;
          let capacityHasKey: bool = false;
          let capacityHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                capacityKey = reader.string();
                capacityHasKey = true;
                break;

              case 2:
                capacityValue = Quantity.decode(reader, reader.uint32());
                capacityHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.capacity === null) {
              message.capacity = new Map<string, Quantity>();
            }
            const capacity = message.capacity;
            if (
              capacity !== null &&
              capacityHasKey &&
              capacityHasValue &&
              capacityValue !== null
            ) {
              capacity.set(capacityKey, capacityValue);
            }
          }
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  capacity: Map<string, Quantity>;

  constructor(capacity: Map<string, Quantity> = new Map()) {
    this.capacity = capacity;
  }
}