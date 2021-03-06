import moment from 'moment';

export const SERVICES_INFORMATION_1_1 = [
  {
    input_type: 'id',
    key: 'id',
    label: {
      en: 'id',
      es: 'cédula',
    },
    placeholder: {
      en: '222-210-882',
      es: '222-210-882',
    },
    required: true,
    rules: [
      { type: 'required' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'first_name',
    label: {
      en: 'first name',
      es: 'primer nombre',
    },
    placeholder: {
      en: 'jean paul',
      es: 'juan pablo',
    },
    required: true,
    rules: [
      { type: 'required' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'last_name',
    label: {
      en: 'apellidos',
      es: 'apellidos',
    },
    placeholder: {
      en: 'sotil pastor',
      es: 'sotil pastor',
    },
    required: true,
    rules: [
      { type: 'required' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'email',
    label: {
      en: 'correo eléctronico',
      es: 'correo eléctronico',
    },
    placeholder: {
      en: 'jean.sotil@gmail.com',
      es: 'jean.sotil@gmail.com',
    },
    required: true,
    rules: [
      { type: 'required' },
      { type: 'email' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'email',
  },
  {
    input_type: 'phone',
    key: 'phone',
    label: {
      en: 'télefono',
      es: 'télefono',
    },
    placeholder: {
      en: '(506) 8888-8888',
      es: '(506) 8888-8888',
    },
    required: true,
    rules: [
      { type: 'phone' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'divider',
    key: 'divider_1',
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
  },
];

export const SERVICES_INFORMATION_1_2 = [
  {
    input_type: 'multiselect',
    key: 'services',
    label: {
      en: 'servicios disponibles',
      es: 'servicios disponibles',
    },
    options: [],
    placeholder: {
      en: 'seleccionar servicio',
      es: 'seleccionar servicio',
    },
    required: true,
    rules: [
      { type: 'empty' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'date',
    key: 'date',
    label: {
      en: 'fecha',
      es: 'fecha',
    },
    minDate: moment(),
    required: true,
    rules: [
      { type: 'date' },
    ],
    size_lg: 6,
    size_md: 6,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'datetime',
    key: 'hours',
    label: {
      en: 'hora',
      es: 'hora',
    },
    required: false,
    rules: [],
    size_lg: 6,
    size_md: 6,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'input',
    key: 'message',
    label: {
      en: 'Tú mensaje',
      es: 'Tú mensaje',
    },
    multiline: true,
    placeholder: {
      en: 'Escribe tu mensaje aquí.',
      es: 'Escribe tu mensaje aquí.',
    },
    required: false,
    rows: 2,
    rules: [
      { type: 'required' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
  {
    input_type: 'divider',
    key: 'divider_2',
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
  },
  {
    input_type: 'checkbox',
    key: 'general_disclaimer',
    label: {
      en: 'Estoy deacuerdo con recibir información por parte de la clínica.',
      es: 'Estoy deacuerdo con recibir información por parte de la clínica.',
    },
    required: true,
    rules: [
      { type: 'check' },
    ],
    size_lg: 12,
    size_md: 12,
    size_sm: 12,
    type: 'text',
  },
];
