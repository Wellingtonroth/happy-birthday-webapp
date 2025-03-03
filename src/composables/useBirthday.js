import { useRouter } from "vue-router";
import { useBirthdayStore } from "../store/birthday";

export default function useBirthday(birthdayStore = useBirthdayStore()) {
  const getOrderById = async (id) => {
    try {
      const response = await birthdayStore.disptachGetOrderById(id);
      return response;
    } catch (error) {
      console.error("Failed to get order by id", error);
    }
  };

  return {
    getOrderById,
  };
}
