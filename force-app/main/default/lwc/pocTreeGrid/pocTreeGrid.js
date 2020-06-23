import { LightningElement, api, track } from 'lwc';

const columns = [
    {
        type: 'text',
        fieldName: 'countrySite',
        label: 'Country or Site',
        sortable: true,
    },
    {
        type: 'phone',
        fieldName: 'phone',
        label: 'Phone Number',
        sortable: true,
    },
    {
        type: 'number',
        fieldName: 'numSubjects',
        label: 'Subjects',
        sortable: true,
    },
]; 

const  data = [{
    "countrySite": "Bangladesh",
    "phone": "775-927-0344",
    "numSubjects": 116,
    "_children": [
      {
        "countrySite": "International University College of Nursing (IUCN)",
        "status": "Enrollment Closed",
        "phone": "410-272-0316",
        "numSubjects": 21
      },
      {
        "countrySite": "Maakhir University",
        "status": "Recruiting",
        "phone": "983-792-9252",
        "numSubjects": 1
      },
      {
        "countrySite": "William and Catherine Booth College",
        "status": "Terminated",
        "phone": "382-151-4676",
        "numSubjects": 27
      },
      {
        "countrySite": "University of Melbourne",
        "status": "Suspended",
        "phone": "616-460-1684",
        "numSubjects": 28
      },
      {
        "countrySite": "Universidad Estatal a Distancia",
        "status": "Enrollment Closed",
        "phone": "428-595-1168",
        "numSubjects": 10
      }
    ]
  }, {
    "countrySite": "Slovenia",
    "phone": "257-342-1327",
    "numSubjects": 54,
    "_children": [
      {
        "countrySite": "Mongolian State University of Education",
        "status": "Completed",
        "phone": "910-895-9978",
        "numSubjects": 6
      },
      {
        "countrySite": "1 December University of Alba Iulia",
        "status": "Enrollment Closed",
        "phone": "890-946-0562",
        "numSubjects": 21
      },
      {
        "countrySite": "Moscow State Academy of Applied Biotechnology",
        "status": "Completed",
        "phone": "223-682-4231",
        "numSubjects": 1
      },
      {
        "countrySite": "Instituto Superior de Transportes e Comunicações",
        "status": "Recruiting",
        "phone": "304-520-5577",
        "numSubjects": 7
      },
      {
        "countrySite": "Agricultural University of Szczecin",
        "status": "Suspended",
        "phone": "934-527-6393",
        "numSubjects": 10
      },
      {
        "countrySite": "University of Newcastle-upon-Tyne",
        "status": "Recruiting",
        "phone": "100-449-9641",
        "numSubjects": 23
      },
      {
        "countrySite": "Medaille College",
        "status": "Enrollment Closed",
        "phone": "979-192-3073",
        "numSubjects": 18
      },
      {
        "countrySite": "Universidad Bicentenaria de Aragua",
        "status": "Enrollment Open",
        "phone": "974-673-4928",
        "numSubjects": 14
      },
      {
        "countrySite": "Berne University",
        "status": "Completed",
        "phone": "993-379-4811",
        "numSubjects": 12
      }
    ]
  }, {
    "countrySite": "China",
    "phone": "874-865-2476",
    "numSubjects": 136,
    "_children": [
      {
        "countrySite": "Henan Normal University",
        "status": "Suspended",
        "phone": "702-578-4326",
        "numSubjects": 28
      }
    ]
  }, {
    "countrySite": "China",
    "phone": "370-851-3168",
    "numSubjects": 280,
    "_children": [
      {
        "countrySite": "The Manchester Metropolitan University",
        "status": "Suspended",
        "phone": "271-909-9197",
        "numSubjects": 29
      },
      {
        "countrySite": "Kagoshima University",
        "status": "Suspended",
        "phone": "812-973-2565",
        "numSubjects": 11
      },
      {
        "countrySite": "Botswana College of Agriculture",
        "status": "Suspended",
        "phone": "352-610-4929",
        "numSubjects": 6
      },
      {
        "countrySite": "Universitas Ma Chung",
        "status": "Terminated",
        "phone": "833-934-4888",
        "numSubjects": 9
      },
      {
        "countrySite": "Universidad Autónoma del Paraguay",
        "status": "Recruiting",
        "phone": "883-421-9243",
        "numSubjects": 29
      },
      {
        "countrySite": "Nara University",
        "status": "Enrollment Open",
        "phone": "554-717-2276",
        "numSubjects": 8
      },
      {
        "countrySite": "Lulea University of Technology",
        "status": "Terminated",
        "phone": "504-934-2554",
        "numSubjects": 18
      },
      {
        "countrySite": "Sri Sathya Sai Institute of Higher Learning",
        "status": "Suspended",
        "phone": "976-735-1365",
        "numSubjects": 2
      },
      {
        "countrySite": "National Hualien Teachers College",
        "status": "Recruiting",
        "phone": "741-392-0299",
        "numSubjects": 21
      },
      {
        "countrySite": "Stillman College",
        "status": "Completed",
        "phone": "807-769-8963",
        "numSubjects": 8
      }
    ]
  }, {
    "countrySite": "Indonesia",
    "phone": "958-387-4289",
    "numSubjects": 169,
    "_children": [
      {
        "countrySite": "Centro Universitário Claretiano",
        "status": "Enrollment Open",
        "phone": "988-948-6380",
        "numSubjects": 4
      },
      {
        "countrySite": "University of Kragujevac",
        "status": "Suspended",
        "phone": "580-412-9856",
        "numSubjects": 22
      },
      {
        "countrySite": "North Carolina State University",
        "status": "Completed",
        "phone": "981-854-1716",
        "numSubjects": 22
      }
    ]
  }, {
    "countrySite": "Guatemala",
    "phone": "997-253-2040",
    "numSubjects": 248,
    "_children": [
      {
        "countrySite": "Stavropol State University",
        "status": "Recruiting",
        "phone": "395-787-3490",
        "numSubjects": 27
      },
      {
        "countrySite": "Kanazawa University",
        "status": "Completed",
        "phone": "655-724-6817",
        "numSubjects": 5
      },
      {
        "countrySite": "KBU International College",
        "status": "Enrollment Open",
        "phone": "743-101-7423",
        "numSubjects": 8
      },
      {
        "countrySite": "Westminster College Fulton",
        "status": "Enrollment Open",
        "phone": "136-588-3672",
        "numSubjects": 12
      },
      {
        "countrySite": "Fordham University",
        "status": "Completed",
        "phone": "281-945-5936",
        "numSubjects": 9
      },
      {
        "countrySite": "Tbilisi Teaching University",
        "status": "Completed",
        "phone": "183-220-5431",
        "numSubjects": 16
      },
      {
        "countrySite": "Hiroshima Bunkyo Women's University",
        "status": "Recruiting",
        "phone": "842-700-7911",
        "numSubjects": 5
      },
      {
        "countrySite": "Katholische Fachhochschule Nordrhein-Westfalen",
        "status": "Enrollment Closed",
        "phone": "508-321-4950",
        "numSubjects": 21
      },
      {
        "countrySite": "University of Roorkee",
        "status": "Enrollment Open",
        "phone": "908-850-5559",
        "numSubjects": 7
      },
      {
        "countrySite": "Universidade Tiradentes",
        "status": "Completed",
        "phone": "405-406-9294",
        "numSubjects": 30
      },
      {
        "countrySite": "Centro Universitário Monte Serrat",
        "status": "Recruiting",
        "phone": "172-633-9259",
        "numSubjects": 16
      },
      {
        "countrySite": "Universidad Central del Valle del Cauca",
        "status": "Enrollment Closed",
        "phone": "808-964-4586",
        "numSubjects": 12
      },
      {
        "countrySite": "University of Applied Sciences",
        "status": "Enrollment Open",
        "phone": "284-105-3214",
        "numSubjects": 22
      },
      {
        "countrySite": "University of California, Riverside",
        "status": "Enrollment Closed",
        "phone": "427-576-5490",
        "numSubjects": 26
      }
    ]
  }, {
    "countrySite": "China",
    "phone": "173-895-1867",
    "numSubjects": 166,
    "_children": [
      {
        "countrySite": "Universidade Moderna de Lisboa",
        "status": "Suspended",
        "phone": "796-855-3046",
        "numSubjects": 29
      },
      {
        "countrySite": "University of Hawaii - Hilo",
        "status": "Completed",
        "phone": "107-181-8509",
        "numSubjects": 7
      }
    ]
  }, {
    "countrySite": "Indonesia",
    "phone": "831-271-6287",
    "numSubjects": 227,
    "_children": [
      {
        "countrySite": "Marian College of Fond Du Lac",
        "status": "Terminated",
        "phone": "799-475-9124",
        "numSubjects": 29
      },
      {
        "countrySite": "The Manchester Metropolitan University",
        "status": "Suspended",
        "phone": "246-934-0657",
        "numSubjects": 17
      },
      {
        "countrySite": "Vaal University of Technology",
        "status": "Terminated",
        "phone": "867-963-0135",
        "numSubjects": 11
      },
      {
        "countrySite": "Balikesir University",
        "status": "Terminated",
        "phone": "753-406-2532",
        "numSubjects": 21
      },
      {
        "countrySite": "Technische Universität Graz",
        "status": "Completed",
        "phone": "432-848-2652",
        "numSubjects": 21
      },
      {
        "countrySite": "Bank Street College of Education",
        "status": "Suspended",
        "phone": "529-114-6560",
        "numSubjects": 8
      },
      {
        "countrySite": "Slobomir P Univerzitet",
        "status": "Recruiting",
        "phone": "878-350-0826",
        "numSubjects": 18
      },
      {
        "countrySite": "Université de Ngaoundéré",
        "status": "Completed",
        "phone": "550-830-5199",
        "numSubjects": 20
      },
      {
        "countrySite": "Universiteit Antwerpen Management School",
        "status": "Recruiting",
        "phone": "744-204-8279",
        "numSubjects": 1
      },
      {
        "countrySite": "Gondar University",
        "status": "Suspended",
        "phone": "278-769-4685",
        "numSubjects": 20
      },
      {
        "countrySite": "Kyoto Prefectural University",
        "status": "Completed",
        "phone": "292-573-2543",
        "numSubjects": 15
      }
    ]
  }, {
    "countrySite": "Argentina",
    "phone": "140-290-5483",
    "numSubjects": 145,
    "_children": [
      {
        "countrySite": "Arts, Sciences and Technology University",
        "status": "Terminated",
        "phone": "978-587-3397",
        "numSubjects": 23
      },
      {
        "countrySite": "Alice Lloyd College",
        "status": "Recruiting",
        "phone": "424-558-7172",
        "numSubjects": 8
      }
    ]
  }, {
    "countrySite": "Bulgaria",
    "phone": "878-940-8643",
    "numSubjects": 287,
    "_children": [
      {
        "countrySite": "Liaoning Technical University",
        "status": "Suspended",
        "phone": "186-769-4785",
        "numSubjects": 6
      }
    ]
  }, {
    "countrySite": "China",
    "phone": "114-659-1326",
    "numSubjects": 233,
    "_children": [
      {
        "countrySite": "Universitas Gunadarma",
        "status": "Terminated",
        "phone": "419-303-3312",
        "numSubjects": 3
      },
      {
        "countrySite": "Sakarya University",
        "status": "Enrollment Closed",
        "phone": "376-736-2167",
        "numSubjects": 15
      },
      {
        "countrySite": "Tripura University",
        "status": "Suspended",
        "phone": "125-480-9940",
        "numSubjects": 24
      },
      {
        "countrySite": "Cross River University of Science and Technology",
        "status": "Recruiting",
        "phone": "452-390-9340",
        "numSubjects": 18
      },
      {
        "countrySite": "National Aerospace University Kharkov Aviation Institute",
        "status": "Enrollment Closed",
        "phone": "950-871-2409",
        "numSubjects": 16
      },
      {
        "countrySite": "Royal Roads University",
        "status": "Enrollment Open",
        "phone": "106-152-5495",
        "numSubjects": 4
      },
      {
        "countrySite": "Atish Dipankar University",
        "status": "Enrollment Closed",
        "phone": "474-715-4530",
        "numSubjects": 9
      },
      {
        "countrySite": "Baghdad College of Pharmacy",
        "status": "Terminated",
        "phone": "603-455-8639",
        "numSubjects": 27
      },
      {
        "countrySite": "University of Minnesota - Twin Cities Campus",
        "status": "Enrollment Open",
        "phone": "659-420-3892",
        "numSubjects": 25
      },
      {
        "countrySite": "Akademia Podlaska",
        "status": "Recruiting",
        "phone": "914-768-6255",
        "numSubjects": 7
      },
      {
        "countrySite": "Indira Gandhi National Open University",
        "status": "Recruiting",
        "phone": "311-353-5822",
        "numSubjects": 20
      },
      {
        "countrySite": "Kangnam University",
        "status": "Terminated",
        "phone": "367-213-7702",
        "numSubjects": 20
      }
    ]
  }, {
    "countrySite": "Syria",
    "phone": "523-769-8984",
    "numSubjects": 147,
    "_children": [
      {
        "countrySite": "Asian University of Science and Technology",
        "status": "Terminated",
        "phone": "259-962-7820",
        "numSubjects": 6
      },
      {
        "countrySite": "Dutch University Institute for Art History (DUIA)",
        "status": "Suspended",
        "phone": "400-572-2058",
        "numSubjects": 2
      },
      {
        "countrySite": "Chaudhary Charan Singh University",
        "status": "Recruiting",
        "phone": "786-621-2207",
        "numSubjects": 21
      },
      {
        "countrySite": "Université Vincennes Saint-Denis (Paris VIII)",
        "status": "Recruiting",
        "phone": "703-808-7688",
        "numSubjects": 15
      },
      {
        "countrySite": "Instituto Politécnico de Portalegre",
        "status": "Enrollment Closed",
        "phone": "507-321-4402",
        "numSubjects": 27
      },
      {
        "countrySite": "Ecole Nationale de la Statistique et de l'Administration Economique",
        "status": "Completed",
        "phone": "248-697-7777",
        "numSubjects": 21
      },
      {
        "countrySite": "Al-Azhar University of Gaza",
        "status": "Completed",
        "phone": "789-729-8838",
        "numSubjects": 18
      },
      {
        "countrySite": "Shanxi University",
        "status": "Recruiting",
        "phone": "721-536-5571",
        "numSubjects": 25
      },
      {
        "countrySite": "Independent University, Bangladesh",
        "status": "Completed",
        "phone": "536-666-2338",
        "numSubjects": 28
      },
      {
        "countrySite": "Russian-Armenian (Slavonic) State University",
        "status": "Enrollment Open",
        "phone": "657-522-7770",
        "numSubjects": 20
      },
      {
        "countrySite": "Lankaran State University",
        "status": "Recruiting",
        "phone": "712-235-4006",
        "numSubjects": 22
      },
      {
        "countrySite": "Baha'i Institute for Higher Education",
        "status": "Suspended",
        "phone": "973-875-2317",
        "numSubjects": 15
      },
      {
        "countrySite": "University of Lethbridge",
        "status": "Recruiting",
        "phone": "164-454-4730",
        "numSubjects": 25
      },
      {
        "countrySite": "Southern Ural State University",
        "status": "Enrollment Closed",
        "phone": "555-913-2147",
        "numSubjects": 17
      },
      {
        "countrySite": "City University of New York, Brooklyn College",
        "status": "Enrollment Open",
        "phone": "395-940-4380",
        "numSubjects": 22
      },
      {
        "countrySite": "Skyline University College, Sharjah",
        "status": "Suspended",
        "phone": "742-142-6706",
        "numSubjects": 14
      },
      {
        "countrySite": "Veterinärmedizinische Universität Wien",
        "status": "Completed",
        "phone": "335-732-4808",
        "numSubjects": 27
      },
      {
        "countrySite": "Black Hawk College",
        "status": "Terminated",
        "phone": "191-949-2107",
        "numSubjects": 2
      }
    ]
  }, {
    "countrySite": "Czech Republic",
    "phone": "483-722-0196",
    "numSubjects": 87,
    "_children": [
      {
        "countrySite": "Norfolk State University",
        "status": "Enrollment Open",
        "phone": "709-771-2816",
        "numSubjects": 23
      },
      {
        "countrySite": "Chittagong Independent University",
        "status": "Terminated",
        "phone": "497-402-2004",
        "numSubjects": 15
      },
      {
        "countrySite": "University of Sulaimania (Kurdistan Region)",
        "status": "Enrollment Open",
        "phone": "826-903-0100",
        "numSubjects": 20
      },
      {
        "countrySite": "Tsuru University",
        "status": "Suspended",
        "phone": "511-771-8625",
        "numSubjects": 29
      },
      {
        "countrySite": "Don State Technical University",
        "status": "Suspended",
        "phone": "438-214-3848",
        "numSubjects": 3
      },
      {
        "countrySite": "Shanghai Lixin University of Commerce",
        "status": "Suspended",
        "phone": "767-757-3357",
        "numSubjects": 30
      },
      {
        "countrySite": "Universitas Klabat",
        "status": "Enrollment Open",
        "phone": "605-371-2154",
        "numSubjects": 8
      },
      {
        "countrySite": "Academy of Public Administration",
        "status": "Recruiting",
        "phone": "206-842-4662",
        "numSubjects": 12
      },
      {
        "countrySite": "Instituto Politécnico de Bragança",
        "status": "Enrollment Open",
        "phone": "704-319-3091",
        "numSubjects": 10
      }
    ]
  }, {
    "countrySite": "Indonesia",
    "phone": "506-937-5678",
    "numSubjects": 297,
    "_children": [
      {
        "countrySite": "Nanjing Normal University",
        "status": "Terminated",
        "phone": "617-598-3141",
        "numSubjects": 22
      },
      {
        "countrySite": "Transylvania University",
        "status": "Completed",
        "phone": "532-802-5459",
        "numSubjects": 9
      },
      {
        "countrySite": "Universidad Católica Madre y Maestra",
        "status": "Enrollment Open",
        "phone": "427-395-5174",
        "numSubjects": 28
      },
      {
        "countrySite": "Zhanjiang Ocean University",
        "status": "Terminated",
        "phone": "517-222-4792",
        "numSubjects": 24
      },
      {
        "countrySite": "Sultan Salahuddin Abdul Aziz Shah Polytechnic",
        "status": "Completed",
        "phone": "339-872-5367",
        "numSubjects": 30
      },
      {
        "countrySite": "University of Medicine and Dentistry of New Jersey",
        "status": "Terminated",
        "phone": "786-707-5140",
        "numSubjects": 30
      },
      {
        "countrySite": "University of Pannonia",
        "status": "Enrollment Closed",
        "phone": "386-634-8243",
        "numSubjects": 5
      },
      {
        "countrySite": "Fatih University",
        "status": "Suspended",
        "phone": "256-926-7689",
        "numSubjects": 11
      },
      {
        "countrySite": "Andrews University",
        "status": "Terminated",
        "phone": "525-972-5037",
        "numSubjects": 20
      },
      {
        "countrySite": "Fukui University",
        "status": "Suspended",
        "phone": "863-646-3303",
        "numSubjects": 3
      },
      {
        "countrySite": "Université du Sud, Toulon et Var",
        "status": "Terminated",
        "phone": "398-239-5270",
        "numSubjects": 12
      },
      {
        "countrySite": "University of Economics Varna",
        "status": "Enrollment Closed",
        "phone": "282-301-1451",
        "numSubjects": 19
      },
      {
        "countrySite": "The Art Institutes International San Francisco",
        "status": "Enrollment Closed",
        "phone": "263-599-3716",
        "numSubjects": 28
      }
    ]
  }, {
    "countrySite": "Canada",
    "phone": "651-642-4892",
    "numSubjects": 91,
    "_children": [
      {
        "countrySite": "Yildirim Beyazit University",
        "status": "Recruiting",
        "phone": "776-553-4892",
        "numSubjects": 25
      },
      {
        "countrySite": "Baltic State Technical University",
        "status": "Enrollment Open",
        "phone": "709-545-4286",
        "numSubjects": 25
      },
      {
        "countrySite": "Université M'hamed Bouguerra de Boumerdes",
        "status": "Terminated",
        "phone": "491-833-2514",
        "numSubjects": 27
      },
      {
        "countrySite": "Tianjin Medical University",
        "status": "Enrollment Closed",
        "phone": "556-885-6458",
        "numSubjects": 27
      },
      {
        "countrySite": "York College of Pennsylvania",
        "status": "Suspended",
        "phone": "554-287-3813",
        "numSubjects": 24
      },
      {
        "countrySite": "Institute of Technology and Management",
        "status": "Recruiting",
        "phone": "284-246-6666",
        "numSubjects": 11
      },
      {
        "countrySite": "Zhejiang Forestry University",
        "status": "Completed",
        "phone": "518-597-9884",
        "numSubjects": 27
      },
      {
        "countrySite": "Smolensk State Medical Academy",
        "status": "Enrollment Open",
        "phone": "921-990-6160",
        "numSubjects": 6
      },
      {
        "countrySite": "National Aviation Academy",
        "status": "Recruiting",
        "phone": "694-376-7100",
        "numSubjects": 6
      },
      {
        "countrySite": "Istanbul University",
        "status": "Completed",
        "phone": "768-639-9659",
        "numSubjects": 21
      },
      {
        "countrySite": "Indira Gandhi Institute of Medical Sciences",
        "status": "Completed",
        "phone": "201-679-5639",
        "numSubjects": 12
      },
      {
        "countrySite": "Universiti Malaysia Kelantan",
        "status": "Suspended",
        "phone": "842-664-8389",
        "numSubjects": 4
      }
    ]
  }, {
    "countrySite": "Poland",
    "phone": "613-343-6978",
    "numSubjects": 62,
    "_children": [
      {
        "countrySite": "Tabriz Islamic Art University",
        "status": "Terminated",
        "phone": "425-973-9691",
        "numSubjects": 5
      },
      {
        "countrySite": "Ishik University",
        "status": "Recruiting",
        "phone": "188-540-7279",
        "numSubjects": 8
      },
      {
        "countrySite": "Universidad Motolinía del Pedregal",
        "status": "Enrollment Closed",
        "phone": "610-415-4217",
        "numSubjects": 2
      },
      {
        "countrySite": "University of Roma \"Tor Vergata\"",
        "status": "Recruiting",
        "phone": "184-507-4279",
        "numSubjects": 1
      },
      {
        "countrySite": "Novosibirsk State Technical University",
        "status": "Terminated",
        "phone": "168-343-1880",
        "numSubjects": 12
      },
      {
        "countrySite": "Universidad Tecnológica América",
        "status": "Recruiting",
        "phone": "869-782-1720",
        "numSubjects": 12
      },
      {
        "countrySite": "University of Targu Jiu",
        "status": "Completed",
        "phone": "397-839-1649",
        "numSubjects": 26
      },
      {
        "countrySite": "National Technical University (Kiev Politechnical Institute)",
        "status": "Suspended",
        "phone": "500-165-3915",
        "numSubjects": 22
      },
      {
        "countrySite": "University of Nueva Caceres",
        "status": "Completed",
        "phone": "139-806-6492",
        "numSubjects": 30
      },
      {
        "countrySite": "Dr. YS Parmar University of Horticulture and Forestry",
        "status": "Suspended",
        "phone": "844-310-0487",
        "numSubjects": 11
      },
      {
        "countrySite": "Nigde University",
        "status": "Terminated",
        "phone": "757-268-4182",
        "numSubjects": 24
      },
      {
        "countrySite": "Woosuk University",
        "status": "Enrollment Open",
        "phone": "407-930-2765",
        "numSubjects": 11
      },
      {
        "countrySite": "Kent State University - Stark",
        "status": "Suspended",
        "phone": "121-685-0809",
        "numSubjects": 10
      }
    ]
  }, {
    "countrySite": "Brazil",
    "phone": "210-398-1244",
    "numSubjects": 135,
    "_children": [
      {
        "countrySite": "National Institute of Technology Kurukshetra",
        "status": "Terminated",
        "phone": "690-252-0658",
        "numSubjects": 1
      },
      {
        "countrySite": "Universidade Metropolitana de Santos",
        "status": "Suspended",
        "phone": "584-720-3495",
        "numSubjects": 20
      },
      {
        "countrySite": "Universitas Jambi",
        "status": "Suspended",
        "phone": "891-742-3340",
        "numSubjects": 3
      },
      {
        "countrySite": "Ecole Nationale Supérieure Agronomique de Toulouse",
        "status": "Recruiting",
        "phone": "967-252-1447",
        "numSubjects": 9
      },
      {
        "countrySite": "Herat University",
        "status": "Recruiting",
        "phone": "470-349-2050",
        "numSubjects": 20
      },
      {
        "countrySite": "Universitas 17 Agustus 1945 Surabaya",
        "status": "Enrollment Closed",
        "phone": "866-550-3568",
        "numSubjects": 17
      },
      {
        "countrySite": "College of Idaho",
        "status": "Terminated",
        "phone": "764-233-6150",
        "numSubjects": 20
      },
      {
        "countrySite": "Universitas Kristen Maranatha",
        "status": "Enrollment Closed",
        "phone": "252-719-0152",
        "numSubjects": 14
      },
      {
        "countrySite": "Texas Southern University",
        "status": "Enrollment Closed",
        "phone": "610-571-4871",
        "numSubjects": 24
      },
      {
        "countrySite": "Universidad Mexicana del Noreste",
        "status": "Suspended",
        "phone": "463-780-2553",
        "numSubjects": 16
      },
      {
        "countrySite": "Hampton College",
        "status": "Suspended",
        "phone": "831-874-4912",
        "numSubjects": 8
      },
      {
        "countrySite": "University of the Free State",
        "status": "Completed",
        "phone": "377-830-3298",
        "numSubjects": 25
      },
      {
        "countrySite": "Massachusetts School of Professional Psychology",
        "status": "Enrollment Open",
        "phone": "681-199-5846",
        "numSubjects": 27
      },
      {
        "countrySite": "Ecole Nationale Supérieure de Physique de Grenoble",
        "status": "Suspended",
        "phone": "456-509-9423",
        "numSubjects": 8
      },
      {
        "countrySite": "University of Medicine and Pharmacy of Bucharest",
        "status": "Terminated",
        "phone": "739-460-4580",
        "numSubjects": 17
      },
      {
        "countrySite": "Ecole National d'Agriculture de Meknes",
        "status": "Completed",
        "phone": "336-406-0141",
        "numSubjects": 16
      },
      {
        "countrySite": "Kaunas University of Technology",
        "status": "Enrollment Open",
        "phone": "770-586-6887",
        "numSubjects": 8
      },
      {
        "countrySite": "Bangladesh University of Textiles",
        "status": "Enrollment Open",
        "phone": "156-527-4761",
        "numSubjects": 25
      },
      {
        "countrySite": "Central Institute of Fisheries Education",
        "status": "Completed",
        "phone": "935-663-6137",
        "numSubjects": 17
      },
      {
        "countrySite": "Nairobi Institute of Business Studies ",
        "status": "Suspended",
        "phone": "125-332-7915",
        "numSubjects": 19
      }
    ]
  }, {
    "countrySite": "China",
    "phone": "696-917-5159",
    "numSubjects": 113,
    "_children": [
      {
        "countrySite": "State University of New York Downstate Medical Center",
        "status": "Enrollment Open",
        "phone": "823-375-9512",
        "numSubjects": 12
      },
      {
        "countrySite": "Athenaeum of Ohio",
        "status": "Suspended",
        "phone": "940-889-2108",
        "numSubjects": 26
      },
      {
        "countrySite": "National American University, Sioux Falls",
        "status": "Recruiting",
        "phone": "900-230-0815",
        "numSubjects": 25
      },
      {
        "countrySite": "Mendeleev Russian University of Chemical Technology",
        "status": "Completed",
        "phone": "646-229-5789",
        "numSubjects": 27
      },
      {
        "countrySite": "University of Bari",
        "status": "Enrollment Open",
        "phone": "534-577-5534",
        "numSubjects": 20
      },
      {
        "countrySite": "American Conservatory Theater",
        "status": "Enrollment Closed",
        "phone": "378-147-3914",
        "numSubjects": 12
      },
      {
        "countrySite": "Mount Sinai School of Medicine",
        "status": "Suspended",
        "phone": "742-871-2548",
        "numSubjects": 4
      },
      {
        "countrySite": "University of Bihac",
        "status": "Recruiting",
        "phone": "394-516-6004",
        "numSubjects": 20
      },
      {
        "countrySite": "Lesley University",
        "status": "Enrollment Closed",
        "phone": "103-712-4174",
        "numSubjects": 8
      },
      {
        "countrySite": "Slovak Medical University",
        "status": "Enrollment Open",
        "phone": "657-563-7152",
        "numSubjects": 9
      }
    ]
  }, {
    "countrySite": "Philippines",
    "phone": "675-866-0452",
    "numSubjects": 130,
    "_children": [
      {
        "countrySite": "International Medical University",
        "status": "Completed",
        "phone": "858-819-6231",
        "numSubjects": 10
      },
      {
        "countrySite": "Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg",
        "status": "Terminated",
        "phone": "997-169-7905",
        "numSubjects": 1
      },
      {
        "countrySite": "Universitas Indonusa Esa Unggul",
        "status": "Recruiting",
        "phone": "331-999-0874",
        "numSubjects": 22
      }
    ]
  }, {
    "countrySite": "Argentina",
    "phone": "539-904-2004",
    "numSubjects": 246,
    "_children": [
      {
        "countrySite": "Fachhochschule Mannheim, Hochschule für Technik und Gestaltung",
        "status": "Enrollment Open",
        "phone": "288-958-2509",
        "numSubjects": 1
      }
    ]
  }, {
    "countrySite": "France",
    "phone": "548-270-0164",
    "numSubjects": 98,
    "_children": [
      {
        "countrySite": "Payap University Chaiang Mai",
        "status": "Terminated",
        "phone": "916-908-6812",
        "numSubjects": 25
      },
      {
        "countrySite": "Bowdoin College",
        "status": "Suspended",
        "phone": "218-645-4839",
        "numSubjects": 9
      },
      {
        "countrySite": "Universidad Distral \"Francisco José de Caldas\"",
        "status": "Suspended",
        "phone": "556-701-6188",
        "numSubjects": 16
      },
      {
        "countrySite": "Universität Osnabrück",
        "status": "Completed",
        "phone": "101-393-6556",
        "numSubjects": 27
      },
      {
        "countrySite": "University of Glasgow",
        "status": "Enrollment Open",
        "phone": "917-926-3799",
        "numSubjects": 24
      },
      {
        "countrySite": "Detroit College of Business",
        "status": "Completed",
        "phone": "719-903-2133",
        "numSubjects": 9
      },
      {
        "countrySite": "Medical Academy Karol Marcinkowski in Poznan",
        "status": "Suspended",
        "phone": "747-567-4593",
        "numSubjects": 23
      },
      {
        "countrySite": "Universidad Autónoma de Entre Ríos",
        "status": "Recruiting",
        "phone": "964-479-8738",
        "numSubjects": 8
      },
      {
        "countrySite": "National College of Arts",
        "status": "Enrollment Open",
        "phone": "836-590-3467",
        "numSubjects": 5
      },
      {
        "countrySite": "Purdue University North Central",
        "status": "Enrollment Open",
        "phone": "863-987-3526",
        "numSubjects": 19
      },
      {
        "countrySite": "Menoufia University",
        "status": "Suspended",
        "phone": "164-934-8455",
        "numSubjects": 22
      },
      {
        "countrySite": "University of South Bohemia",
        "status": "Enrollment Open",
        "phone": "617-101-6815",
        "numSubjects": 15
      },
      {
        "countrySite": "Emily Carr Institute of Art + Design",
        "status": "Recruiting",
        "phone": "599-745-6398",
        "numSubjects": 24
      },
      {
        "countrySite": "Cleveland Institute of Art",
        "status": "Enrollment Closed",
        "phone": "304-734-4463",
        "numSubjects": 15
      },
      {
        "countrySite": "University of Florence",
        "status": "Enrollment Open",
        "phone": "504-152-7235",
        "numSubjects": 26
      },
      {
        "countrySite": "London Business School",
        "status": "Suspended",
        "phone": "770-126-1077",
        "numSubjects": 20
      },
      {
        "countrySite": "Universidad Metropolitana Castro Carazo",
        "status": "Completed",
        "phone": "756-453-6097",
        "numSubjects": 24
      },
      {
        "countrySite": "Instituto Superior de Assistentes e Intérpretes",
        "status": "Terminated",
        "phone": "517-240-3541",
        "numSubjects": 7
      },
      {
        "countrySite": "Texas College of Osteopathic Medicine",
        "status": "Completed",
        "phone": "987-514-4762",
        "numSubjects": 20
      }
    ]
  }, {
    "countrySite": "Indonesia",
    "phone": "759-819-0438",
    "numSubjects": 130,
    "_children": [
      {
        "countrySite": "Fuzhou University",
        "status": "Suspended",
        "phone": "698-547-7388",
        "numSubjects": 7
      },
      {
        "countrySite": "Tokyo Dental College",
        "status": "Enrollment Closed",
        "phone": "514-494-5740",
        "numSubjects": 12
      },
      {
        "countrySite": "Gollis University",
        "status": "Terminated",
        "phone": "225-893-5988",
        "numSubjects": 7
      },
      {
        "countrySite": "Universidad Privada del Este",
        "status": "Completed",
        "phone": "658-643-3249",
        "numSubjects": 21
      },
      {
        "countrySite": "Universidade Cruzeiro do Sul",
        "status": "Completed",
        "phone": "237-322-4444",
        "numSubjects": 7
      },
      {
        "countrySite": "Paktia University",
        "status": "Enrollment Closed",
        "phone": "238-299-8286",
        "numSubjects": 10
      },
      {
        "countrySite": "Universidad de Los Andes",
        "status": "Enrollment Closed",
        "phone": "397-266-5729",
        "numSubjects": 9
      },
      {
        "countrySite": "Pomona College",
        "status": "Enrollment Open",
        "phone": "622-183-4736",
        "numSubjects": 1
      },
      {
        "countrySite": "Universidad Central del Valle del Cauca",
        "status": "Suspended",
        "phone": "309-897-4734",
        "numSubjects": 27
      },
      {
        "countrySite": "Universiti Sultan Zainal Abidin",
        "status": "Suspended",
        "phone": "565-391-0003",
        "numSubjects": 8
      },
      {
        "countrySite": "Birzeit University",
        "status": "Terminated",
        "phone": "145-418-9904",
        "numSubjects": 6
      },
      {
        "countrySite": "The New College",
        "status": "Suspended",
        "phone": "394-567-0769",
        "numSubjects": 26
      },
      {
        "countrySite": "Walcz College",
        "status": "Recruiting",
        "phone": "949-582-8640",
        "numSubjects": 6
      },
      {
        "countrySite": "American InterContinental University Online",
        "status": "Enrollment Closed",
        "phone": "687-236-3374",
        "numSubjects": 2
      },
      {
        "countrySite": "Taylor University, Fort Wayne Campus",
        "status": "Completed",
        "phone": "921-139-8083",
        "numSubjects": 17
      },
      {
        "countrySite": "Kazak National Technical University",
        "status": "Terminated",
        "phone": "943-226-9173",
        "numSubjects": 4
      },
      {
        "countrySite": "Ivanovo State Power University",
        "status": "Enrollment Open",
        "phone": "514-276-1560",
        "numSubjects": 3
      }
    ]
  }, {
    "countrySite": "Sweden",
    "phone": "220-195-2050",
    "numSubjects": 57,
    "_children": [
      {
        "countrySite": "College for Creative Studies",
        "status": "Completed",
        "phone": "274-985-2281",
        "numSubjects": 4
      },
      {
        "countrySite": "Universidade Cidade de São Paulo",
        "status": "Suspended",
        "phone": "602-666-3481",
        "numSubjects": 18
      },
      {
        "countrySite": "Aletheia University",
        "status": "Terminated",
        "phone": "911-730-8675",
        "numSubjects": 1
      },
      {
        "countrySite": "Aga Khan University",
        "status": "Completed",
        "phone": "981-482-5521",
        "numSubjects": 10
      },
      {
        "countrySite": "Hafencity Universität Hamburg",
        "status": "Enrollment Open",
        "phone": "871-941-0660",
        "numSubjects": 10
      },
      {
        "countrySite": "Georgia Institute of Technology",
        "status": "Terminated",
        "phone": "760-177-3544",
        "numSubjects": 17
      },
      {
        "countrySite": "Klaipeda University",
        "status": "Enrollment Closed",
        "phone": "684-796-3866",
        "numSubjects": 25
      },
      {
        "countrySite": "Eastern Nazarene College",
        "status": "Completed",
        "phone": "152-854-4737",
        "numSubjects": 28
      },
      {
        "countrySite": "Daemen College",
        "status": "Enrollment Open",
        "phone": "299-243-5015",
        "numSubjects": 22
      },
      {
        "countrySite": "Technological University (Dawei)",
        "status": "Recruiting",
        "phone": "965-772-9866",
        "numSubjects": 18
      }
    ]
  }, {
    "countrySite": "Philippines",
    "phone": "489-156-4492",
    "numSubjects": 152,
    "_children": [
      {
        "countrySite": "Hankyong National University",
        "status": "Terminated",
        "phone": "784-743-1373",
        "numSubjects": 28
      },
      {
        "countrySite": "Universidad de Puerto Rico, Humacao",
        "status": "Enrollment Closed",
        "phone": "691-945-2491",
        "numSubjects": 1
      },
      {
        "countrySite": "Ahlulbait International University",
        "status": "Completed",
        "phone": "653-716-8137",
        "numSubjects": 9
      },
      {
        "countrySite": "Ecole Nationale Supérieure d'Electrochimie et d'Electrométallurgie de Gernoble",
        "status": "Recruiting",
        "phone": "816-497-0710",
        "numSubjects": 8
      },
      {
        "countrySite": "Universidade Estadual Sudoeste da Bahia",
        "status": "Enrollment Closed",
        "phone": "754-891-1791",
        "numSubjects": 23
      },
      {
        "countrySite": "Takamatsu University",
        "status": "Enrollment Closed",
        "phone": "458-153-3823",
        "numSubjects": 25
      },
      {
        "countrySite": "Imo State University",
        "status": "Terminated",
        "phone": "756-729-0159",
        "numSubjects": 7
      }
    ]
  }, {
    "countrySite": "Chad",
    "phone": "938-791-4212",
    "numSubjects": 171,
    "_children": [
      {
        "countrySite": "Universidad de Ciencias Aplicadas y Ambientales (UDCA)",
        "status": "Completed",
        "phone": "836-290-8146",
        "numSubjects": 14
      },
      {
        "countrySite": "Hongik University",
        "status": "Suspended",
        "phone": "600-733-4112",
        "numSubjects": 23
      },
      {
        "countrySite": "Okayama Shoka University",
        "status": "Recruiting",
        "phone": "355-861-3734",
        "numSubjects": 2
      },
      {
        "countrySite": "Technical University of Poznan",
        "status": "Terminated",
        "phone": "713-699-6379",
        "numSubjects": 28
      },
      {
        "countrySite": "Amman Arab University for Higher Studies",
        "status": "Enrollment Open",
        "phone": "270-641-0690",
        "numSubjects": 6
      },
      {
        "countrySite": "Universidade Metropolitana de Santos",
        "status": "Recruiting",
        "phone": "735-262-5433",
        "numSubjects": 16
      },
      {
        "countrySite": "King Saud University",
        "status": "Recruiting",
        "phone": "178-941-4413",
        "numSubjects": 20
      },
      {
        "countrySite": "South Texas College of Law",
        "status": "Completed",
        "phone": "614-784-8170",
        "numSubjects": 15
      },
      {
        "countrySite": "Liceo de Cagayan University",
        "status": "Recruiting",
        "phone": "871-962-2634",
        "numSubjects": 16
      },
      {
        "countrySite": "Metropolitan University",
        "status": "Completed",
        "phone": "761-581-9591",
        "numSubjects": 4
      },
      {
        "countrySite": "European University Institute",
        "status": "Terminated",
        "phone": "922-626-5188",
        "numSubjects": 13
      },
      {
        "countrySite": "Indiana Institute of Technologyy",
        "status": "Recruiting",
        "phone": "903-952-5026",
        "numSubjects": 17
      },
      {
        "countrySite": "Kyushu Institute of Design",
        "status": "Completed",
        "phone": "290-533-6636",
        "numSubjects": 9
      },
      {
        "countrySite": "International Academy of  Merchandising and Design Chicago",
        "status": "Recruiting",
        "phone": "221-262-0543",
        "numSubjects": 9
      },
      {
        "countrySite": "Odlar Yurdu University",
        "status": "Enrollment Open",
        "phone": "438-346-3038",
        "numSubjects": 26
      },
      {
        "countrySite": "United States Military Academy",
        "status": "Suspended",
        "phone": "108-542-8087",
        "numSubjects": 1
      },
      {
        "countrySite": "Osaka International University for Women",
        "status": "Terminated",
        "phone": "695-122-7948",
        "numSubjects": 26
      },
      {
        "countrySite": "Ramkhamhaeng University",
        "status": "Suspended",
        "phone": "957-631-3615",
        "numSubjects": 2
      }
    ]
  }];

export default class PocTreeGrid extends LightningElement {
      //Icon and title can be changed by admin user in app builder
  @api title;
  @api icon = "standard:activations";
  @api flexipageRegionWidth; //only here in case we would want to leverage some responsive behaviors on flexipages
  @track gridColumns = columns;
  @track gridData = data;
}