"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";

export function ListTypeTab() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function chooseType(value: string) {
    router.push("/?type=" + value);
    router.refresh();
  }

  return (
    <Tabs
      defaultValue={searchParams.get("type") || "newstories"}
      onValueChange={(value) => {
        chooseType(value);
      }}
    >
      <TabsList>
        <TabsTrigger value="newstories">New</TabsTrigger>
        <TabsTrigger value="topstories">Top</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
