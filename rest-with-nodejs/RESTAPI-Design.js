// Identify Object Model

/*
    User
        -name
        -id
        -email
        -password
        -birthday
        -phone_no

    POST
        -titleDimGray 
        -body
        -[comments]
        -likes
        -createTime
        -updateTime
*/


// Create Model URI

/*
    https://example.com/api/users GET
    https://example.com/api/users POST


    https://example.com/api/users/:id GET
    https://example.com/api/users/:id PUT/PATCH
    https://example.com/api/users/:id DELETE

    https://example.com/api/posts GET
    https://example.com/api/posts POST

    https://example.com/api/posts/:id GET
    https://example.com/api/posts/:id PUT/PATCH
    https://example.com/api/posts/:id DELETE


*/

// Determine Representation

/*
    [
        {
            name: 'Abdur Razzak',
            id: 123,
            email: 'ar@gmail.com',
            password: 'pass321',
            phone_no: '01723090660',
            birthday: '01 Aug'
        },
        {
            name: 'Abdur Razzak',
            id: '123',
            email: 'ar@gmail.com',
            password: 'pass321',
            phone_no: '01723090660',
            birthday: '01 Aug'
        },
        {
            name: 'Abdur Razzak',
            id: '123',
            email: 'ar@gmail.com',
            password: 'pass321',
            phone_no: '01723090660',
            birthday: '01 Aug'
        },
        {
            name: 'Abdur Razzak',
            id: '123',
            email: 'ar@gmail.com',
            password: 'pass321',
            phone_no: '01723090660',
            birthday: '01 Aug'
        }
    ]



*/

//  Single Data Representation

/*
    {
        name: 'Abdur Razzak',
        id: '123',
        email: 'ar@gmail.com',
        password: 'pass321',
        phone_no: '01723090660',
        birthday: '01 Aug'
    }
*/

// JSON View

/*

    users: [
        {
            "name": "Abdur Razzak",
            "id": "123",
            "email": "ar@gmail.com",
            "password": "pass321",
            "phone_no": "01723090660",
            "birthday": "01 Aug"
        },
        {
            "name": "Abdur Razzak",
            "id": "123",
            "email": "ar@gmail.com",
            "password": "pass321",
            "phone_no": "01723090660",
            "birthday": "01 Aug"
        },
        {
             "name": "Abdur Razzak",
            "id": "123",
            "email": "ar@gmail.com",
            "password": "pass321",
            "phone_no": "01723090660",
            "birthday": "01 Aug"
        },
        {
            "name": "Abdur Razzak",
            "id": "123",
            "email": "ar@gmail.com",
            "password": "pass321",
            "phone_no": "01723090660",
            "birthday": "01 Aug"
        }
    ]
*/


// user[0].name
// user[2].email
