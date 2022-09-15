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
                        isRequired: true
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
                        isRequired: true
                    }
                }),
                password: password({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true,
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
                        isNullable: true
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                isEmailValidated: checkbox({
                    db: {}
                }),
                active: checkbox({
                    db: {}
                }),
                lastLogin: timestamp({
                    db: {
                        isNullable: true,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                createdAt: timestamp({
                    db: {
                        isNullable: true,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                updatedAt: timestamp({
                    db: {
                        isNullable: true,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: false
                    }
                }),
                // userPermissionGroups: relationship({
                //     ref: "UserPermissionGroup",
                //     many: true,
                //     db: {
                //         relationName: "UserToUserPermissionGroup"
                //     }
                // }),
                permissionGroup: relationship({
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "UserToPermissionGroup"
                    }
                }),
                publishers: relationship({
                    ref: "Publisher",
                    many: true,
                    db: {
                        relationName: "PublisherToUser"
                    }
                }),
            }
        }),
    // UserPermissionGroup: list({
    //         fields: {
    //             user: relationship({
    //                 ref: "User",
    //                 many: false,
    //                 db: {}
    //             }),
    //             permissionGroup: relationship({
    //                 ref: "PermissionGroup",
    //                 many: false,
    //                 db: {}
    //             })
    //         }
    //     }),
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
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ref: "User",
                    many: false,
                    db: {}
                }),
                publisher: relationship({
                    ref: "Publisher",
                    many: false,
                    db: {}
                }),
                // userPermissionGroup: relationship({
                //     ref: "UserPermissionGroup",
                //     many: true,
                //     db: {
                //         relationName: "PermissionGroupToUserPermissionGroup"
                //     }
                // }),
                user: relationship({
                    ref: "User",
                    many: true,
                    db: {
                        relationName: "PermissionGroupToUser"
                    }
                }),
                permission: relationship({
                    ref: "Permission",
                    many: true,
                    db: {
                        relationName: "PermissionGroupToPermissionGroup"
                    }
                })
            }
        }),
    // PermissionGroupPermission: list({
    //         fields: {
    //             permissionGroup: relationship({
    //                 ref: "PermissionGroup",
    //                 many: false,
    //                 db: {}
    //             }),
    //             permission: relationship({
    //                 ref: "Permission",
    //                 many: false,
    //                 db: {}
    //             })
    //         }
    //     }),
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
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "PermissionToPermissionGroup"
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
                logo: json({
                    db: {}
                }),
                phone: integer({
                    db: {
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
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
                        isNullable: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                socialMedias: text({
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
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                updatedAt: timestamp({
                    db: {
                        isNullable: false,
                        updatedAt: false
                    },
                    validation: {
                        isRequired: true
                    }
                }),
                authorUser: relationship({
                    ref: "User",
                    many: false,
                    db: {}
                }),
                permissionGroups: relationship({
                    ref: "PermissionGroup",
                    many: true,
                    db: {
                        relationName: "PermissionGroupToPublisher"
                    }
                }),
                commisions: relationship({
                    ref: "Commision",
                    many: false,
                    db: {
                        relationName: "CommisionToPublisher"
                    }
                }),
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
};
