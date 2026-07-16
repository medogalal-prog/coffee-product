import { DataMenu } from "@/data/data";
import React from "react";
import LinkComponent from "@/components/common/LinkComponent";
import { useState } from "react";
import { useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function navbar() {
  const navigate=useNavigate()
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header className="py-6 bg-gray-100 dark:bg-gray-900">
      <div className="container flex items-center justify-between gap-2 px-17">
        <h1 className="text-xl font-medium">Products</h1>
        <div className="right flex items-center justify-center gap-4">
          <ul className="flex items-center gap-2">
            {DataMenu.map((item) => (
              <li key={item.id}>
                <LinkComponent
                  url={item.url}
                  className="flex items-center gap-2"
                >
                  {item.icon}
                  <span>{item?.title}</span>
                </LinkComponent>
              </li>
            ))}
          </ul>
          <Button onClick={()=>navigate("/")} variant="destructive">Log Out</Button>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}>
            Switch Theme
          </Switch>
          
        </div>
      </div>
    </header>
  );
}

export default navbar;
