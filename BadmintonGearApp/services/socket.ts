import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

let socket: Socket | null = null;

export const initSocket = async () => {
    if (socket?.connected) return socket;
    const apiUrl = process.env.EXPO_PUBLIC_API_BASE_URL;
    const token = await AsyncStorage.getItem("loginToken");
    socket = io(apiUrl, {
        transports: ["websocket"],
        auth: { token },
        reconnection: true,
    });

    socket.on("connect", () => console.log("Socket connected:", socket?.id));
    return socket;
};

export const getSocket = () => socket;
