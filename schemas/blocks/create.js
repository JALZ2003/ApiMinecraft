import joi from 'joi-oid';

export default joi.object({
    name: joi.string().required().min(3).messages({
        'any.required': 'Name is required!!',
        'string.min': 'Name is to short!!',
        'any.string': 'Name is String!!'
    }),
    namespacedId: joi.string().required().min(3).messages({
        'any.required': 'NamespacedId is required!!',
        'string.min': 'NamespacedId is to short!!',
        'any.string': 'NamespacedId is String!!'
    }),
    description: joi.string().required().min(3).messages({
        'any.required': 'Description is required!!',
        'string.min': 'Description is to short!!',
        'any.string': 'Description is String!!'
    }),
    image: joi.string().required().uri().messages({
        'any.required': 'Image is required!!',
        'string.min': 'Image is to short!!',
        'string.uri': 'Image is not url!!',
        'any.string': 'Image is String!!'
    }),
    item: joi.objectId().required().messages({
        'any.required': 'Item is required!!',
        'any.objectId': 'Item is ID!!'
    }),
    tool: joi.string().required().min(3).messages({
        'any.required': 'Name is required!!',
        'string.min': 'Name is to short!!',
        'any.string': 'Name is String!!'
    }),
    flammable: joi.boolean().required().messages({
        'any.required': 'Flammable is required!!',
        'any.boolean': 'Flammable is boolean!!'
    }),
    transparent: joi.boolean().required().messages({
        'any.required': 'Transparent is required!!',
        'any.boolean': 'Transparent is boolean!!'
    }),
    luminance: joi.number().required().messages({
        'any.required': 'Luminance is required!!',
        'any.number': 'Luminance is a number!!'
    }),
    blastResistance: joi.number().required().messages({
        'any.required': 'BlastResistance is required!!',
        'any.number': 'BlastResistance is number!!',
    }),
    colors: joi.array().required().messages({
        'any.required': 'Colors is required!!',
        'any.array': 'colors is array!!'
    })
});