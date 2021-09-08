import Vue from 'vue'
import TPagination from 'vue-tailwind/dist/t-pagination'
import VueTailwind from 'vue-tailwind'

const settings = {
    't-pagination': {
        component: TPagination,
        props: {
          classes: {
            wrapper: 'bg-gray flex mb-4 p-4 rounded-2xl shadow-sango_box space-x-1 text-center',
            element: 'w-8 h-8',
            activeElement: 'w-8 h-8',
            disabledElement: 'w-8 h-8',
            ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
            activeButton: 'border border-gray bg-amber font-bold w-full h-full rounded-2xl text-1xl text-gray transition duration-500 ease-in-out focus:outline-none',
            disabledButton: 'border border-thin_gray font-bold opacity-25 w-full h-full rounded-2xl text-1xl text-thin_gray cursor-not-allowed',
            button: 'border border-white font-bold hover:bg-amber hover:border-amber hover:text-gray rounded-2xl text-1xl text-white w-full h-full transition duration-500 ease-in-out focus:outline-none',
            ellipsis: ''
          }
        }
    }
}
Vue.use(VueTailwind, settings)