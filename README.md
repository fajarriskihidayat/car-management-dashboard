# ERD
![Untitled](https://github.com/fajarriskihidayat/car-management-dashboard/assets/113827933/820a7b0b-cfd1-4932-972f-5b97ae58140a)

# Rest API

The REST API to the example web is described below.

## Table car_type

### Request GET ALL

`GET v1/cars/types/all`

### Response GET ALL

    {
        "data": [
            {
                "id": 1,
                "type": "small"
            },
            {
                "id": 2,
                "type": "medium"
            },
            {
                "id": 8,
                "type": "large"
            }
        ],
        "message": "Get all type"
    }


### Request GET BY ID

`GET v1/cars/types/:id`

### Response GET BY ID

    {
        "data": [
            {
                "id": 1,
                "type": "small"
            }
        ],
        "message": "Get type by Id"
    }


### Request POST

`POST v1/cars/types/`

    {
        "type": "extra large"
    }

### Response POST

    {
        "data": {
            "type": "extra large",
            "id": 9
        },
        "message": "Created type success"
    }


### Request PUT

`PUT v1/cars/types/:id`

    {
        "type": "extra large large"
    }

### Response PUT

    {
        "data": {
            "updated": 1
        },
        "message": "Update type success"
    }


### Request DELETE

`DELETE v1/cars/types/:id`

### Response DELETE

    {
        "data": {
            "deleted": 1
        },
        "message": "Delete type success"
    }


## Table car_brand

### Request GET ALL

`GET v1/cars/brands/all`

### Response GET ALL

    {
        "data": [
            {
                "id": 1,
                "name": "Avanza"
            },
            {
                "id": 3,
                "name": "Brio"
            }
        ],
        "message": "Get all name"
    }


### Request GET BY ID

`GET v1/cars/brands/:id`

### Response GET BY ID

    {
        "data": [
            {
                "id": 1,
                "name": "Avanza"
            }
        ],
        "message": "Get name by Id"
    }


### Request POST

`POST v1/cars/brands/`

    {
        "name": "Jazz"
    }

### Response POST

    {
        "data": {
            "name": "Jazz",
            "id": 4
        },
        "message": "Created name success"
    }


### Request PUT

`PUT v1/cars/brands/:id`

    {
        "name": "BMW"
    }

### Response PUT

    {
        "data": {
            "updated": 1
        },
        "message": "Update name success"
    }


### Request DELETE

`DELETE v1/cars/brands/:id`

### Response DELETE

    {
        "data": {
            "deleted": 1
        },
        "message": "Delete name success"
    }



## Table cars

### Request GET ALL

`GET v1/cars/`

### Response GET ALL

    {
        "data": [
            {
                "id": 1,
                "type_id": 2,
                "brand_id": 1,
                "price": 200000,
                "year": "2019",
                "img_url": "img_contoh",
                "brand_name": "Avanza",
                "car_type": "medium"
            },
            {
                "id": 2,
                "type_id": 1,
                "brand_id": 3,
                "price": 200000,
                "year": "2019",
                "img_url": "img_contoh",
                "brand_name": "Brio",
                "car_type": "small"
            },
            {
                "id": 4,
                "type_id": 1,
                "brand_id": 1,
                "price": 100000,
                "year": "2021",
                "img_url": "http://res.cloudinary.com/dq5jhu4au/image/upload/v1699617623/jrb86p9zvm7xwcfwdpto.png",
                "brand_name": "Avanza",
                "car_type": "small"
            }
        ],
        "message": "Get all Cars"
    }


### Request GET BY ID

`GET v1/cars/:id`

### Response GET BY ID

    {
        "data": [
            {
                "id": 2,
                "type_id": 1,
                "brand_id": 3,
                "price": 200000,
                "year": "2019",
                "img_url": "img_contoh"
            }
        ],
        "message": "Get cars by Id"
    }


### Request POST

`POST v1/cars/`

    {
        "type_id": 1,
        "brand_id": 2,
        "price": 400000,
        "year: "2010",
        "picture": select file
    }

### Response POST

    {
        "data": {
            "type_id": 1,
            "brand_id": 2,
            "price": 400000,
            "year": "2010",
            "img_url": "http://res.cloudinary.com/dq5jhu4au/image/upload/v1699622523/l1mmvcjtbmwomx7vi3up.png",
            "id": 6
        },
        "message": "Created car success"
    }


### Request PUT

`PUT v1/cars/:id`

    {
        "type_id": 1,
        "brand_id": 2,
        "price": 500000,
        "year: "2016",
        "picture": select file
    }

### Response PUT

    {
        "data": {
            "updated": 1
        },
        "message": "Update car success"
    }


### Request DELETE

`DELETE v1/cars/:id`

### Response DELETE

    {
        "data": {
            "deleted": 1
        },
        "message": "Delete car success"
    }

