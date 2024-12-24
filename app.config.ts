export default defineAppConfig({
  ui: {
    primary: 'amber',
    accordion: {
      container: 'border-b border-white',
      item: {
        size: 'text-md',
        color: 'text-gray-300',
        padding: 'px-0 pb-5',
      },
      transition: {
        enterActiveClass: 'duration-500',
        leaveActiveClass: 'duration-500',
      },
      default: {
        class: 'pt-8 pb-4 px-0 mb-5 w-full bg-transparent text-xl font-semibold',
      },
    },
    button: {
      icon: {
        size: {
          xl: 'h-8 w-8',
        },
      },
    },
  },
})
