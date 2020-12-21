import {environment} from '../../environments/environment';

export default {

  TIME_TO_CLOSE_SHORT_INFO_DIALOG: 2.5 * 1000,
  TIME_TO_CLOSE_DIALOG: 5 * 1000,
  DIALOG_WIDTH: '300px',
  DIALOG_HEIGHT: '300px',
  CONFIRMATION_DIALOG_WIDTH: '320px',

  STORAGE_FIRST_NAME_KEY: 'xuWuMh68mTNgmN6vFDtg',
  STORAGE_LAST_NAME_KEY: 'ljkljhkajshdhaskjdha',
  STORAGE_EMAIL_KEY: 'CsViqEbWPVI9IrXVE78x',
  STORAGE_LOGIN_KEY: 'sqtfU0dHbUYIbqzBILyX',
  STORAGE_USER_NAME_KEY: 'oiwueonznkjsdadasds',

  STORAGE_ACCESS_TOKEN_KEY: '7zYqrnlPlt06XxzpECgl',
  STORAGE_ACCESS_TOKEN_EXPIRY_KEY: 'Wbl2pnjDmEi23yO5ALoU',
  STORAGE_LANGUAGE_KEY: 'xbrwjYw86htlM2x5Mpj3',
  STORAGE_AUTHORITIES_KEY: 'sili8cpaTd59oOHDtF0S',

  STORAGE_CATEGORY: 'frYqrnlPlt06XxzpECgl',
  STORAGE_BASKET_ITEMS: 'lkassdlhasdijkmmwsw',

  SELECTED_CAT: 'oeitueowr',
  BACKEND_API_ENDPOINTS: {
    AUTHENTICATE: environment.backendUrl + '/Token',
    FIND_USER: environment.backendUrl + '/user/signin',
    BSP_GET_SITE_DETAILS:environment.backendUrl + '/site/sites/',
    BSP_GET_CATS: environment.backendUrl + '/cat/cats',
    BSP_GET_ITEMS: environment.backendUrl + '/cat/items',
    BSP_GET_CAT_ITEM_DETAILS: environment.backendUrl + '/cat/itemdetailsByCat/',
    BSP_GET_ITEM_AVAILABILITY:
      environment.backendUrl + '/ias/item-availability/',
    BSP_PUT_ITEM_PRICE: environment.backendUrl + '/cat/item-prices',
    BSP_GET_ITEMDETAILS: environment.backendUrl + '/cat/itemdetailsById/',
    BSP_PUT_GENERATEXMLFILE: environment.backendUrl + '/generateItemsXML/',
    BSP_PUT_EXPORTFILETOSITE: environment.backendUrl + '/sendXMLToStore',
  },
};
