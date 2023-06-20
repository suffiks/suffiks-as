// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ContainerStateWaiting } from "./ContainerStateWaiting";
import { ContainerStateRunning } from "./ContainerStateRunning";
import { ContainerStateTerminated } from "./ContainerStateTerminated";

export class ContainerState {
  static encode(message: ContainerState, writer: Writer): void {
    const waiting = message.waiting;
    if (waiting !== null) {
      writer.uint32(10);
      writer.fork();
      ContainerStateWaiting.encode(waiting, writer);
      writer.ldelim();
    }

    const running = message.running;
    if (running !== null) {
      writer.uint32(18);
      writer.fork();
      ContainerStateRunning.encode(running, writer);
      writer.ldelim();
    }

    const terminated = message.terminated;
    if (terminated !== null) {
      writer.uint32(26);
      writer.fork();
      ContainerStateTerminated.encode(terminated, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ContainerState {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ContainerState();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.waiting = ContainerStateWaiting.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.running = ContainerStateRunning.decode(
            reader,
            reader.uint32()
          );
          break;

        case 3:
          message.terminated = ContainerStateTerminated.decode(
            reader,
            reader.uint32()
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  waiting: ContainerStateWaiting | null;
  running: ContainerStateRunning | null;
  terminated: ContainerStateTerminated | null;

  constructor(
    waiting: ContainerStateWaiting | null = null,
    running: ContainerStateRunning | null = null,
    terminated: ContainerStateTerminated | null = null
  ) {
    this.waiting = waiting;
    this.running = running;
    this.terminated = terminated;
  }
}