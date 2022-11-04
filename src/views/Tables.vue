<template>
    <div>
      <h3 class="text-3xl font-mono font-medium text-gray-700">Inventory</h3>
          
          <div class="mt-8">
                <div class="mt-4">
                  <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-white rounded-md"> <!--********ROUNDED-MD START*********-->
                    <div class="flex flex-col mt-3 sm:flex-row"> <!--********SM:FLEX-ROW START*********-->
  
                      
                          <div class="flex"> <!--********NAVBAR START*********-->
                            
                            <div class="relative"> <!--********5-10 Navbar Start*********-->
                              <select
                                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
                              >
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                              </select>
                              <div
                                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
                              >
                                <svg
                                  class="w-4 h-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                  />
                                </svg>
                              </div>
                            </div> <!--********5-10 Navbar End*********-->
                            
                            
                            <div class="relative"> <!--********ACTIVE, INACTIVE NAVBAR START**********-->
                              <select
                                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                              >
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                              </select>
  
                              <div
                                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
                              >
                                <svg
                                  class="w-4 h-4 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                  />
                                </svg>
                              </div>
                            </div> <!--********ACTIVE, INACTIVE NAVBAR START**********-->
                            
                            
                            <div class="absolute inset-y-0 left-0 flex items-center pl-2"> <!--********SEARCH BAR START**********-->
                              <svg
                                viewBox="0 0 24 24"
                                class="w-4 h-4 text-gray-500 fill-current">
                                <path
                                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"/>
                              </svg>
                            </div>
  
                            <input
                              placeholder="Search"
                              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                              /> <!--********SEARCH BAR END**********-->
  
                          </div> <!--********NAVBAR END*********-->
                    
  
                    
              
                          <div class="flex pl-80 ml-60 justify-end"> <!--********MODAL START*********-->
                              <button 
                                @click="open = true"
                                class="px-4 py-2 mt-2 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none ">
                                Add Product + 
                              </button>
  
                              <div
                                :class="`modal ${
                                  !open && 'opacity-0 pointer-events-none'
                                } z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center`"
                              >
                                <div
                                  @click="open = false"
                                  class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay"
                                ></div>
  
                                <div
                                  class="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md"
                                >
                                  <div
                                    class="absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm text-white cursor-pointer modal-close"
                                  >
                                          <svg
                                            class="text-white fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                          >
                                            <path
                                              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                                            />
                                          </svg>
                                          <span class="text-sm">(Esc)</span>
                                  </div>
  
                                  <!-- Add margin if you want to see some of the overlay behind the modal-->
                                  <div class="px-6 py-4 text-left modal-content">
  
                                    <!--Title-->
                                      <div class="flex items-center justify-between pb-3">
                                        <p class="text-2xl font-bold mt-5">Add Aquatic Plant + </p>
                                        <div class="z-50 cursor-pointer modal-close" @click="open = false">
                                          <svg
                                            class="text-black fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 18 18"
                                          >
                                            <path
                                              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                                            />
                                          </svg>
                                        </div>
                                      </div>
  
                                    <!--MODEL CONTENT-->
                                    <div class="mt-5">
                                              <form @submit="">
                                                <div class="form-group mb-6">
                                                  <input type="text" class="form-control block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput90"
                                                    placeholder="Item" >
                                                </div>
                                                <div class="form-group mb-6">
                                                  <input type="email" class="form-control block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
                                                    placeholder="Plant Type" >
                                                </div>
                                                <div class="form-group mb-6">
                                                  <input type="email" class="form-control block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
                                                    placeholder="Price" >
                                                </div>
                                                <div class="form-group mb-6">
                                                  <input type="email" class="form-control block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
                                                    placeholder="Stock" >
                                                </div>
                                                <div class="form-group mb-6">
                                                  <input type="email" class="form-control block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput91"
                                                    placeholder="Description" >
                                                </div>
                                              </form>
                                            </div>
  
                                    <!--Footer-->
                                        <div class="flex justify-end pt-2">
                                              <button
                                                @click="open = false"
                                                class="p-3 px-6 py-3 mr-2 text-indigo-500 bg-transparent rounded-lg hover:bg-gray-100 hover:text-indigo-400 focus:outline-none"
                                              >
                                                Close
                                              </button>
                                              <button
                                                @click="open = false"
                                                class="px-6 py-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
                                              >
                                                Action
                                              </button>
                                        </div>
                                  </div>
                                </div>
                              </div>
                          </div> <!--********MODAL START*********-->
               
                    </div> <!--********SM:FLEX-ROW END*********-->  
                  </div> <!--********ROUNDED-MD END*********-->
                </div>
          </div>
  
          <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div
              class="inline-block min-w-full overflow-hidden rounded-lg shadow"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Items
                    </th>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Type
                    </th>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Price
                    </th>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Stock
                    </th>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Sold
                    </th>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Description
                    </th>
                    <th
                      class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                    >
                      Date Created
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="user in users" :key="user.id">
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <div class="flex items-center">
  
                        <div class="ml-3">
                          <p class="text-gray-900 whitespace-nowrap">
                            {{ user.title }}
                          </p>
                        </div>
  
                      </div>
                    </td>
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-nowrap">{{ u.role }}</p>
                    </td>
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-nowrap">
                        {{ u.role }}
                      </p>
                    </td>
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-nowrap">{{ u.role }}</p>
                    </td>
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-nowrap">{{ u.role }}</p>
                    </td>
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-nowrap">{{ u.role }}</p>
                    </td>
  
                    <td
                      class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                    >
                      <p class="text-gray-900 whitespace-nowrap">{{ u.role }}</p>
                    </td>
  
                  </tr>
                </tbody>
              </table>
              <div
                class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
              >
                <span class="text-xs text-gray-900 xs:text-sm"
                  >Showing 1 to 4 of 50 Entries</span
                >
  
                <div class="inline-flex mt-2 xs:mt-0">
                  <button
                    class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
                  >
                    Prev
                  </button>
                  <button
                    class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
    </div>
  </template>

<script setup lang="ts">

import axios from 'axios';
import { onMounted, ref } from 'vue';

const open = ref(false);
// reactive state
let users = ref([]);
// mounted
onMounted(async () => {
  // get api from laravel backend
  await axios
    .get('http://127.0.0.1:8000/api/items')
    .then((res) => {
      // assign state users with response data
      users.value = res.data.data;
    })
    .catch((error) => {
      console.log(error.res.data);
    });
});
</script>
  
<!-- <script lang="ts">
import { defineComponent, ref } from "vue";
import { useItemStore } from "../stores/counter";

export default defineComponent({
  name: "SaveStore",
  setup() {
    const saveStore = useItemStore();
    const open = ref(false);

    return { saveStore, open };
  },
});
  </script>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useItemStore } from "../stores/counter";

export default defineComponent({
  name: "TodoSaveForm",
  data() {
    return {
      title: "",
      type: "",
      price: 0,
      stock: 0,
      description:"",
    };
  },
  setup() {
    const storeSave = useItemStore();
    const open = ref(false);
    const saveStore = useItemStore();

    return { saveStore, storeSave, open };
  },
  methods: {
    onSubmit(e: Event) {
      e.preventDefault();

      if (!this.title) {
        return;
      }

      // save data into store
      this.storeSave.addItems(this.title, this.type, this.price, this.stock, this.description,);
    },
  },
});



</script> -->

<!-- <script lang="ts">
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const quote = ref();
    const open = ref(false)

    axios.get('http://127.0.0.1:8000/api/items')
    .then(response => {
      quote.value = response
    })

    return {
      quote,
      open
    }
  }
}
</script> -->

<!-- <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  import { useTableData } from "../hooks/useTableData";
  
  export default defineComponent({
    setup() {
      const {
        simpleTableData,
        paginatedTableData,
        wideTableData,
      } = useTableData();
  
      const open = ref(false);
  
  
      return {
        simpleTableData,
        paginatedTableData,
        wideTableData,
        open,
      };
    },
  });
  
  
  </script> -->


  
  <style>
  .modal {
    transition: opacity 0.25s ease;
  }
  </style>


