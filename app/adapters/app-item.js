import ApplicationAdapter from './application';

export default class AppItemAdapter extends ApplicationAdapter {

    buildURL(...args) {
      return `/api/app-data/${args[1]}.json`;
    }
}
