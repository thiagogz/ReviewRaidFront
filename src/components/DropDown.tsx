'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, X } from "lucide-react";

export default function DropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="light" 
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit" startContent={<Pencil size={18}/>}>Editar</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger" startContent={<X size={20}/>}>
          Apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
