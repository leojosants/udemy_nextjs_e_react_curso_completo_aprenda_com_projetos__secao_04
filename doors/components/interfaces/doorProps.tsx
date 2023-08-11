import DoorModel from "../../model/door"

export interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}