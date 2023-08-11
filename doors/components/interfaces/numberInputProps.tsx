export interface NumberInputProps {
  text: string
  value: number
  onChange: (newValue: number) => void
  min: number
  max: number
}