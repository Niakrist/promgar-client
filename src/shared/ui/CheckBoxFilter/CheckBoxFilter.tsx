import { Checkbox } from "../Checkbox/Checkbox";

interface ICheckboxProps {
  text: string;
  id: string;
  selectedIds: string[];
  onToggle: (id: string) => void;
  className?: string;
}

export const CheckBoxFilter = ({
  text,
  id,
  selectedIds,
  onToggle,
  className,
}: ICheckboxProps) => {
  return (
    <Checkbox
      text={text}
      id={id}
      checked={selectedIds.includes(id)}
      onChange={() => onToggle(id)}
      className={className}
    />
  );
};
