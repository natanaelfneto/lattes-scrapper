# Personal Page

Template to render a personal github page based on a JSON object data

## Getting Started

1. Create a file named 'data.json' for your personal info.
2. Create a folder for background image, your profile image
    1. You can add institutions logos with a (120 x 120)px (optional)
3. Add the data as the following examples:

- Global json data structure:
```json
{
    "data": {
        "settings": {
            "name": "Your Own Name",
            "title": "Your title position (ex: Computer Engineer)",
            "logos": "assets/img/logos/",
            "background_image": "assets/img/bg.png",
            "profile_image": "assets/img/profile.png"
        },
        "sidebar": {
            "academic": {
                "is_enabled": true, //if false, just leave the object array empty
                "object": [{},{},{}...]
            },
            "github": {
                "is_enabled": true, //if false, just leave the object array empty
                "object": [{},{},{}...]
            },
            "linkedin": {
                "is_enabled": true, //if false, just leave the object array empty
                "object": [{},{},{}...]
            }
        },
        "content": {
            "experiences": {
                "is_enabled": true, //if false, just leave the object array empty
                "object": [{},{},{}...]
            },
            "published": {
                "is_enabled": true, //if false, just leave the object array empty
                "object": [{},{},{}...]
            }
        }
    }
}
```

- Sidebar's academic object data structure:
```json
{
    "academic": {
        "is_enabled": true, //if false, just leave the object array empty
        "object": [
            {
                "degree": "Master",
                "title": "Name of your master degree",
                "acronym": "MSc",
                "year": {
                    "start": "2003",
                    "end": "2005"
                },
                "department": {
                    "name": "Computer Science Departmemnt"
                },
                "institution": {
                    "name": "Your University Name"
                }
            },
            {
                "degree": "Bachelor",
                "title": "Name of your bachelor degree",
                "acronym": "B",
                "year": {
                    "start": "2003",
                    "end": "2005"
                },
                "department": {
                    "name": "Computer Science Departmemnt"
                },
                "institution": {
                    "name": "Your University Name"
                }
            },
        ]
    }
}
```

- Sidebar's github object data structure
```json
{
    "github": {
        "is_enabled": true, //if false, just leave the object array empty
        "object": {
            "user": {
                "login": "your_github_login"
            },
            "orgs": {}, //leave empty, it will be populated by API requests
            "featured_repos": [
                {
                    "name": "you_feature_repo",
                    "data": {} //leave empty, it will be populated by API requests
                },
                {
                    "name": "you_feature_repo",
                    "data": {} //leave empty, it will be populated by API requests
                },
            ]
        }
    },
}
```

- Content's experiences data structure:
```json
{
    "experiences": {
        "is_enabled": true, //if false, just leave the object array empty
        "object": [
            {
                "description": "description of this xperience",
                "place": {
                    "name": "name of the institution",
                    "acronym": "NotI",
                    "image": {
                        "logo": "noti.png"
                    },
                    "page_url": "http://noti.com/",
                    "parents": [
                        {
                            "name": "this institution is related to this experience",
                            "acronym": "bleh",
                            "image": {
                                "logo": "bleh.png"
                            },
                            "page_url": "http://bleh.php"
                        }
                    ]
                },
                "position": "Sênior Developer",
                "location": "Washington, DC",
                "year": {
                    "start": "2017",
                    "end": "2018"
                }
            }, 
        ]
    },
```

- Content's published data structure:
```json
{
    "published": {
        "is_enabled": true, //if false, just leave the object array empty
        "object": [
            {
                "description": "abstract or resume to this work/paper",
                "sources": [
                    {
                        "icon": "far fa-file-pdf", //use fontawesome 5 free icon set
                        "link": "https://link.to.the.pdf"
                    }
                ],
                "title": "article title",
                "authors": [
                    {
                        "name": "Name, L."
                    },
                    {
                        "name": "Name, A. L."
                    },
                ],
                "periodic": {
                    "name": "PERIODIC-US",
                    "register": {
                        "type": "issn", //available options are ISSN and ISBN types
                        "value": "9999-0000"
                    },
                    "link": "https://periodic.com"
                },
                "year": "2018"
            },
        ]
    }
}
```
### Prerequisites



```
```

### Installing

## Deployment

## Built With

* [VueJS]() - The web library used

## Authors

* **Natanael F. Neto** - *Initial work* - [natanaelfneto](https://natanaelfneto.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details