// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v3.20.1

import { Writer, Reader } from "as-proto/assembly";
import { Volume } from "./Volume";
import { Container } from "./Container";
import { EphemeralContainer } from "./EphemeralContainer";
import { PodSecurityContext } from "./PodSecurityContext";
import { LocalObjectReference } from "./LocalObjectReference";
import { Affinity } from "./Affinity";
import { Toleration } from "./Toleration";
import { HostAlias } from "./HostAlias";
import { PodDNSConfig } from "./PodDNSConfig";
import { PodReadinessGate } from "./PodReadinessGate";
import { Quantity } from "../../../apimachinery/pkg/api/resource/Quantity";
import { TopologySpreadConstraint } from "./TopologySpreadConstraint";
import { PodOS } from "./PodOS";

export class PodSpec {
  static encode(message: PodSpec, writer: Writer): void {
    const volumes = message.volumes;
    for (let i: i32 = 0; i < volumes.length; ++i) {
      writer.uint32(10);
      writer.fork();
      Volume.encode(volumes[i], writer);
      writer.ldelim();
    }

    const initContainers = message.initContainers;
    for (let i: i32 = 0; i < initContainers.length; ++i) {
      writer.uint32(162);
      writer.fork();
      Container.encode(initContainers[i], writer);
      writer.ldelim();
    }

    const containers = message.containers;
    for (let i: i32 = 0; i < containers.length; ++i) {
      writer.uint32(18);
      writer.fork();
      Container.encode(containers[i], writer);
      writer.ldelim();
    }

    const ephemeralContainers = message.ephemeralContainers;
    for (let i: i32 = 0; i < ephemeralContainers.length; ++i) {
      writer.uint32(274);
      writer.fork();
      EphemeralContainer.encode(ephemeralContainers[i], writer);
      writer.ldelim();
    }

    writer.uint32(26);
    writer.string(message.restartPolicy);

    writer.uint32(32);
    writer.int64(message.terminationGracePeriodSeconds);

    writer.uint32(40);
    writer.int64(message.activeDeadlineSeconds);

    writer.uint32(50);
    writer.string(message.dnsPolicy);

    const nodeSelector = message.nodeSelector;
    if (nodeSelector !== null) {
      const nodeSelectorKeys = nodeSelector.keys();
      for (let i: i32 = 0; i < nodeSelectorKeys.length; ++i) {
        const nodeSelectorKey = nodeSelectorKeys[i];
        writer.uint32(58);
        writer.fork();
        writer.uint32(10);
        writer.string(nodeSelectorKey);
        writer.uint32(18);
        writer.string(nodeSelector.get(nodeSelectorKey));
        writer.ldelim();
      }
    }

    writer.uint32(66);
    writer.string(message.serviceAccountName);

    writer.uint32(74);
    writer.string(message.serviceAccount);

    writer.uint32(168);
    writer.bool(message.automountServiceAccountToken);

    writer.uint32(82);
    writer.string(message.nodeName);

    writer.uint32(88);
    writer.bool(message.hostNetwork);

    writer.uint32(96);
    writer.bool(message.hostPID);

    writer.uint32(104);
    writer.bool(message.hostIPC);

    writer.uint32(216);
    writer.bool(message.shareProcessNamespace);

    const securityContext = message.securityContext;
    if (securityContext !== null) {
      writer.uint32(114);
      writer.fork();
      PodSecurityContext.encode(securityContext, writer);
      writer.ldelim();
    }

    const imagePullSecrets = message.imagePullSecrets;
    for (let i: i32 = 0; i < imagePullSecrets.length; ++i) {
      writer.uint32(122);
      writer.fork();
      LocalObjectReference.encode(imagePullSecrets[i], writer);
      writer.ldelim();
    }

    writer.uint32(130);
    writer.string(message.hostname);

    writer.uint32(138);
    writer.string(message.subdomain);

    const affinity = message.affinity;
    if (affinity !== null) {
      writer.uint32(146);
      writer.fork();
      Affinity.encode(affinity, writer);
      writer.ldelim();
    }

    writer.uint32(154);
    writer.string(message.schedulerName);

    const tolerations = message.tolerations;
    for (let i: i32 = 0; i < tolerations.length; ++i) {
      writer.uint32(178);
      writer.fork();
      Toleration.encode(tolerations[i], writer);
      writer.ldelim();
    }

    const hostAliases = message.hostAliases;
    for (let i: i32 = 0; i < hostAliases.length; ++i) {
      writer.uint32(186);
      writer.fork();
      HostAlias.encode(hostAliases[i], writer);
      writer.ldelim();
    }

    writer.uint32(194);
    writer.string(message.priorityClassName);

    writer.uint32(200);
    writer.int32(message.priority);

    const dnsConfig = message.dnsConfig;
    if (dnsConfig !== null) {
      writer.uint32(210);
      writer.fork();
      PodDNSConfig.encode(dnsConfig, writer);
      writer.ldelim();
    }

    const readinessGates = message.readinessGates;
    for (let i: i32 = 0; i < readinessGates.length; ++i) {
      writer.uint32(226);
      writer.fork();
      PodReadinessGate.encode(readinessGates[i], writer);
      writer.ldelim();
    }

    writer.uint32(234);
    writer.string(message.runtimeClassName);

    writer.uint32(240);
    writer.bool(message.enableServiceLinks);

    writer.uint32(250);
    writer.string(message.preemptionPolicy);

    const overhead = message.overhead;
    if (overhead !== null) {
      const overheadKeys = overhead.keys();
      for (let i: i32 = 0; i < overheadKeys.length; ++i) {
        const overheadKey = overheadKeys[i];
        writer.uint32(258);
        writer.fork();
        writer.uint32(10);
        writer.string(overheadKey);
        writer.uint32(18);
        writer.fork();
        Quantity.encode(overhead.get(overheadKey), writer);
        writer.ldelim();
        writer.ldelim();
      }
    }

    const topologySpreadConstraints = message.topologySpreadConstraints;
    for (let i: i32 = 0; i < topologySpreadConstraints.length; ++i) {
      writer.uint32(266);
      writer.fork();
      TopologySpreadConstraint.encode(topologySpreadConstraints[i], writer);
      writer.ldelim();
    }

    writer.uint32(280);
    writer.bool(message.setHostnameAsFQDN);

    const os = message.os;
    if (os !== null) {
      writer.uint32(290);
      writer.fork();
      PodOS.encode(os, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PodSpec {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PodSpec();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volumes.push(Volume.decode(reader, reader.uint32()));
          break;

        case 20:
          message.initContainers.push(
            Container.decode(reader, reader.uint32())
          );
          break;

        case 2:
          message.containers.push(Container.decode(reader, reader.uint32()));
          break;

        case 34:
          message.ephemeralContainers.push(
            EphemeralContainer.decode(reader, reader.uint32())
          );
          break;

        case 3:
          message.restartPolicy = reader.string();
          break;

        case 4:
          message.terminationGracePeriodSeconds = reader.int64();
          break;

        case 5:
          message.activeDeadlineSeconds = reader.int64();
          break;

        case 6:
          message.dnsPolicy = reader.string();
          break;

        case 7:
          let nodeSelectorKey: string = "";
          let nodeSelectorValue: string = "";
          let nodeSelectorHasKey: bool = false;
          let nodeSelectorHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                nodeSelectorKey = reader.string();
                nodeSelectorHasKey = true;
                break;

              case 2:
                nodeSelectorValue = reader.string();
                nodeSelectorHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.nodeSelector === null) {
              message.nodeSelector = new Map<string, string>();
            }
            const nodeSelector = message.nodeSelector;
            if (
              nodeSelector !== null &&
              nodeSelectorHasKey &&
              nodeSelectorHasValue
            ) {
              nodeSelector.set(nodeSelectorKey, nodeSelectorValue);
            }
          }
          break;

        case 8:
          message.serviceAccountName = reader.string();
          break;

        case 9:
          message.serviceAccount = reader.string();
          break;

        case 21:
          message.automountServiceAccountToken = reader.bool();
          break;

        case 10:
          message.nodeName = reader.string();
          break;

        case 11:
          message.hostNetwork = reader.bool();
          break;

        case 12:
          message.hostPID = reader.bool();
          break;

        case 13:
          message.hostIPC = reader.bool();
          break;

        case 27:
          message.shareProcessNamespace = reader.bool();
          break;

        case 14:
          message.securityContext = PodSecurityContext.decode(
            reader,
            reader.uint32()
          );
          break;

        case 15:
          message.imagePullSecrets.push(
            LocalObjectReference.decode(reader, reader.uint32())
          );
          break;

        case 16:
          message.hostname = reader.string();
          break;

        case 17:
          message.subdomain = reader.string();
          break;

        case 18:
          message.affinity = Affinity.decode(reader, reader.uint32());
          break;

        case 19:
          message.schedulerName = reader.string();
          break;

        case 22:
          message.tolerations.push(Toleration.decode(reader, reader.uint32()));
          break;

        case 23:
          message.hostAliases.push(HostAlias.decode(reader, reader.uint32()));
          break;

        case 24:
          message.priorityClassName = reader.string();
          break;

        case 25:
          message.priority = reader.int32();
          break;

        case 26:
          message.dnsConfig = PodDNSConfig.decode(reader, reader.uint32());
          break;

        case 28:
          message.readinessGates.push(
            PodReadinessGate.decode(reader, reader.uint32())
          );
          break;

        case 29:
          message.runtimeClassName = reader.string();
          break;

        case 30:
          message.enableServiceLinks = reader.bool();
          break;

        case 31:
          message.preemptionPolicy = reader.string();
          break;

        case 32:
          let overheadKey: string = "";
          let overheadValue: Quantity | null = null;
          let overheadHasKey: bool = false;
          let overheadHasValue: bool = false;
          for (
            const end: usize = reader.ptr + reader.uint32();
            reader.ptr < end;

          ) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                overheadKey = reader.string();
                overheadHasKey = true;
                break;

              case 2:
                overheadValue = Quantity.decode(reader, reader.uint32());
                overheadHasValue = true;
                break;

              default:
                reader.skipType(tag & 7);
                break;
            }
            if (message.overhead === null) {
              message.overhead = new Map<string, Quantity>();
            }
            const overhead = message.overhead;
            if (
              overhead !== null &&
              overheadHasKey &&
              overheadHasValue &&
              overheadValue !== null
            ) {
              overhead.set(overheadKey, overheadValue);
            }
          }
          break;

