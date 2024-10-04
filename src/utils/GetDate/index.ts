import { EM_DASH } from "../../constants";

const validateEpoch = (epochTime: string): boolean =>
  (typeof epochTime === "undefined" || epochTime?.length === 0);

export const getDateFromEpoch = (epochTime: string): string => {
  if (validateEpoch(epochTime)) return EM_DASH;

  const date: Date = new Date(+epochTime);

  const day: string = String(date.getDate());
  const month: string = String(date.getMonth());
  const year: number = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const getDateFromEpochWithHM = (epochTime: string): string => {
  if (validateEpoch(epochTime)) return EM_DASH;

  const date: Date = new Date(+epochTime);

  const hours: number = date.getHours();
  const minutes: string = String(date.getMinutes()).padStart(2, '0');

  return `${getDateFromEpoch(epochTime)} ${hours}:${minutes}`;
};
