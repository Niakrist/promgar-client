"use client";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./FilterRange.module.css";

interface IFilterRangeProps {
  name: string;
  min?: number;
  max?: number;
  onChange?: (values: [number, number]) => void;
}

export const FilterRange = ({
  name,
  min = 0,
  max = 100000,
  onChange,
}: IFilterRangeProps) => {
  const [rangeValues, setRangeValues] = useState<[number, number]>([min, max]);

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setRangeValues([values[0], values[1]]);
      onChange?.([values[0], values[1]]);
    }
  };

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newMin = Math.min(value, rangeValues[1] - 1);
    setRangeValues([newMin, rangeValues[1]]);
    onChange?.([newMin, rangeValues[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newMax = Math.max(value, rangeValues[0] + 1);
    setRangeValues([rangeValues[0], newMax]);
    onChange?.([rangeValues[0], newMax]);
  };

  const handleMinBlur = () => {
    if (rangeValues[0] < min) {
      setRangeValues([min, rangeValues[1]]);
      onChange?.([min, rangeValues[1]]);
    }
  };

  const handleMaxBlur = () => {
    if (rangeValues[1] > max) {
      setRangeValues([rangeValues[0], max]);
      onChange?.([rangeValues[0], max]);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>{name}</p>

      <div className={styles.wrapper}>
        <input
          type="number"
          className={styles.input}
          placeholder="От"
          value={rangeValues[0]}
          onChange={handleMinChange}
          onBlur={handleMinBlur}
          min={min}
          max={rangeValues[1] - 1}
        />
        <input
          type="number"
          className={styles.input}
          placeholder="До"
          value={rangeValues[1]}
          onChange={handleMaxChange}
          onBlur={handleMaxBlur}
          min={rangeValues[0] + 1}
          max={max}
        />
      </div>

      <div className={styles.sliderWrapper}>
        <Slider
          range
          min={min}
          max={max}
          value={[rangeValues[0], rangeValues[1]]}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div>
    </div>
  );
};
