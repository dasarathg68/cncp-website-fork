export default defineAppConfig({
  ui: {
    primary: "emerald",
    gray: "slate",
    colors: {
      primary: "emerald",
      neutral: "slate",
    },
    strategy: "merge",
    button: {
      default: {
        color: "emerald",
        variant: "solid",
      },
    },
    card: {
      base: "overflow-hidden",
      background: "bg-white dark:bg-gray-900",
      divide: "divide-gray-200 dark:divide-gray-800",
      ring: "ring-1 ring-gray-200 dark:ring-gray-800",
      shadow: "shadow-sm",
    },
    input: {
      base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
      background: "bg-white dark:bg-gray-900",
      ring: "ring-1 ring-inset ring-gray-200 dark:ring-gray-800 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400",
    },
    select: {
      base: "relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
      background: "bg-white dark:bg-gray-900",
      ring: "ring-1 ring-inset ring-gray-200 dark:ring-gray-800 focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400",
    },
    modal: {
      overlay: {
        background: "bg-gray-200/75 dark:bg-gray-800/75",
      },
      background: "bg-white dark:bg-gray-900",
    },
    notifications: {
      position: "top-right",
      background: "bg-white dark:bg-gray-900",
    },
  },
});
