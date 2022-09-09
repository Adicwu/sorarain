export type Key = string | number
export interface AwDragProps {
  draggable: boolean
  groupKey: Key
  selfKey: Key
}
export type DargTransferData = Omit<AwDragProps, 'draggable'>
export type AwDragExchangeParam = Record<'from' | 'to', Key>