        case 33:
          message.topologySpreadConstraints.push(
            TopologySpreadConstraint.decode(reader, reader.uint32())
          );
          break;

        case 35:
          message.setHostnameAsFQDN = reader.bool();
          break;

        case 36:
          message.os = PodOS.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  volumes: Array<Volume>;
  initContainers: Array<Container>;
  containers: Array<Container>;
  ephemeralContainers: Array<EphemeralContainer>;
  restartPolicy: string;
  terminationGracePeriodSeconds: i64;
  activeDeadlineSeconds: i64;
  dnsPolicy: string;
  nodeSelector: Map<string, string>;
  serviceAccountName: string;
  serviceAccount: string;
  automountServiceAccountToken: bool;
  nodeName: string;
  hostNetwork: bool;
  hostPID: bool;
  hostIPC: bool;
  shareProcessNamespace: bool;
  securityContext: PodSecurityContext | null;
  imagePullSecrets: Array<LocalObjectReference>;
  hostname: string;
  subdomain: string;
  affinity: Affinity | null;
  schedulerName: string;
  tolerations: Array<Toleration>;
  hostAliases: Array<HostAlias>;
  priorityClassName: string;
  priority: i32;
  dnsConfig: PodDNSConfig | null;
  readinessGates: Array<PodReadinessGate>;
  runtimeClassName: string;
  enableServiceLinks: bool;
  preemptionPolicy: string;
  overhead: Map<string, Quantity>;
  topologySpreadConstraints: Array<TopologySpreadConstraint>;
  setHostnameAsFQDN: bool;
  os: PodOS | null;

