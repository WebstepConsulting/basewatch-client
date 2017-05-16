/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.exportSymbol('proto.dt.apigw.v1.Image', null, global);
goog.exportSymbol('proto.dt.apigw.v1.Period', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dt.apigw.v1.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dt.apigw.v1.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dt.apigw.v1.Image.displayName = 'proto.dt.apigw.v1.Image';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dt.apigw.v1.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.dt.apigw.v1.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dt.apigw.v1.Image} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dt.apigw.v1.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    largeUrl: msg.getLargeUrl(),
    mediumUrl: msg.getMediumUrl(),
    smallUrl: msg.getSmallUrl()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dt.apigw.v1.Image}
 */
proto.dt.apigw.v1.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dt.apigw.v1.Image;
  return proto.dt.apigw.v1.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dt.apigw.v1.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dt.apigw.v1.Image}
 */
proto.dt.apigw.v1.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLargeUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMediumUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmallUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dt.apigw.v1.Image} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dt.apigw.v1.Image.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dt.apigw.v1.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dt.apigw.v1.Image.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLargeUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getMediumUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getSmallUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dt.apigw.v1.Image} The clone.
 */
proto.dt.apigw.v1.Image.prototype.cloneMessage = function() {
  return /** @type {!proto.dt.apigw.v1.Image} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string large_url = 1;
 * @return {string}
 */
proto.dt.apigw.v1.Image.prototype.getLargeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.dt.apigw.v1.Image.prototype.setLargeUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string medium_url = 2;
 * @return {string}
 */
proto.dt.apigw.v1.Image.prototype.getMediumUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.dt.apigw.v1.Image.prototype.setMediumUrl = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string small_url = 3;
 * @return {string}
 */
proto.dt.apigw.v1.Image.prototype.getSmallUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.dt.apigw.v1.Image.prototype.setSmallUrl = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dt.apigw.v1.Period = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dt.apigw.v1.Period, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dt.apigw.v1.Period.displayName = 'proto.dt.apigw.v1.Period';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dt.apigw.v1.Period.prototype.toObject = function(opt_includeInstance) {
  return proto.dt.apigw.v1.Period.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dt.apigw.v1.Period} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dt.apigw.v1.Period.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: (f = msg.getStart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    end: (f = msg.getEnd()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dt.apigw.v1.Period}
 */
proto.dt.apigw.v1.Period.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dt.apigw.v1.Period;
  return proto.dt.apigw.v1.Period.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dt.apigw.v1.Period} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dt.apigw.v1.Period}
 */
proto.dt.apigw.v1.Period.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStart(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dt.apigw.v1.Period} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dt.apigw.v1.Period.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dt.apigw.v1.Period.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dt.apigw.v1.Period.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getStart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getEnd();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dt.apigw.v1.Period} The clone.
 */
proto.dt.apigw.v1.Period.prototype.cloneMessage = function() {
  return /** @type {!proto.dt.apigw.v1.Period} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Timestamp start = 1;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.dt.apigw.v1.Period.prototype.getStart = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.dt.apigw.v1.Period.prototype.setStart = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dt.apigw.v1.Period.prototype.clearStart = function() {
  this.setStart(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dt.apigw.v1.Period.prototype.hasStart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp end = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.dt.apigw.v1.Period.prototype.getEnd = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.dt.apigw.v1.Period.prototype.setEnd = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dt.apigw.v1.Period.prototype.clearEnd = function() {
  this.setEnd(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dt.apigw.v1.Period.prototype.hasEnd = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.dt.apigw.v1);