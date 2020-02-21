import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {

    var normalizedRecords = [];
    payload = payload.data;
    payload.map(function (record) {
      var id = record["app_id"];
      console.log("record.appId", record)
      delete record.app_id;
      var normalizedRecord = {
        'type': primaryModelClass.modelName,
        'id': id,
        'attributes': record
      };
      normalizedRecords.push(normalizedRecord);
    });

    normalizedRecords = {
      data: normalizedRecords
    };
    return normalizedRecords;

  }
}
