interface ButtonProps {
  svg?: any
  text: any
  callback?: any
  callBackData?: any
}

const ButtonWithLogo = (props: ButtonProps) => {
  const svg = props.svg
  const text = props.text
  const callback = props.callback
  const data = props.callBackData
  return (
    <button
      onClick={() => callback(data)}
      type="button"
      className="font-sans text-sm text-gray-900 bg-white hover:bg-gray-100
      border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100
      font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
      {svg}
      {text}
    </button>
  )
}

export { ButtonWithLogo }