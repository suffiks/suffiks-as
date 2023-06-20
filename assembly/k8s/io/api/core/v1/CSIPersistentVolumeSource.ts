// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { SecretReference } from "./SecretReference";

export class CSIPersistentVolumeSource {
  static encode(message: CSIPersistentVolumeSource, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.driver);

    writer.uint32(18);
    writer.string(message.volumeHandle);

    writer.uint32(24);
    writer.bool(message.readOnly);

    writer.uint32(34);
    writer.string(message.fsType);

    const volumeAttributes = message.volumeAttributes;
    if (volumeAttributes !== null) {
      const volumeAttributesKeys = volumeAttributes.keys();
      for (let i: i32 = 0; i < volumeAttributesKeys.length; ++i) {
        const volumeAttributesKey = volumeAttributesKeys[i];
        writer.uint32(42);
        writer.fork();
        writer.uint32(10);
        writer.string(volumeAttributesKey);
        writer.uint32(18);
        writer.string(volumeAttributes.get(volumeAttributesKey));
        writer.ldelim();
      }
    }

    const controllerPublishSecretRef = message.controllerPublishSecretRef;
    if (controllerPublishSecretRef !== null) {
      writer.uint32(50);
      writer.fork();
      SecretReference.encode(controllerPublishSecretRef, writer);
      writer.ldelim();
    }

    const nodeStageSecretRef = message.nodeStageSecretRef;
    if (nodeStageSecretRef !== null) {
      writer.uint32(58);
      writer.fork();
      SecretReference.encode(nodeStageSecretRef, writer);
      writer.ldelim();
    }

    const nodePublishSecretRef = message.nodePublishSecretRef;
    if (nodePublishSecretRef !== null) {
      writer.uint32(66);
      writer.fork();
      SecretReference.encode(nodePublishSecretRef, writer);
      writer.ldelim();
    }

    const controllerExpandSecretRef = message.controllerExpandSecretRef;
    if (controllerExpandSecretRef !== null) {
      writer.uint32(74);
      writer.fork();
      SecretReference.encode(controllerExpandSecretRef, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): CSIPersistentVolumeSource {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new CSIPersistentVolumeSource();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.driver = reader.string();
          break;

        case 2:
          message.volumeHandle = reader.string();
          break;

        case 3:
          message.readOnly = reader.bool();
          break;

        case 4:
          message.fsType = reader.string();
          break;

        case 5:
          let volumeAttributesKey: string = "";
          let volumeAttributesValue: string = "";
          let volumeAttributesHasKey: bool = false;
          let volumeAttributesHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                volumeAttributesKey = reader.string();
                volumeAttributesHasKey = true;
                break;

              case 2:
                volumeAttributesValue = reader.string();
                volumeAttributesHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.volumeAttributes === null) {
              message.volumeAttributes = new Map<string, string>();
            }
            const volumeAttributes = message.volumeAttributes;
            if (
              volumeAttributes !== null &&
              volumeAttributesHasKey &&
              volumeAttributesHasValue
            ) {
              volumeAttributes.set(volumeAttributesKey, volumeAttributesValue);
            }
          }
          break;

        case 6:
          message.controllerPublishSecretRef = SecretReference.decode(
            reader,
            reader.uint32()
          );
          break;

        case 7:
          message.nodeStageSecretRef = SecretReference.decode(
            reader,
            reader.uint32()
          );
          break;

        case 8:
          message.nodePublishSecretRef = SecretReference.decode(
            reader,
            reader.uint32()
          );
          break;

        case 9:
          message.controllerExpandSecretRef = SecretReference.decode(
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

  driver: string;
  volumeHandle: string;
  readOnly: bool;
  fsType: string;
  volumeAttributes: Map<string, string>;
  controllerPublishSecretRef: SecretReference | null;
  nodeStageSecretRef: SecretReference | null;
  nodePublishSecretRef: SecretReference | null;
  controllerExpandSecretRef: SecretReference | null;

  constructor(
    driver: string = "",
    volumeHandle: string = "",
    readOnly: bool = false,
    fsType: string = "",
    volumeAttributes: Map<string, string> = new Map(),
    controllerPublishSecretRef: SecretReference | null = null,
    nodeStageSecretRef: SecretReference | null = null,
    nodePublishSecretRef: SecretReference | null = null,
    controllerExpandSecretRef: SecretReference | null = null
  ) {
    this.driver = driver;
    this.volumeHandle = volumeHandle;
    this.readOnly = readOnly;
    this.fsType = fsType;
    this.volumeAttributes = volumeAttributes;
    this.controllerPublishSecretRef = controllerPublishSecretRef;
    this.nodeStageSecretRef = nodeStageSecretRef;
    this.nodePublishSecretRef = nodePublishSecretRef;
    this.controllerExpandSecretRef = controllerExpandSecretRef;
  }
}
