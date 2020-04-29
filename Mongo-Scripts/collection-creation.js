db.createCollection('teacher', {
    validator : 
    {
        $jsonSchema: 
        {
            bsonType : 'object',
            required: ['_id', 'name', 'dept', 'teaches'],
            properties: 
            {
                _id : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },                                
                
                name : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },

                dept : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                }, 

                teaches :
                {
                    bsonType : 'array',
                    description: 'must be an array and is required',
                    items : 
                    {
                        bsonType : 'object',
                        required : ['batchId', 'sub'],
                        properties :
                        {
                            batchId :
                            {
                                bsonType : 'string',
                                description : 'must be an string and is required'
                            }
                        }

                    }
                }               
            }
        }
    }
})

db.createCollection('student', {
    validator : 
    {
        $jsonSchema: 
        {
            bsonType : 'object',
            required: ['_id', 'roll', 'name', 'dept', 'year', 'class', 'batch' ],
            properties: 
            {
                _id : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },
                
                roll : 
                {
                    bsonType : 'int',
                    description : 'must be int and required'
                },
                
                name : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },

                dept : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },
                
                year : 
                {
                    bsonType : 'int',
                    description : 'must be string and required'
                },
                
                class : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },
                
                batch : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },

                marks :
                {
                    bsonType : 'array',
                    description : 'must be array and required',
                    items :
                    {
                        bsonType : 'object',
                        required : ['assignment', 'teacher', 'performanceDate', 'submissionDate', 'link', 'marks'],
                        properties : 
                        {
                            assignment : 
                            {
                                bsonType : 'string',
                                description : 'must be string and required'
                            },

                            teacher : 
                            {
                                bsonType : 'string',
                                description : 'must be string and required'
                            },

                            performanceDate : 
                            {
                                bsonType : 'date',
                                description : 'must be date and required'
                            },

                            submissionDate : 
                            {
                                bsonType : 'date',
                                description : 'must be date and required'
                            },

                            link : 
                            {
                                bsonType : 'string',
                                description : 'must be string and required'
                            },

                            marks : 
                            {
                                bsonType : 'int',
                                description : 'must be int and required'
                            },

                        }
                    }
                }
            }
        }
    }
})

db.createCollection('assignment', {
    validator : 
    {
        $jsonSchema: 
        {
            bsonType : 'object',
            required: ['_id', 'subject', 'name', 'dept', 'year', 'number'],
            properties: 
            {
                _id : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },                                
                
                subject : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },
                
                name : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                },

                dept : 
                {
                    bsonType : 'string',
                    description : 'must be string and required'
                }, 
                
                year : 
                {
                    bsonType : 'int',
                    description : 'must be int and required'
                },
                
                number : 
                {
                    bsonType : 'int',
                    description : 'must be int and required'
                },               
            }
        }
    }
})


