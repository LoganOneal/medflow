import { ChatWindow } from "@/components/ChatWindow";
import { Metadata } from "next"
import Image from "next/image"
// import { CounterClockwiseClockIcon } from "@radix-ui/react-icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { CodeViewer } from "@/components/code-viewer"
import { MaxLengthSelector } from "@/components/maxlength-selector"
// import { ModelSelector } from "@/components/model-selector"
import { PresetActions } from "@/components/preset-actions"
import { PresetSave } from "@/components/preset-save"
import { PresetSelector } from "@/components/preset-selector"
import { PresetShare } from "@/components/preset-share"
// import { TemperatureSelector } from "@/components/temperature-selector"
// import { TopPSelector } from "@/components/top-p-selector"
import { models, types } from "@/data/models"
import { presets } from "@/data/presets"

const Placeholder = (
  <div className="h-48">
  </div>
);


const Chat = () => {
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji=""
      titleText=""
<<<<<<< HEAD
      placeholder="Please enter a question regarding patient John Doe."
=======
      placeholder="Ask me anything about John Doe"
>>>>>>> 64a6e04903e31efcd2afa9d3d827145e62f07bef
      emptyStateComponent={Placeholder}
    ></ChatWindow>
  )
} 

const ChatArea = () => {
  return (
    <div className="h-3/4 w-ful overflow-auto">
      <div>
        <Chat />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: "MedicChat",
  description: "The OpenAI Playground built using the components.",
}

export default function PlaygroundPage() {
  return (
    <>

      <div className="hidden h-fit- flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center md:h-16">
          <h2 className="text-2xl font-semibold">MediChat: John Doe</h2>
          <div className="ml-auto flex  space-x-2 sm:justify-end">
            <PresetSelector presets={presets} />
            {/* <PresetSave /> */}
            <div className="hidden space-x-2 md:flex">
              {/* <CodeViewer /> */}
              {/* <PresetShare /> */}
              </div>
            <PresetActions />
          </div>
        </div>
        <Separator />
          <div className="container h-full py-6">
              <div className="md:order-1">
                  <div className="flex h-screen flex-col space-y-4">
                    <ChatArea />
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}