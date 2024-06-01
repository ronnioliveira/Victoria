export default {
    "response": {
        "code": "0",
        "message": "Operation get-client-detail completed with success.",
        "status": "SUCCESS"
    },
    "user": {
        "clientId": "PT183046200",
        "clientType": "INDIVIDUAL",
        "sources": [
            "SMPA",
            "GIS"
        ],
        "clientPartner": {
            "identificationDocuments": [],
            "addresses": [],
            "externalReferences": [],
            "gender": "Feminino",
            "roles": [],
            "bankAccounts": [],
            "fullName": "JOSE ALBERTO GOMES LOPES",
            "clientNumber": 2136380,
            "birthDate": "1978-12-25Z",
            "vatCountry": "PT",
            "additionalTaxesInfos": [],
            "legalInfos": [],
            "client3D": true,
            "relations": [],
            "maritalStatus": "Casado",
            "contacts": [
                {
                    "standard": true,
                    "entityCode": "201",
                    "contactValue": "Teste_002136380@vs.pt",
                    "contactType": "EML"
                },
                {
                    "standard": true,
                    "entityCode": "201",
                    "contactValue": "561008830",
                    "countryCode": "PT",
                    "countryDialingCode": "351",
                    "contactType": "TMV"
                }
            ],
            "vatNumber": "183046200"
        },
        "partners": [],
        "products": [
            {
                "policies": [
                    {
                        "policyActive": true,
                        "system": "ALICE",
                        "productCode": "LABOR",
                        "variantCode": "M7MIX",
                        "roles": [
                            {
                                "role": "TS",
                                "active": true,
                                "startDate": "2020-07-08+01:00"
                            }
                        ],
                        "policyType": "INDIVIDUAL",
                        "policyNumber": 11339247,
                        "objectReference": "VICTORIA Labor",
                        "policyStartDate": "2020-07-08+01:00",
                        "insuranceType": "REALACI"
                    }
                ],
                "funds": [],
                "aggregatorCode": "0001"
            },
            {
                "policies": [
                    {
                        "policyActive": true,
                        "subProductCode": "00000150",
                        "system": "ALICE",
                        "productCode": "SBASE",
                        "variantCode": "VU2AC",
                        "roles": [
                            {
                                "role": "PS",
                                "active": true,
                                "startDate": "2023-01-01Z"
                            },
                            {
                                "role": "TS",
                                "active": true,
                                "startDate": "2023-01-01Z"
                            }
                        ],
                        "policyType": "INDIVIDUAL",
                        "policyNumber": 11528417,
                        "objectReference": "VICTORIA Saúde Universal TOP Ativo +",
                        "policyStartDate": "2023-01-01Z",
                        "insuranceType": "SAUDE"
                    }
                ],
                "funds": [],
                "aggregatorCode": "0013"
            }
        ]
    }
}