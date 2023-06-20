// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ObjectFieldSelector } from "./ObjectFieldSelector";
import { ResourceFieldSelector } from "./ResourceFieldSelector";
import { ConfigMapKeySelector } from "./ConfigMapKeySelector";
import { SecretKeySelector } from "./SecretKeySelector";

export class EnvVarSource {
  static encode(message: EnvVarSource, writer: Writer): void {
    const fieldRef = message.fieldRef;
    if (fieldRef !== null) {
      writer.uint32(10);
      writer.fork();
      ObjectFieldSelector.encode(fieldRef, writer);
      writer.ldelim();
    }

    const resourceFieldRef = message.resourceFieldRef;
    if (resourceFieldRef !== null) {
      writer.uint32(18);
      writer.fork();
      ResourceFieldSelector.encode(resourceFieldRef, writer);
      writer.ldelim();
    }

    const configMapKeyRef = message.configMapKeyRef;
    if (configMapKeyRef !== null) {
      writer.uint32(26);
      writer.fork();
      ConfigMapKeySelector.encode(configMapKeyRef, writer);
      writer.ldelim();
    }

    const secretKeyRef = message.secretKeyRef;
    if (secretKeyRef !== null) {
      writer.uint32(34);
      writer.fork();
      SecretKeySelector.encode(secretKeyRef, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): EnvVarSource {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EnvVarSource();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldRef = ObjectFieldSelector.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.resourceFieldRef = ResourceFieldSelector.decode(
            reader,
            reader.uint32()
          );
          break;

        case 3:
          message.configMapKeyRef = ConfigMapKeySelector.decode(
            reader,
            reader.uint32()
          );
          break;

        case 4:
          message.secretKeyRef = SecretKeySelector.decode(
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

  fieldRef: ObjectFieldSelector | null;
  resourceFieldRef: ResourceFieldSelector | null;
  configMapKeyRef: ConfigMapKeySelector | null;
  secretKeyRef: SecretKeySelector | null;

  constructor(
    fieldRef: ObjectFieldSelector | null = null,
    resourceFieldRef: ResourceFieldSelector | null = null,
    configMapKeyRef: ConfigMapKeySelector | null = null,
    secretKeyRef: SecretKeySelector | null = null
  ) {
    this.fieldRef = fieldRef;
    this.resourceFieldRef = resourceFieldRef;
    this.configMapKeyRef = configMapKeyRef;
    this.secretKeyRef = secretKeyRef;
  }
}
