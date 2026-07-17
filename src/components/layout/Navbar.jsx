import { DataMenu } from "@/data/data";
import React from "react";
import LinkComponent from "@/components/common/LinkComponent";
import { useState } from "react";
import { useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header className="bg-gray-100 py-6 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-16">
        <h1 className="text-xl font-medium">Products</h1>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-4">
            {DataMenu.map((item) => (
              <li key={item.id}>
                <LinkComponent
                  url={item.url}
                  className="flex items-center gap-2"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </LinkComponent>
              </li>
            ))}
          </ul>

          <Button onClick={() => navigate("/")} variant="destructive">
            Log Out
          </Button>

          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="border py-1 px-2 border-gray-700 h-8" >
                <Button variant="ghost" size="icon">
                  ☰
                </Button>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px]">
              <div className="mt-10 flex flex-col gap-6 mx-5">
                <ul className="flex flex-col gap-4">
                  {DataMenu.map((item) => (
                    <li key={item.id}>
                      <LinkComponent
                        url={item.url}
                        className="flex items-center gap-2"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </LinkComponent>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => navigate("/")}
                  variant="destructive"
                  className="w-full"
                >
                  Log Out
                </Button>

                <div className="flex items-center justify-between">
                  <span>Dark Mode</span>
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) =>
                      setTheme(checked ? "dark" : "light")
                    }
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default navbar;
