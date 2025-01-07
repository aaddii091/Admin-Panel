import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    name: 'Aditya Saxena',
 
  }),
  getters: {
   
  },
  actions: {
    updateRoomCode(newRoomCode) {
      this.roomCode = newRoomCode;
    }
  },
});
