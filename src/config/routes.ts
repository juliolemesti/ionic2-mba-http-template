export const APP_ROUTES = {
  '_defaults': {
    'host': ' http://mtcu-mbamobi.rhcloud.com/rest/'
  },
  'visao': {
    'url': '/usuario/{idUsuario}/visao',
    'method': 'GET',
    'params': {
      'idUsuario': {
        'type': 'number',
        'required': true,
        'validation': ''
      }
    }
  },
};

export const APP_CONFIG = {
  backButtonText: '',
  scrollPadding: 'false',
  urlResolver: {
    dev: APP_ROUTES
  }
};
