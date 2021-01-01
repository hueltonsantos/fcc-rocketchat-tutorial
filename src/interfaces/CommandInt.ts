import { IMessage } from "@rocket.chat/sdk/dist/config/messageInterfaces";

export interface CommandInt {
    name: string;
    description: string;
    command: (message: IMessage, room: string) => Promise<void>
}