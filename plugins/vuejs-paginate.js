import Vue from 'vue'
import TPagination from 'vue-tailwind/dist/t-pagination'
import VueTailwind from 'vue-tailwind'

const settings = {
    't-pagination': {
        component: TPagination,
        props: {
          classes: {
            wrapper: 'bg-white flex mt-10 px-7 space-x-2 text-center',
            element: 'w-14 h-14',
            activeElement: 'w-14 h-14',
            disabledElement: 'w-14 h-14',
            ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
            activeButton: 'border border-gray bg-gray font-bold w-full h-full rounded-2xl text-1xl text-white hover:bg-amber hover:border-amber hover:text-gray transition duration-500 ease-in-out focus:outline-none',
            disabledButton: 'border border-gray-200 font-bold opacity-25 w-full h-full rounded-2xl text-1xl cursor-not-allowed',
            button: 'border border-gray-200 font-bold hover:bg-amber hover:border-amber rounded-2xl text-1xl w-full h-full transition duration-500 ease-in-out focus:outline-none',
            ellipsis: ''
          }
        }
    }
}
Vue.use(VueTailwind, settings)