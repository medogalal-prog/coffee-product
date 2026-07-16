import { SearchCircleIcon } from "@hugeicons/core-free-icons";
import { MicrosoftAdminIcon } from "@hugeicons/core-free-icons";
import { Home03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export const  DataMenu=[
    {
        id:1,
        title:"Home",
        url:"/Home",
        icon:<HugeiconsIcon className="size-4" icon={Home03Icon} />
    },
    {
        id:2,
        title:"About",
        url:"/About",
        icon:<HugeiconsIcon icon={SearchCircleIcon} />
    },
    {
        id:3,
        title:"Admin",
        url:"/Admin",
        icon:<HugeiconsIcon icon={MicrosoftAdminIcon} />
    },
]
