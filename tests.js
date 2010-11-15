var Uuid = require("./uuid-lib"),
    Assert = require("assert");

var empty = Uuid.EMPTY,
    uuid = Uuid.create();
    raw = Uuid.raw();

Assert.equal('00000000000000000000000000000000', empty, 'Empty UUID is not the correct value.');
Assert.ok(Uuid.isUuid(empty), "EMPTY should be a valid UUID.");
Assert.ok(Uuid.isUuid(uuid), "Uuid object should be a valid UUID");
Assert.ok(Uuid.isUuid(raw), "UUID string should be a valid UUID");
Assert.ok(uuid instanceof Uuid, "Uuid instance should be instanceof Uuid.");
Assert.ok((raw instanceof Uuid) == false, "Result of raw() should not be instanceof Uuid.");
Assert.ok(Object.prototype.toString.call(raw) == '[object String]', "Result of raw() should be a string");