import React from "react";
import IconMe from "../../../../public/humberger-svgrepo-com.svg";
import { Button } from "@/shared/ui/Button";

export default function MainPage(): React.ReactElement {
  return <Button icon={IconMe} iconPosition="before" label="ttext" />;
}
