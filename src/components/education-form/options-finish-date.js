export const optionsFinishDate = {
  title: 'Finalización',
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: 'Clear',
  maxDate: new Date('2030-01-01'),
  minDate: new Date('1950-01-01'),
  //   theme: {
  //     background: 'white',
  //     todayBtn: 'a',
  //     clearBtn: 'a',
  //     icons: 'a',
  //     text: 'a',
  //     disabledText: 'bg-red-500',
  //     input: 2,
  //     inputIcon: 'a',
  //     selected: 'a'
  //   },
  icons: {
    prev: () => <span>Back</span>,
    next: () => <span>Next</span>
  },
  datepickerClassNames: 'w-96 relative ml-10 -top-64',
  defaultDate: new Date('2024-05-05'),
  language: 'es',
  disabledDates: [],
  weekDays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Seleccionar'
  //   inputDateFormatProp: {
  //     day: 'numeric',
  //     month: 'long',
  //     year: 'numeric'
  //   }
}
