import axios from "../../utils/axiosConfig";
import { setChats, addChat, setChatLoading, setChatError, setActiveChatId } from "../reducers/chatReducer";
import type { AppDispatch } from "../store";

export interface ChatItem {
  _id: string;
  title: string;
  updatedAt?: number;
}

export const asyncFetchChats = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setChatLoading(true));
    const { data } = await axios.get("chat/getChats");
    // map backend -> slice shape once    
    const chats = (data.chats as ChatItem[]).map(c => ({
      chatId: c._id,
      title: c.title,
      updatedAt: c.updatedAt,
    }));
    dispatch(setChats(chats));            // replace list in one go
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
      dispatch(addChat({ chatId: chat._id, title: chat.title, updatedAt: chat.updatedAt }));
      dispatch(setActiveChatId(chat._id))
    }
  } catch (e) {
    console.log(e);
    
    dispatch(setChatError("Failed to create chat"));
  } finally {
    dispatch(setChatLoading(false));
  }
};

export const asyncDeleteChatById = (id: string)=> async(dispatch: AppDispatch)=>{
    const response = await axios.post("chat/deleteChatById", {id})
    console.log(response);
    
}
