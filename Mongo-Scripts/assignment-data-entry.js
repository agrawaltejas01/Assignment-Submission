db.assignment.insertMany([
    {
        _id: "I.4",
        dept: 'IT',
        year: 4,
        subject: [

            {
                name: 'ML',
                assignment: [
                    {
                        number: 1,
                        title: "Develop a KNN model",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Create a book Recommendation Sysytem for library",
                        performanceDate: new Date()
                    }
                ]
            },

            {
                name: 'CO',
                assignment: [
                    {
                        number: 1,
                        title: "Implement Simplex Method",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Implement Min-Max Flow",
                        performanceDate: new Date()
                    }
                ]
            }

        ]

    },

    {
        _id: "I.3",
        dept: 'IT',
        year: 3,
        subject: [

            {
                name: 'SDM',
                assignment: [
                    {
                        number: 1,
                        title: "Create a Class Diagram for E-Commerce",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Create a Activity Diagram for E-Commerce",
                        performanceDate: new Date()
                    }
                ]
            },

            {
                name: 'DBMS',
                assignment: [
                    {
                        number: 1,
                        title: "Create a DBMS for E-Commerce",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Mini Project",
                        performanceDate: new Date()
                    }
                ]
            }

        ]

    },

    {
        _id: "C.4",
        dept: 'COMP',
        year: 4,
        subject: [

            {
                name: 'HCI',
                assignment: [
                    {
                        number: 1,
                        title: "Create a login page in HTML + CSS",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Use HCI in IOT mini project",
                        performanceDate: new Date()
                    }
                ]
            },

            {
                name: 'IOT',
                assignment: [
                    {
                        number: 1,
                        title: "Implement a fan regulator in Raspberry-pi",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Mini Project",
                        performanceDate: new Date()
                    }
                ]
            }

        ]

    },

    {
        _id: "C.3",
        dept: 'COMP',
        year: 3,
        subject: [

            {
                name: 'SDM',
                assignment: [
                    {
                        number: 1,
                        title: "Create a Class Diagram for E-Commerce",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Create a Activity Diagram for E-Commerce",
                        performanceDate: new Date()
                    }
                ]
            },

            {
                name: 'DBMS',
                assignment: [
                    {
                        number: 1,
                        title: "Create a DBMS for E-Commerce",
                        performanceDate: new Date()
                    },

                    {
                        number: 2,
                        title: "Mini Project",
                        performanceDate: new Date()
                    }
                ]
            }

        ]

    }

])