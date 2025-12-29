import yaml from "yaml";
import labelsRaw from "../labels/en.yaml?raw";

const labels = yaml.parse(labelsRaw);

export const useLabel = (key: string): string => {
  return key.split(".").reduce((acc, part) => acc?.[part], labels) || key;
};
