import ApplicationSerializer from './application';

export default class AppItemSerializer extends ApplicationSerializer {

  normalizeResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    return {
      ...payload
    }
  }
}
