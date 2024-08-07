import React from "react";
import {Button} from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {GiCrossedBones} from "react-icons/gi";
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {NavList} from "../constants";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {RiArrowRightWideFill} from "react-icons/ri";
import AuthModal from "@/components/auth/modals";
import {ThemeToggle} from "@/components/theme/toggle";

interface HamburgerSidebarProps {
  handleClose: () => void;
}

const HamburgerSidebar = ({handleClose}: HamburgerSidebarProps) => {
  const navList = NavList;

  return (
    <SheetContent className="flexib flex-col sm:hidden overflow-auto">
      <Button onClick={handleClose} variant={"link"}>
        <GiCrossedBones className="text-foreground absolute right-[14px] top-[13px] z-10 h-5 w-5 cursor-pointer" />
      </Button>
      <SheetHeader>
        <SheetTitle>Welcome to DevKingz</SheetTitle>
      </SheetHeader>
      <SheetDescription className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {navList.map((navItem) => (
            <AccordionItem key={navItem.href} value={navItem.href}>
              {navItem.children ? (
                <div key={navItem.href}>
                  <AccordionTrigger className="active:bg-accent1.02] py-3 font-bold transition-all duration-300">
                    {navItem.title}
                  </AccordionTrigger>
                  <AccordionContent className="flexi-it flex-col gap-y-3">
                    {navItem.children.map((child, index, childArray) => (
                      <div
                        className="flexi-it w-full flex-col gap-y-3"
                        key={child.href}
                        onClick={handleClose}
                      >
                        <Link
                          href={child.href}
                          className="flexib active:bg-accent w-full transition-all duration-200"
                        >
                          <p>{child.title}</p> <RiArrowRightWideFill />
                        </Link>
                        {index !== childArray.length - 1 && <Separator />}
                      </div>
                    ))}
                  </AccordionContent>
                </div>
              ) : (
                <Link
                  href={navItem.href}
                  key={navItem.href}
                  className="active:bg-accent flex w-full transition-all duration-200"
                  onClick={handleClose}
                >
                  <AccordionHeader className="flex py-3">{navItem.title}</AccordionHeader>
                </Link>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </SheetDescription>
      <SheetFooter className="flexi w-full flex-col gap-y-2">
        <ThemeToggle showLabel />
        <AuthModal defaultAction="login" triggerStyles="bg-transparent text-foreground w-full" />
        <AuthModal defaultAction="signup" triggerStyles="w-full" />
      </SheetFooter>
    </SheetContent>
  );
};

export default HamburgerSidebar;
