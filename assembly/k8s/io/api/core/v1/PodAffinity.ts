// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { PodAffinityTerm } from "./PodAffinityTerm";
import { WeightedPodAffinityTerm } from "./WeightedPodAffinityTerm";

export class PodAffinity {
  static encode(message: PodAffinity, writer: Writer): void {
    const requiredDuringSchedulingIgnoredDuringExecution =
      message.requiredDuringSchedulingIgnoredDuringExecution;
    for (
      let i: i32 = 0;
      i < requiredDuringSchedulingIgnoredDuringExecution.length;
      ++i
    ) {
      writer.uint32(10);
      writer.fork();
      PodAffinityTerm.encode(
        requiredDuringSchedulingIgnoredDuringExecution[i],
        writer
      );
      writer.ldelim();
    }

    const preferredDuringSchedulingIgnoredDuringExecution =
      message.preferredDuringSchedulingIgnoredDuringExecution;
    for (
      let i: i32 = 0;
      i < preferredDuringSchedulingIgnoredDuringExecution.length;
      ++i
    ) {
      writer.uint32(18);
      writer.fork();
      WeightedPodAffinityTerm.encode(
        preferredDuringSchedulingIgnoredDuringExecution[i],
        writer
      );
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PodAffinity {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PodAffinity();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requiredDuringSchedulingIgnoredDuringExecution.push(
            PodAffinityTerm.decode(reader, reader.uint32())
          );
          break;

        case 2:
          message.preferredDuringSchedulingIgnoredDuringExecution.push(
            WeightedPodAffinityTerm.decode(reader, reader.uint32())
          );
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  requiredDuringSchedulingIgnoredDuringExecution: Array<PodAffinityTerm>;
  preferredDuringSchedulingIgnoredDuringExecution: Array<WeightedPodAffinityTerm>;

  constructor(
    requiredDuringSchedulingIgnoredDuringExecution: Array<PodAffinityTerm> = [],
    preferredDuringSchedulingIgnoredDuringExecution: Array<WeightedPodAffinityTerm> = []
  ) {
    this.requiredDuringSchedulingIgnoredDuringExecution =
      requiredDuringSchedulingIgnoredDuringExecution;
    this.preferredDuringSchedulingIgnoredDuringExecution =
      preferredDuringSchedulingIgnoredDuringExecution;
  }
}