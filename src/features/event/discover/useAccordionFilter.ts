"use client";
import { LucideProps } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type AccordionFIlterType = {
  label: string;
  Icon: React.ComponentType<LucideProps>;
  data: string[];
};

export type AccordionFilterProps = {
  accordionItemData: AccordionFIlterType[];
};

const useAccordionFilter = ({ accordionItemData }: AccordionFilterProps) => {
  const [accordionData, setAccordionData] = useState(
    accordionItemData.map((v) => ({ ...v, data: [] as string[] }))
  );

  const searchParam = useSearchParams();
  const router = useRouter();

  const addSelected = (value: string, label: string) => {
    setAccordionData((prev) =>
      prev.map((vm) => {
        if (vm.label === label) {
          return {
            ...vm,
            data: vm.data.includes(value)
              ? vm.data.filter((vf) => vf !== value)
              : [...vm.data, value],
          };
        }
        return vm;
      })
    );

    const params = new URLSearchParams(searchParam.toString());
    if (params.getAll(label).includes(value)) {
      const updated = params.getAll(label).filter((v) => v !== value);
      params.delete(label);
      updated.forEach((v) => params.append(label, v));
    } else {
      params.append(label, value);
    }

    router.replace(`?${encodeURI(params.toString())}`, { scroll: false });
  };

  const countSelect = (label: string) => {
    const accorItem = accordionData.find((vf) => vf.label === label);
    return accorItem?.data.length || 0;
  };

  const delateAllSelectedByLabel = (label: string) => {
    setAccordionData((prev) =>
      prev.map((vm) => {
        if (vm.label === label) {
          return {
            ...vm,
            data: [],
          };
        }
        return vm;
      })
    );

    const params = new URLSearchParams(searchParam.toString());
    params.delete(label);

    router.replace(`?${encodeURI(params.toString())}`, { scroll: false });
  };

  useEffect(() => {
    setAccordionData((prev) =>
      prev.map((vm) => {
        const optionData = searchParam.getAll(vm.label);
        return {
          ...vm,
          data: optionData.length ? optionData : [],
        };
      })
    );
  }, [searchParam]);

  return {
    addSelected,
    countSelect,
    delateAllSelectedByLabel,
    accordionData,
  };
};

export { useAccordionFilter };