  constructor(
    volumes: Array<Volume> = [],
    initContainers: Array<Container> = [],
    containers: Array<Container> = [],
    ephemeralContainers: Array<EphemeralContainer> = [],
    restartPolicy: string = "",
    terminationGracePeriodSeconds: i64 = 0,
    activeDeadlineSeconds: i64 = 0,
    dnsPolicy: string = "",
    nodeSelector: Map<string, string> = new Map(),
    serviceAccountName: string = "",
    serviceAccount: string = "",
    automountServiceAccountToken: bool = false,
    nodeName: string = "",
    hostNetwork: bool = false,
    hostPID: bool = false,
    hostIPC: bool = false,
    shareProcessNamespace: bool = false,
    securityContext: PodSecurityContext | null = null,
    imagePullSecrets: Array<LocalObjectReference> = [],
    hostname: string = "",
    subdomain: string = "",
    affinity: Affinity | null = null,
    schedulerName: string = "",
    tolerations: Array<Toleration> = [],
    hostAliases: Array<HostAlias> = [],
    priorityClassName: string = "",
    priority: i32 = 0,
    dnsConfig: PodDNSConfig | null = null,
    readinessGates: Array<PodReadinessGate> = [],
    runtimeClassName: string = "",
    enableServiceLinks: bool = false,
    preemptionPolicy: string = "",
    overhead: Map<string, Quantity> = new Map(),
    topologySpreadConstraints: Array<TopologySpreadConstraint> = [],
    setHostnameAsFQDN: bool = false,
    os: PodOS | null = null
  ) {
    this.volumes = volumes;
    this.initContainers = initContainers;
    this.containers = containers;
    this.ephemeralContainers = ephemeralContainers;
    this.restartPolicy = restartPolicy;
    this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
    this.activeDeadlineSeconds = activeDeadlineSeconds;
    this.dnsPolicy = dnsPolicy;
    this.nodeSelector = nodeSelector;
    this.serviceAccountName = serviceAccountName;
    this.serviceAccount = serviceAccount;
    this.automountServiceAccountToken = automountServiceAccountToken;
    this.nodeName = nodeName;
    this.hostNetwork = hostNetwork;
    this.hostPID = hostPID;
    this.hostIPC = hostIPC;
    this.shareProcessNamespace = shareProcessNamespace;
    this.securityContext = securityContext;
    this.imagePullSecrets = imagePullSecrets;
    this.hostname = hostname;
    this.subdomain = subdomain;
    this.affinity = affinity;
    this.schedulerName = schedulerName;
    this.tolerations = tolerations;
    this.hostAliases = hostAliases;
    this.priorityClassName = priorityClassName;
    this.priority = priority;
    this.dnsConfig = dnsConfig;
    this.readinessGates = readinessGates;
    this.runtimeClassName = runtimeClassName;
    this.enableServiceLinks = enableServiceLinks;
    this.preemptionPolicy = preemptionPolicy;
    this.overhead = overhead;
    this.topologySpreadConstraints = topologySpreadConstraints;
    this.setHostnameAsFQDN = setHostnameAsFQDN;
    this.os = os;
  }
}
