import JSONAPISerializer from "@ember-data/serializer/json-api";

export default class ApplicationSerializer extends JSONAPISerializer {
  primaryKey = "_id";

  normalizeArrayResponse(store, primaryModelClass, payload) {
    var normalizedRecords = [];
    payload = payload.data;
    payload.map(function(record) {
      var id = record["app_id"];
      delete record.app_id;
      var normalizedRecord = {
        type: primaryModelClass.modelName,
        id: id,
        attributes: record
      };
      normalizedRecords.push(normalizedRecord);
    });

    normalizedRecords = {
      data: normalizedRecords
    };
    return normalizedRecords;
  }

  serialize(snapshot, options) {
    let json = super.serialize(...arguments);
    json.data.id = new Date().valueOf();
    return json;
  }
}
