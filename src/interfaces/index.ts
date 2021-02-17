export interface FbValuesType {
  int1: number | undefined
  int2: number | undefined
  limit: number | undefined
  string1: string
  string2: string
}
export interface StatType {
  key: string
  count: number
  perc: number
  values:FbValuesType
  isCurrent:boolean
}
