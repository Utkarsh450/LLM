import axios from "../../utils/axiosConfig";
import { setChats, addChat, setChatLoading, setChatError, setActiveChatId, removeChatById } from "../reducers/chatReducer";
import type { AppDispatch } from "../store";

export interface ChatItem {
  _id: string;
  title: string;
}

export const asyncFetchChats = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setChatLoading(true));
        // map backend -> slice shape once    
 const savedChats = localStorage.getItem("chatdata")
 if( savedChats ) {
    const parsedChats = JSON.parse(savedChats)

    const chats = parsedChats.map(c => ({
      chatId: c.chatId,
      title: c.title,
    }));
       const avtiveChat =  localStorage.getItem("ActiveChat")
    dispatch(setChats(chats));            // replace list in one go
     dispatch(setActiveChatId(avtiveChat))
}
  } catch (e) {
    console.log(e);
    
    dispatch(setChatError("Failed to fetch chats"));
  } finally {
    dispatch(setChatLoading(false));
  }
};


export const asynccreatechat = (title: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setChatLoading(true));
    const { data } = await axios.post("chat/createChat", { title });

    const chat = data.chat as ChatItem;

    if (chat?.title) {

      // ✅ get existing list
      const saved = localStorage.getItem("chatdata");
      const existingChats = saved ? JSON.parse(saved) : [];

      // ✅ update array
      const updatedChats = [
        ...existingChats,
        { chatId: chat._id, title: chat.title },
      ];

      // ✅ store back to localStorage
      localStorage.setItem("chatdata", JSON.stringify(updatedChats));
      localStorage.setItem("ActiveChat", chat._id)

      // ✅ redux state update
      dispatch(addChat({ chatId: chat._id, title: chat.title}));
      dispatch(setActiveChatId(chat._id));
    }
  } catch (e) {
    console.log(e);
    dispatch(setChatError("Failed to create chat"));
  } finally {
    dispatch(setChatLoading(false));
  }
  
};


export const asyncDeleteChatById = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setChatLoading(true));

    const response = await axios.delete("chat/deletChat/" + id);
    const chat = response.data.chat; // this contains deleted chat info

    // ✅ Update Redux
    dispatch(removeChatById(chat._id));

    // ✅ Update localStorage
    const savedChats = localStorage.getItem("chatdata");

    if (savedChats) {
      const parsedChats = JSON.parse(savedChats);

      const updatedChats = parsedChats.filter(c => c.chatId !== chat._id); // remove from array

      localStorage.setItem("chatdata", JSON.stringify(updatedChats));
    }
  } catch (error) {
    console.error(error);
    dispatch(setChatError("Failed to delete chat"));
  } finally {
    dispatch(setChatLoading(false));
  }
};
