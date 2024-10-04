const RADIAN = Math.PI / 180;

export const toRadians = (angle: number) => RADIAN * angle;

export const getAngleFromPercentage = (percent: number): number => toRadians((percent / 100) * 360);
