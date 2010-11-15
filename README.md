# Uuid lets you generate and validate Universally Unique Identifiers.

In its simplest form, Uuid lets you generate raw UUID formatted strings:

    Uuid.raw();
    // -> '6fdf6ffced7794fa407ea7b86ed9e59d'

But it has a more robust API which lets you work with UUID's as objects. Let's
generate a new Uuid instance.

    var uuid = Uuid.create();

We've now got an object which we can work with programmatically. Lets check the
validity of our uuid using the built-in validator:

    Uuid.isUuid(uuid);
    // -> true
    
    Uuid.value;
    // -> '6fdf6ffced7794fa407ea7b86ed9e59d'

A handy bit of functionality is that its `toString` method returns the string
value, so you can do handy things like this:

    var itemUrl = "http://whatever.com/items/" + uuid;
    // -> 'http://whatever.com/items/6fdf6ffced7794fa407ea7b86ed9e59d'
    
If you need a placehold Uuid, or a value to represent a non-uuid, use the static
`EMPTY` property:

    Uuid.EMPTY;
    // -> '00000000000000000000000000000000'

Once you have a `Uuid` object, you can't change its value (thanks ES5!):

    uuid.value = "go suck it, uuid!"
    uuid.value;
    // -> '6fdf6ffced7794fa407ea7b86ed9e59d'

To instantiate a Uuid object using an existing UUID string, use the constructor:

    var uuid = new Uuid('6fdf6ffced7794fa407ea7b86ed9e59d');

You can check the equality of two different Uuid objects using the `equals`
instance method.

Compare a Uuid object to a UUID string:

    uuid.equals('6fdf6ffced7794fa407ea7b86ed9e59d');
    // -> true

Compare two Uuid objects:
    
    uuid.equals(new Uuid('6fdf6ffced7794fa407ea7b86ed9e59d'));
    // -> true

## Installation

You can use npm to install uuid: `npm install uuid`

## But what if I need a GUID, not a UUID?

There's also a [Guid](https://github.com/dandean/guid) library which has the
**exact** same functionality, but for GUID's:
[https://github.com/dandean/guid](https://github.com/dandean/guid)

