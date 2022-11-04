
<template>

<h3 class="text-3xl font-mono font-medium text-gray-700">Product List</h3>

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
                         
                    </div> <!--********SM:FLEX-ROW END*********-->  
                  </div> <!--********ROUNDED-MD END*********-->
                </div>
          </div>



  <div class="flex flex-col mt-8">
        <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    ID
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Plant name
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Plant Type
                  </th>
                  <th
                    class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"
                  >
                    Stock
                  </th>
                  <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                </tr>
              </thead>
  
              <tbody class="bg-white">
                <tr v-for="(u, index) in users" :key="index">
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="flex items-center">  
                      <div class="ml-4">
                        <div class="text-sm font-medium leading-5 text-gray-900">
                          {{ u.name }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ u.email }}
                        </div>
                      </div>
                    </div>
                  </td>
  
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.title }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ u.title2 }}
                    </div>
                  </td>
  
                  <td
                    class="px-6 py-4 border-b border-gray-200 whitespace-nowrap"
                  >
                    <span
                      class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >{{ u.status }}</span
                    >
                  </td>
  
                  <td
                    class="px-6 py-4 text-sm leading-5 text-gray-500 border-b border-gray-200 whitespace-nowrap"
                  >
                    {{ u.role }}
                  </td>
  
                  <td
                    class="px-6 py-4 text-sm font-medium leading-5 text-right border-b border-gray-200 whitespace-nowrap"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  
  interface User {
    name: string;
    email: string;
    title: string;
    title2: string;
    status: string;
    role: string;
  }
  
  export default defineComponent({
    setup() {
      const testUser: User = {
        name: "John Doe",
        email: "john@example.com",
        title: "Software Engineer",
        title2: "Web dev",
        status: "Active",
        role: "Owner",
      };
  
      const users = ref<User[]>([...Array(10).keys()].map(() => testUser));
  
      return {
        users, 
      };
    },
  });
  </script>

<!-- <script lang="ts">
import axios from 'axios';
import { ref } from 'vue';

export default {

  data() {
    return{
      title: "",
      type: "",
    };
  },
  setup() {
    const quote = ref("");

    axios.get('http://127.0.0.1:8000/api/items')
    .then(response => {
      quote.value = response.data.data
    })

    return {
      quote
    }
  }
}
</script> -->

