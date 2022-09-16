 // Like the "config" function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { config, list } from '@keystone-6/core';        
        

 // We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.

import {
    // Scalar types
    checkbox,
    integer,
    json,
    float,
    password,
    select,
    text,
    timestamp,

    // Relationship type
    relationship,

    // Virtual type
    virtual,

    // File types
    file,
    image,
} from '@keystone-6/core/fields';
        

 // The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
import { document } from '@keystone-6/fields-document';
        

 // We are using Typescript, and we want our types experience to be as strict as it can be.
// By providing the Keystone generated `Lists` type to our lists object, we refine
// our types to a stricter subset that is type-aware of other lists in our schema
// that Typescript cannot easily infer.
import { Lists } from '.keystone/types';

export const lists: Lists = {
    User: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                email: text({
                    isFilterable: true,
                    isIndexed: 'unique',
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                password: password({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: false,
                        rejectCommon: true
                    }
                }),
                phone: text({
                    isFilterable: false,
                    isOrderable: false,
                    db: {
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                identification: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                isEmailValidated: checkbox({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    db: {}
                }),
                active: checkbox({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    db: {}
                }),
                lastLogin: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    db: {
                        isNullable: true,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: true,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: true,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                permissionGroupsAuthored: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "PermissionGroupsAuthoredToUser"
                    }
                }),
                productTypes: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductType",
                    many: true,
                    db: {
                        relationName: "ProductTypeToUser"
                    }
                }),
                attributes: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Attribute",
                    many: true,
                    db: {
                        relationName: "AttributeToUser"
                    }
                }),
                permissionGroups: relationship({
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "UserToPermissionGroup"
                    }
                }),
                publishers: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Publisher",
                    many: true,
                    db: {
                        relationName: "PublisherToUser"
                    }
                }),
                collections: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Collection",
                    many: true,
                    db: {
                        relationName: "CollectionToUser"
                    }
                }),
                products: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Product",
                    many: true,
                    db: {
                        relationName: "ProductToUser"
                    }
                }),
                productsVariants: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "ProductVariantToUser"
                    }
                }),
                pricings: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Pricing",
                    many: true,
                    db: {
                        relationName: "PricingToUser"
                    }
                }),
                discounts: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Discount",
                    many: true,
                    db: {
                        relationName: "DiscountToUser"
                    }
                }),
                channels: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "ChannelToUser"
                    }
                }),
                warehouses: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Warehouse",
                    many: true,
                    db: {
                        relationName: "UserToWarehouse"
                    }
                })
            }
        }),
    PermissionGroup: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                user: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: true,
                    db: {
                        relationName: "PermissionGroupsToUser"
                    }
                }),
                permission: relationship({
                    ref: "Permission",
                    many: true,
                    db: {
                        relationName: "PermissionGroupToPermission"
                    }
                })
            }
        }),
    Permission: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                permissionGroup: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "PermissionToPermissionGroup"
                    }
                })
            }
        }),
    Product: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                defaultAttributesValues: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                isPublished: checkbox({
                    db: {}
                }),
                brand: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                productVariant: relationship({
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "ProductToProductVariant"
                    }
                }),
                productType: relationship({
                    ref: "ProductType",
                    many: false,
                    db: {
                        relationName: "ProductToProductType"
                    }
                }),
                tag: relationship({
                    ref: "Tag",
                    many: true,
                    db: {
                        relationName: "ProductToTag"
                    }
                }),
                category: relationship({
                    ref: "Category",
                    many: true,
                    db: {
                        relationName: "ProductToCategory"
                    }
                }),
                collection: relationship({
                    ref: "Collection",
                    many: true,
                    db: {
                        relationName: "ProductToCollection"
                    }
                })
            }
        }),
    ProductVariant: list({
            fields: {
                sku: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                extensionName: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                barcode: integer({
                    db: {
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                imagesUrl: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                mediaUrl: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                attributesVariantsValues: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                description: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                weight: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                revenue: integer({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                product: relationship({
                    ref: "Product",
                    many: false,
                    db: {}
                }),
                pricing: relationship({
                    ref: "Pricing",
                    many: false,
                    db: {}
                }),
                productPayment: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductPayment",
                    many: true,
                    db: {
                        relationName: "ProductVariantToProductPayment"
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                channel: relationship({
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "ProductVariantToChannel"
                    }
                }),
                fullfilment: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Fullfilment",
                    many: true,
                    db: {
                        relationName: "ProductVariantToFullfilment"
                    }
                }),
                productStock: relationship({
                    ref: "ProductStock",
                    many: false,
                    db: {}
                })
            }
        }),
    Pricing: list({
            fields: {
                currency: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                listPrice: text({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                costPrice: text({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                status: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                startsAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                endsAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                productVariant: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "PricingToProductVariant"
                    }
                }),
                discount: relationship({
                    ref: "Discount",
                    many: true,
                    db: {
                        relationName: "PricingToDiscount"
                    }
                }),
                channel: relationship({
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "PricingToChannel"
                    }
                })
            }
        }),
    Discount: list({
            fields: {
                code: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                isDisabled: checkbox({
                    db: {}
                }),
                usageLimit: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                status: checkbox({
                    db: {}
                }),
                priority: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                startsAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                endsAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                pricing: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Pricing",
                    many: true,
                    db: {
                        relationName: "DiscountToPricing"
                    }
                }),
                channel: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "DiscountToChannel"
                    }
                }),
                discountRule: relationship({
                    ref: "DiscountRule",
                    many: true,
                    db: {
                        relationName: "DiscountToDiscountRule"
                    }
                })
            }
        }),
    DiscountRule: list({
            fields: {
                type: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                value: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                allocation: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                description: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                conditions: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                discount: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Discount",
                    many: false,
                    db: {}
                })
            }
        }),
    ProductType: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                isShippingRequired: checkbox({
                    db: {}
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                product: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Product",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                attribute: relationship({
                    ref: "Attribute",
                    many: true,
                    db: {
                        relationName: "ProductTypeToAttribute"
                    }
                })
            }
        }),
    Attribute: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                choices: text({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                isRequired: checkbox({
                    db: {}
                }),
                isVisible: checkbox({
                    db: {}
                }),
                isFilterable: checkbox({
                    db: {}
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                productType: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductType",
                    many: true,
                    db: {
                        relationName: "AttributeToProductType"
                    }
                })
            }
        }),
    ProductPayment: list({
            fields: {
                paymentMethod: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                transaction: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                order: relationship({
                    ref: "Order",
                    many: false,
                    db: {}
                }),
                productVariant: relationship({
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "ProductPaymentToProductVariant"
                    }
                })
            }
        }),
    Tag: list({
            ui: {
                labelField: "value"     
            },
            fields: {
                value: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                product: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Product",
                    many: true,
                    db: {
                        relationName: "TagToProduct"
                    }
                })
            }
        }),
    Category: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                parentCategory: relationship({
                    ref: "Category",
                    many: false,
                    db: {}
                }),
                childrenCategories: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Category",
                    many: true,
                    db: {
                        relationName: "ParentCategory"
                    }
                }),
                product: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Product",
                    many: true,
                    db: {
                        relationName: "CategoryToProduct"
                    }
                })
            }
        }),
    Collection: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                isVisible: checkbox({
                    db: {}
                }),
                description: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                product: relationship({
                    ref: "Product",
                    many: true,
                    db: {
                        relationName: "CollectionToProduct"
                    }
                })
            }
        }),
    Publisher: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                logo: text({
                    db: {}
                }),
                phone: integer({
                    db: {
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                country: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                description: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                socialMedias: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                attributes: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Attribute",
                    many: true,
                    db: {
                        relationName: "PublisherToAttribute"
                    }
                }),
                productsTypes: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductType",
                    many: true,
                    db: {
                        relationName: "PublisherToProductType"
                    }
                }),
                products: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Product",
                    many: true,
                    db: {
                        relationName: "PublisherToProduct"
                    }
                }),
                permissionGroups: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "PublisherToPermissionGroup"
                    }
                }),
                commisions: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Commision",
                    many: true,
                    db: {
                        relationName: "PublisherToCommision"
                    }
                }),
                warehouses: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Warehouse",
                    many: true,
                    db: {
                        relationName: "WarehouseToPublisher"
                    }
                }),
                discount: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Discount",
                    many: true,
                    db: {
                        relationName: "PublisherToDiscount"
                    }
                }),
                channels: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "PublisherToChannel"
                    }
                }),
                collection: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Collection",
                    many: true,
                    db: {
                        relationName: "PublisherToCollection"
                    }
                })
            }
        }),
    Commision: list({
            fields: {
                fixCost: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                percentageCost: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                custom_func_cost: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                })
            }
        }),
    Channel: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                isActive: checkbox({
                    db: {}
                }),
                currencyCode: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                channelPaymentMethod: relationship({
                    ref: "ChannelPaymentMethod",
                    many: true,
                    db: {
                        relationName: "ChannelToChannelPaymentMethod"
                    }
                }),
                ProductVariant: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "ChannelToProductVariant"
                    }
                }),
                Pricing: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Pricing",
                    many: true,
                    db: {
                        relationName: "ChannelToPricing"
                    }
                }),
                ShippingMethods: relationship({
                    ref: "ShippingMethod",
                    many: true,
                    db: {
                        relationName: "ChannelToShippingMethod"
                    }
                }),
                Discounts: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Discount",
                    many: true,
                    db: {
                        relationName: "ChannelToDiscount"
                    }
                }),
                Warehouse: relationship({
                    ref: "Warehouse",
                    many: true,
                    db: {
                        relationName: "ChannelToWarehouse"
                    }
                })
            }
        }),
    Warehouse: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                slug: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                shippingZones: json({
                    db: {}
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                productStock: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductStock",
                    many: true,
                    db: {
                        relationName: "WarehouseToProductStock"
                    }
                }),
                channel: relationship({
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "WarehouseToChannel"
                    }
                }),
                Address: relationship({
                    ref: "Address",
                    many: false,
                    db: {}
                })
            }
        }),
    Order: list({
            fields: {
                status: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                subtotal: text({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                total: text({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                balancedTotal: text({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                productPayment: relationship({
                    ref: "ProductPayment",
                    many: true,
                    db: {
                        relationName: "ProductPaymentToOrder"
                    }
                }),
                ShippingCarrier: relationship({
                    ref: "ShippingCarrier",
                    many: false,
                    db: {}
                })
            }
        }),
    ShippingCarrier: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                currency: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                amount: text({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                order: relationship({
                    ref: "Order",
                    many: false,
                    db: {}
                }),
                Fullfilment: relationship({
                    ref: "Fullfilment",
                    many: true,
                    db: {
                        relationName: "ShippingCarrierToFullfilment"
                    }
                })
            }
        }),
    Fullfilment: list({
            fields: {
                email: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                shippedAt: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                status: checkbox({
                    db: {}
                }),
                shippingCarrier: relationship({
                    ref: "ShippingCarrier",
                    many: false,
                    db: {}
                }),
                productVariant: relationship({
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "FullfilmentToProductVariant"
                    }
                }),
                Tracking: relationship({
                    ref: "Tracking",
                    many: false,
                    db: {}
                })
            }
        }),
    Tracking: list({
            fields: {
                trackingNumber: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                url: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                createdAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    defaultValue:{
                        kind:'now'
                    },
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                fullfilment: relationship({
                    ref: "Fullfilment",
                    many: false,
                    db: {}
                })
            }
        }),
    ChannelPaymentMethod: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                isAvailable: checkbox({
                    db: {}
                }),
                channel: relationship({
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "ChannelPaymentMethodToChannel"
                    }
                })
            }
        }),
    Address: list({
            ui: {
                labelField: "streetAdress"
            },
            fields: {
                country: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                countryArea: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                city: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                zipCode: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                streetAdress: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                extraDetails: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                warehouse: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Warehouse",
                    many: false,
                    db: {}
                })
            }
        }),
    ShippingMethod: list({
            fields: {
                name: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                currency: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                amount: float({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                requeriments: json({
                    db: {}
                }),
                channel: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Channel",
                    many: true,
                    db: {
                        relationName: "ShippingMethodToChannel"
                    }
                })
            }
        }),
    ProductStock: list({
            fields: {
                sku: text({
                    isFilterable: true,
                    isOrderable: true,
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                stock: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                warehouse: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "Warehouse",
                    many: false,
                    db: {}
                }),
                productVariant: relationship({
                    ui: {
                        createView: {
                            fieldMode: 'hidden'
                        },
                        itemView: {
                            fieldMode: 'hidden'
                        }
                    },
                    ref: "ProductVariant",
                    many: true,
                    db: {
                        relationName: "ProductStockToProductVariant"
                    }
                })
            }
        })
};
