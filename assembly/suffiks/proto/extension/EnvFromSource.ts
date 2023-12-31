// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { ConfigMapEnvSource } from "./ConfigMapEnvSource";
import { SecretEnvSource } from "./SecretEnvSource";

export class EnvFromSource {
  static encode(message: EnvFromSource, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.prefix);

    const configMapRef = message.configMapRef;
    if (configMapRef !== null) {
      writer.uint32(18);
      writer.fork();
      ConfigMapEnvSource.encode(configMapRef, writer);
      writer.ldelim();
    }

    const secretRef = message.secretRef;
    if (secretRef !== null) {
      writer.uint32(26);
      writer.fork();
      SecretEnvSource.encode(secretRef, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): EnvFromSource {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EnvFromSource();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string();
          break;

        case 2:
          message.configMapRef = ConfigMapEnvSource.decode(
            reader,
            reader.uint32()
          );
          break;

        case 3:
          message.secretRef = SecretEnvSource.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  prefix: string;
  configMapRef: ConfigMapEnvSource | null;
  secretRef: SecretEnvSource | null;

  constructor(
    prefix: string = "",
    configMapRef: ConfigMapEnvSource | null = null,
    secretRef: SecretEnvSource | null = null
  ) {
    this.prefix = prefix;
    this.configMapRef = configMapRef;
    this.secretRef = secretRef;
  }
}
