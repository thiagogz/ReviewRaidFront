'use client'

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { ChevronDown, Pencil, X } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropDownActionsProps {
  onEdit: MouseEventHandler,
  onDelete: MouseEventHandler
}

export default function DropDownActions({onEdit, onDelete}: DropDownActionsProps) {
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
        <DropdownItem onClick={onEdit} key="edit" startContent={<Pencil size={18}/>}>Editar</DropdownItem>
        <DropdownItem onClick={onDelete} key="delete" className="text-danger" color="danger" startContent={<X size={20}/>}>
          Apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
