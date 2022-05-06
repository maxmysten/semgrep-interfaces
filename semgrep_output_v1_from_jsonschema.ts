/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type RuleId = string;
export type UniqueIdType = "id" | "AST";
export type RawJson = unknown;

/**
 * Translated by atdcat from 'Semgrep_output_v1.atd'.
 */
export interface CliOutput {
  errors: CliError[];
  results: CliMatch[];
  paths: CliPaths;
  time?: CliTiming;
}
export interface CliError {
  code: number;
  level: string;
  type: string;
  rule_id?: RuleId;
  message?: string;
  path?: string;
  long_msg?: string;
  short_msg?: string;
  spans?: ErrorSpan[];
  help?: string;
}
export interface ErrorSpan {
  config_start: PositionBis;
  config_end: PositionBis;
  config_path: string[] | null;
  file?: string;
  start?: PositionBis;
  end?: PositionBis;
  source_hash?: string;
  context_start?: PositionBis;
  context_end?: PositionBis;
}
export interface PositionBis {
  line: number;
  col: number;
}
export interface CliMatch {
  check_id: RuleId;
  path: string;
  start: Position;
  end: Position;
  extra: CliMatchExtra;
}
export interface Position {
  line: number;
  col: number;
  offset: number;
}
export interface CliMatchExtra {
  metavars?: Metavars;
  fingerprint: string;
  lines: string;
  message: string;
  metadata: RawJson;
  severity: string;
  fix?: string;
  fix_regex?: FixRegex;
  is_ignored?: boolean;
  dependency_match_only?: boolean;
  dependency_matches?: RawJson;
  fixed_lines?: string[];
}
export interface Metavars {
  [k: string]: MetavarValue;
}
export interface MetavarValue {
  start: Position;
  end: Position;
  abstract_content: string;
  propagated_value?: SvalueValue;
  unique_id: UniqueId;
}
export interface SvalueValue {
  svalue_start?: Position;
  svalue_end?: Position;
  svalue_abstract_content: string;
}
export interface UniqueId {
  type: UniqueIdType;
  md5sum?: string;
  sid?: number;
}
export interface FixRegex {
  regex: string;
  replacement: string;
  count?: number;
}
export interface CliPaths {
  scanned: string[];
  _comment?: string;
  skipped?: CliSkippedTarget[];
}
export interface CliSkippedTarget {
  path: string;
  reason: string;
}
export interface CliTiming {
  rules: RuleIdDict[];
  rules_parse_time: number;
  profiling_times: {
    [k: string]: number;
  };
  targets: CliTargetTimes[];
  total_bytes: number;
}
export interface RuleIdDict {
  id: RuleId;
}
export interface CliTargetTimes {
  path: string;
  num_bytes: number;
  match_times: number[];
  parse_times: number[];
  run_time: number;
}