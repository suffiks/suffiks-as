// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";

export class Owner {
  static encode(message: Owner, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.kind);

    writer.uint32(18);
    writer.string(message.name);

    writer.uint32(26);
    writer.string(message.namespace);

    writer.uint32(34);
    writer.string(message.apiVersion);

    writer.uint32(42);
    writer.string(message.uid);

    const labels = message.labels;
    if (labels !== null) {
      const labelsKeys = labels.keys();
      for (let i: i32 = 0; i < labelsKeys.length; ++i) {
        const labelsKey = labelsKeys[i];
        writer.uint32(50);
        writer.fork();
        writer.uint32(10);
        writer.string(labelsKey);
        writer.uint32(18);
        writer.string(labels.get(labelsKey));
        writer.ldelim();
      }
    }

    const annotations = message.annotations;
    if (annotations !== null) {
      const annotationsKeys = annotations.keys();
      for (let i: i32 = 0; i < annotationsKeys.length; ++i) {
        const annotationsKey = annotationsKeys[i];
        writer.uint32(58);
        writer.fork();
        writer.uint32(10);
        writer.string(annotationsKey);
        writer.uint32(18);
        writer.string(annotations.get(annotationsKey));
        writer.ldelim();
      }
    }

    writer.uint32(66);
    writer.string(message.revisionID);
  }

  static decode(reader: Reader, length: i32): Owner {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Owner();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.namespace = reader.string();
          break;

        case 4:
          message.apiVersion = reader.string();
          break;

        case 5:
          message.uid = reader.string();
          break;

        case 6:
          let labelsKey: string = "";
          let labelsValue: string = "";
          let labelsHasKey: bool = false;
          let labelsHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                labelsKey = reader.string();
                labelsHasKey = true;
                break;

              case 2:
                labelsValue = reader.string();
                labelsHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.labels === null) {
              message.labels = new Map<string, string>();
            }
            const labels = message.labels;
            if (labels !== null && labelsHasKey && labelsHasValue) {
              labels.set(labelsKey, labelsValue);
            }
          }
          break;

        case 7:
          let annotationsKey: string = "";
          let annotationsValue: string = "";
          let annotationsHasKey: bool = false;
          let annotationsHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                annotationsKey = reader.string();
                annotationsHasKey = true;
                break;

              case 2:
                annotationsValue = reader.string();
                annotationsHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.annotations === null) {
              message.annotations = new Map<string, string>();
            }
            const annotations = message.annotations;
            if (
              annotations !== null &&
              annotationsHasKey &&
              annotationsHasValue
            ) {
              annotations.set(annotationsKey, annotationsValue);
            }
          }
          break;

        case 8:
          message.revisionID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  kind: string;
  name: string;
  namespace: string;
  apiVersion: string;
  uid: string;
  labels: Map<string, string>;
  annotations: Map<string, string>;
  revisionID: string;

  constructor(
    kind: string = "",
    name: string = "",
    namespace: string = "",
    apiVersion: string = "",
    uid: string = "",
    labels: Map<string, string> = new Map(),
    annotations: Map<string, string> = new Map(),
    revisionID: string = ""
  ) {
    this.kind = kind;
    this.name = name;
    this.namespace = namespace;
    this.apiVersion = apiVersion;
    this.uid = uid;
    this.labels = labels;
    this.annotations = annotations;
    this.revisionID = revisionID;
  }
}