import type { ReactStoryblokComponent } from "@sb-types";
import { useGlobalComponents } from "contexts/GlobalComponents/GlobalComponents";
import Global from "../Global/Global";

type Blok = {
  reference: string;
};

const GlobalReference = ({ blok: { reference } }: ReactStoryblokComponent<Blok>) => {
  const { globals } = useGlobalComponents();

  const global = globals.find((global) => global.uuid === reference);
  if (!global) return null;

  // @ts-ignore
  return <Global blok={global.content} />;
};

export default GlobalReference;
